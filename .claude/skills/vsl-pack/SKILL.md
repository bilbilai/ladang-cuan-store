---
name: vsl-pack
description: Use when Billy sends a VSL / doctor-style ad script (PDF or text) and a reference video to turn into AI video. Produces VO-first pack - clean VO text for ElevenLabs, simple raw-UGC text-to-video / image-to-video prompts per script line, doctor talking clips with native speech, hook comment-bubble image + motion. Also handles "bikinin visual untuk script ini" one-off requests.
---

# VSL Pack (VO-first, simpel)

Billy bikin VSL style "dokter + B-roll cepat" (contoh referensi: dokter jas putih di klinik, cut tiap 1,5–3 detik, animasi medis 3D, footage B&W buat "attack" metode lain, UGC di rumah, caption bold putih + highlight merah).

Bahasa jawaban: Bahasa Indonesia santai (gw/lo), singkat. Prompt dalam English. Dialog/VO pakai bahasa script, word-for-word.

## Prinsip (WAJIB)
1. **Simpel & efisien.** Jangan bikin pack raksasa. Billy lebih suka prompt siap copas di chat. Jangan edit file kecuali diminta.
2. **VO-first.** VO full di-generate Billy sendiri di ElevenLabs, ditaruh di CapCut. Semua video generate TANPA audio, ditumpuk di atas VO.
3. **Dokter ngomong = suara native model video.** JANGAN attach @Audio1 / VO. Tulis dialog di prompt (`He says: "..."`) + blok DOCTOR VOICE yang sama di semua clip dokter. Di CapCut VO di-mute selama clip dokter.
4. **Base image hanya** untuk scene yang muncul di >1 clip (klinik dokter, bathroom produk). Sisanya text-to-video.
5. **Produk di frame → image-to-video** dengan attach foto produk + PRODUCT LOCK. Tanpa produk → text-to-video.
6. **Tanpa teks/caption di prompt** — caption dibuat di CapCut. Tulis "No on-screen text". Pengecualian: visual yang memang teks (bubble komentar hook, dll).
7. **Raw UGC, bukan perfect:** older iPhone, slightly soft focus, mild noise, uneven exposure, handheld micro-shake, real skin pores, no beauty filter, not cinematic, not sharp. Animasi medis 3D TIDAK pakai look raw (kontras disengaja).
8. Area intim → selalu ganti ke paha/kaki/lengan (aman review Meta).

## Alur saat dapat script baru
1. Lihat video referensi (ffmpeg tile frame tiap 5 detik) → rangkum style dalam 5–8 poin.
2. Keluarkan **teks VO** bersih: hook terpisah, body per paragraf, angka ditulis sebagai ucapan ("two hundred dollars", "thirty percent"). Tambah tips ElevenLabs singkat (voice type, pelafalan brand).
3. Minta/konfirmasi aset: character dokter, foto produk, base image.
4. Prompt per baris script saat diminta (atau sekaligus kalau Billy minta).

## Kalau Billy kirim potongan script
Potongan sering urutannya acak (copy dari CapCut). **Susun ulang sesuai script asli**, tampilkan kalimat yang benar, hitung kata (~150 wpm English, ~125 wpm Indonesia). >8 detik → pecah jadi 2 clip.

## Template

**T2V (B-roll / UGC raw):**
```
Raw amateur phone footage, vertical 9:16, [N] seconds. [scene: who, where, wardrobe, light]
0-2s ("[potongan VO]"): [aksi fisik spesifik]
2-4s (...): ...
LOOK: older iPhone, slightly soft focus, mild noise, uneven exposure, handheld micro-shake, natural skin with pores, no beauty filter, not cinematic, not sharp. No on-screen text, no music, no voice.
```

**Animasi medis 3D:**
```
3D medical animation, vertical 9:16, [N] seconds. Realistic beige-pink skin cross-section (epidermis, dermis, fat layer at the bottom), soft clinical lighting, slow steady camera, clean light-grey background. [hair/follicle setup]
0-2s ("..."): ...
No on-screen text, no labels, no music, no voice.
```

**I2V produk** (attach base + foto produk): template T2V + `Same man and same bathroom as the base image; product copied exactly from the product reference.` + PRODUCT LOCK (deskripsikan botol detail dari foto: bentuk, warna, tutup, label, ukuran; "no redesign, no new text").

**Dokter ngomong** (attach base klinik + character dokter, + produk kalau dipegang):
```
The doctor from the reference image, same clinic, same white coat, talks to the phone camera on a tripod. [gesture per ide]. He says: "[dialog exact]" Mouth clearly visible, lip-sync matches his own speech.
DOCTOR VOICE: [gender, age, accent], warm, conversational, recorded on a cheap lavalier mic in a small room — light room echo, not studio-clean, not announcer voice. Speaks only the exact dialogue, word for word. No music, no other voices.
Static framing, micro-drift only. [LOOK]
```

**Hook bubble komentar** (GPT Image → motion):
- Gambar: objek hook raw top-down + bubble putih TikTok "Reply to [username]'s comment" + teks hook bold hitam + panah putih melengkung ke objek. "Text must be spelled exactly as written."
- Motion: bubble & teks diam total (no warping), bubble pop-in 0–0.5s, panah draw-on 0.5–1s, slow push-in 5% sisanya.
- Fallback: generate tanpa bubble, bubble dibuat di CapCut.

## Selalu sertakan (1–3 baris, singkat)
- Risiko generate paling mungkin gagal (label produk drift, split-screen berantakan, teks rusak) + fallback.
- Compliance flag kalau ada klaim absolut / "doctor recommends" / before-after (FTC/Meta untuk US, BPOM/EPI untuk Indonesia). Flag saja, jangan ubah dialog.
- Label [High/Medium/Low confidence] untuk klaim yang tidak pasti.
