require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
const midtransClient = require('midtrans-client');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Supabase
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Midtrans
const snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY,
  clientKey: process.env.MIDTRANS_CLIENT_KEY
});

// Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// GET semua produk
// Config endpoint
app.get('/api/config', (req, res) => {
  res.json({ clientKey: process.env.MIDTRANS_CLIENT_KEY });
});
app.get('/api/products', async (req, res) => {
  const { data, error } = await supabase.from('products').select('*');
  if (error) return res.status(500).json({ error });
  res.json(data);
});

// POST buat transaksi
app.post('/api/checkout', async (req, res) => {
  const { name, email, product_id } = req.body;

  const { data: product } = await supabase
    .from('products')
    .select('*')
    .eq('id', product_id)
    .single();

  if (!product) return res.status(404).json({ error: 'Produk tidak ditemukan' });

  const orderId = 'LCC-' + Date.now();

  const parameter = {
    transaction_details: {
      order_id: orderId,
      gross_amount: product.price
    },
    customer_details: {
      first_name: name,
      email: email
    },
    item_details: [{
      id: product.id,
      price: product.price,
      quantity: 1,
      name: product.name
    }]
  };

  const transaction = await snap.createTransaction(parameter);

  await supabase.from('orders').insert({
    order_id: orderId,
    product_id: product.id,
    buyer_name: name,
    buyer_email: email,
    amount: product.price,
    status: 'pending'
  });

  res.json({ token: transaction.token, order_id: orderId });
});

// POST webhook dari Midtrans
app.post('/api/webhook', async (req, res) => {
  const { order_id, transaction_status } = req.body;

  if (transaction_status === 'settlement' || transaction_status === 'capture') {
    const { data: order } = await supabase
      .from('orders')
      .select('*, products(*)')
      .eq('order_id', order_id)
      .single();

    await supabase
      .from('orders')
      .update({ status: 'paid' })
      .eq('order_id', order_id);

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: order.buyer_email,
      subject: `✅ Pembelian ${order.products.name} Berhasil!`,
      html: `
        <h2>Hei ${order.buyer_name}! 👋</h2>
        <p>Terima kasih udah beli <strong>${order.products.name}</strong>.</p>
        <p>Ini link download/akses kamu:</p>
        <a href="${order.products.download_url}" style="background:#F5C518;padding:12px 24px;color:#000;text-decoration:none;font-weight:bold;">
          Akses Produk →
        </a>
        <br><br>
        <p>— Ladang Cuan Crypto</p>
      `
    });
  }

  res.sendStatus(200);
});

app.listen(process.env.PORT, () => {
  console.log(`Server jalan di port ${process.env.PORT}`);
});