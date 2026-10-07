# Botane — Production Pack VSL (style "Doctor VSL" sesuai video referensi)

**Script:** Botane 55–66 (3 hook: A/B/C) · **Market:** US · **Bahasa dialog:** English (word-for-word dari PDF) · **Aksen:** General American · **Pace:** ~150 wpm
**Durasi estimasi:** body ±590 kata + hook ±20 kata ≈ **4:00–4:15 per versi** (referensi lo cuma 2:01; lihat Risiko #1).

---

## 0. Bedah style video referensi (yang kita tiru)

Gw liat videonya (121 detik). Polanya:

| Elemen | Yang terjadi di referensi | Terapan ke Botane |
|---|---|---|
| **Hook** | Close-up badan + **bubble "Reply to …'s comment"** ala TikTok + panah putih | Pisang berbulu + 2 telur di atas handuk, bubble komentar (dibikin di edit) |
| **Narator** | Dokter wanita, jas putih, ruang klinik (poster anatomi, mesin estetik di belakang), ngomong ke kamera, medium shot statis | **Grooming specialist pria** jas putih di klinik — anchor A-roll |
| **Ritme** | Cut tiap **±1,5–3 detik**. Dokter muncul cuma ±25% durasi, sisanya B-roll di atas VO | Sama: VO jalan terus, dokter diselipin tiap 3–5 kalimat |
| **"Attack" metode lain** | Footage orang kesakitan **hitam-putih**, dokter bilang "Nope" | Laser/wax/razor/trimmer/cream → B-roll **B&W** + red X |
| **Mekanisme** | **Animasi 3D medis** (lapisan kulit cross-section, lemak kuning, laser merah) | Cross-section kulit + folikel rambut, papaya dissolve, aloe coat |
| **Social proof** | Banyak cewek UGC di rumah, mirror selfie, pakai produk | Pria UGC: kamar mandi, mirror, santai di sofa |
| **Authority** | Dokter di panggung pegang box produk | Dokter pegang tube Botane |
| **Caption** | Bold putih sans, all-caps, **2–4 kata per layar**, 1 kata di-highlight kotak merah, posisi tengah-bawah | Persis sama (CapCut: "Auto caption" + style highlight merah) |
| **Audio** | VO dokter + musik tipis | VO lo + music bed low (−24 dB) |

---

## 1. Ringkasan

| Item | Jumlah |
|---|---|
| Reference sheet (GPT Image 2) | 3: Dokter, Pria UGC, Produk |
| Base image baru | 3: Klinik (anchor), Shower, Kamar mandi/mirror |
| Still (gak dianimasi) | 1: Hook pisang (bisa juga video) |
| A-roll dokter (Wan, lip-sync) | 7 clip pendek (5–15 dtk) |
| B-roll image-to-video | 12 |
| B-roll text-to-video | 14 (animasi & stock-like) |

**Versi paling hemat:** 3 ref sheet + base Klinik + 7 A-roll + B-roll T2V. Shower/mirror bisa pakai stock footage.

**Keputusan gw (bisa lo ganti):**
- Narator **pria** (topik groin pria → lebih kredibel & aman). Kalau mau 100% mirip referensi, swap ke dokter wanita 40-an — prompt tinggal ganti CHARACTER.
- Karena lo generate VO sendiri: **bikin VO full dulu**, potong per segmen, lalu pakai **audio asli segmen itu** sebagai @Audio1 untuk lip-sync dokter (bukan cuma voice ref). Ini paling aman buat sinkron.
- Visual "banana + eggs" dipakai sesuai script (Meta-safe metafora). Tidak ada nudity.

---

## 2. Voice Over (lo generate sendiri)

**Rekomendasi:** ElevenLabs, model **Eleven v3** (atau Multilingual v2 kalau mau stabil).
- **Karakter suara:** pria, 40–50 th, General American, **warm-authoritative**, tempo sedang-cepat, kayak dokter yang lagi ngejelasin ke temen — bukan iklan TV.
- Voice library yang cocok dicari: kata kunci *"middle-aged american male, narration, calm, doctor, conversational"* (contoh tipe: "Brian", "Adam", "Bill" — cek yang ada di akun lo). [Medium confidence — nama voice library suka berubah]
- **Setting v2:** Stability 40–50, Similarity 75, Style 15–25, Speaker boost ON, speed 1.05.
- **Tag v3 per bagian:** Hook `[curious]`, Attack `[dismissive]` di kata "Nope.", Mechanism `[explaining]`, CTA `[upbeat]`.
- **Tulis angka sebagai ucapan:** "two hundred to four hundred dollars", "thirty percent", "ninety days", "sixty percent", "thirty-four dollars", "botane labs dot com".
- **Pronunciation:** Botane = **"BOH-tayn"** (rhymes with "rain"). Kalau salah baca, tulis "Boh-tane" di input.
- Export per **section** (Hook A/B/C terpisah, body 1 file) → hook gampang di-swap.

---

## 3. Reference checklist & slot

| Ref | Status |
|---|---|
| DOCTOR sheet | GENERATE (1a) |
| UGC MAN sheet | GENERATE (1b) |
| PRODUCT sheet | GENERATE **dari foto tube Botane asli** (1c) — wajib, jangan biarin AI ngarang |
| VO | Lo generate |

| Slot Wan | Isi |
|---|---|
| @Image1 | Base image (scene master) |
| @Image2 | Character sheet (wajah) |
| @Image3 | Product sheet |
| @Audio1 | Potongan VO segmen itu (A-roll saja) |

---

## 4. Peta edit (timeline)

Simbol: **A** = A-roll dokter · **I2V** = image-to-video · **T2V** = text-to-video · **ED** = dibuat di editor.

| # | Section | Visual (urut, ±2 dtk tiap cut) | Asset |
|---|---|---|---|
| 1 | HOOK A/B/C | Pisang berbulu + 2 telur (still/zoom pelan) + bubble komentar + panah | STILL-1 / T2V-1, bubble ED |
| 2 | Attack laser | Mesin laser → red X; booking di HP; klinik eksterior; uang dihitung | T2V-2,3,4 + **A-1** ("Laser hair removal? Nope.") |
| 3 | Attack waxing | Strip wax ditarik; pria meringis (B&W); kalender | T2V-5, I2V-1 (B&W), T2V-6 |
| 4 | Attack razor | Animasi razor potong rambut → ujung tajam → ingrown | **A-2** ("What about just shaving? Nope.") + T2V-7 |
| 5 | Attack trimmer | Trimmer di kulit, stubble masih ada | T2V-8 |
| 6 | Attack cream | Tube cream generik → animasi patch/kemerahan | T2V-9 |
| 7 | Which explains | Pria capek, semua alat di wastafel (B&W) | I2V-2 |
| 8 | Bridge | Dokter on camera | **A-3** |
| 9 | Mechanism | Animasi 3D: papaya dissolve di akar; perbandingan surface vs root | T2V-10, T2V-11 + **A-4** |
| 10 | Skin protection | Aloe coating kulit | T2V-12 |
| 11 | Pro anchor | Laser $ merah vs Botane | T2V-2 (reuse) + I2V-3 (produk) |
| 12 | Product introduced | Dokter angkat tube; pria di shower apply; timer 5 min; wipe | **A-5** + I2V-4,5,6 |
| 13 | Objections | Pria santai di rumah, mirror check | I2V-7, I2V-8 |
| 14 | Authority | Dokter pegang tube, ngangguk | **A-6** |
| 15 | Guarantee | Pria cek kulit kaki/paha di mirror, pede | I2V-9 |
| 16 | CTA | Close-up tube; dokter tutup | I2V-10 + **A-7** |

Overlay teks (harga, "90-DAY GUARANTEE", red X, bubble) → **semua di editor**, bukan di prompt AI.

---

## BAGIAN 1 — Reference sheets (GPT Image 2)

### 1a. DOCTOR sheet
```
Multi-panel character reference sheet on a plain mid-grey studio background: front close-up, 3/4 left, 3/4 right, profile, full-body front. Same man in every panel.
Man, 45-50 years old, American, white/light-olive skin, oval face with strong jaw, short salt-and-pepper hair neatly side-parted, light stubble, warm brown eyes with fine crow's feet, straight nose, medium lips, natural brows with a few grey hairs.
Skin: visible pores, mild sun spots on cheekbones, fine forehead lines, slight under-eye texture. No smoothing, no AI sheen.
Build: fit, average height, slightly broad shoulders.
DEFAULT WARDROBE: crisp long white lab coat open at the front, light-blue button-down shirt underneath (top button open, no tie), navy chinos, silver steel watch on left wrist, no other jewellery. Small black lavalier mic clipped to the left lapel.
Neutral soft studio light, raw photo, no retouching, no text, no logos.
```

### 1b. UGC MAN sheet
```
Multi-panel character reference sheet on a plain mid-grey studio background: front close-up, 3/4 left, 3/4 right, profile, full-body front. Same man in every panel.
Man, 30-35 years old, American, medium-tan skin, short dark-brown hair with a messy textured top and faded sides, short trimmed beard, hazel eyes, slightly thick brows.
Skin: visible pores, light freckles on nose, small acne mark on left cheek. No smoothing.
Build: athletic-average, light natural chest and leg hair.
DEFAULT WARDROBE: heather-grey crew-neck t-shirt, navy athletic shorts, black rubber sports watch on left wrist. Second panel variant: white bath towel wrapped around waist, shirtless.
Neutral soft studio light, raw photo, no retouching, no text.
```

### 1c. PRODUCT sheet (lampirkan foto tube asli sebagai Image 1)
```
Image 1 = real Botane product photo. Recreate THIS exact product, do not redesign.
Product reference sheet: hero 3/4 front view, straight front, side view, and a cap close-up. Pure white seamless background, soft even studio light, sharp focus.
[ISI DARI FOTO ASLI: tube shape (squeeze tube / bottle), exact colours, cap shape & colour, matte or gloss finish, label layout — describe logo SHAPE only.]
LOCK: exact proportions, exact colours, no added text, no invented branding, no redesign.
```

---

## BAGIAN 2 — Base images & stills

### BASE-1 · CLINIC (anchor) — melayani A-1 s/d A-7
Kenapa wajib: dipakai 7 clip, harus konsisten.
```
REFERENCE IMAGES:
- Image 1 = DOCTOR character sheet: face, hair, body, wardrobe.
- Image 2 = PRODUCT sheet (only used in variant BASE-1b).

SCENE: The doctor stands facing camera, relaxed, hands loosely together at waist height, about to speak, slight friendly expression.
CHARACTER: exact man from Image 1, white lab coat open, light-blue shirt, lavalier mic on left lapel, silver watch left wrist.
LOCATION: bright modern dermatology/aesthetic clinic treatment room. Behind him on the left: a white aesthetic laser machine on a cart and a magnifier lamp on an arm. On the right wall: a framed poster of skin layers/hair follicle anatomy (illegible small text). Light-grey walls, white cabinets. Nothing else.
FRAMING: phone on tripod at chest height, 1.5 m away, medium shot from mid-thigh to above the head, subject centered, head in upper third.
LIGHTING: bright soft daylight-balanced clinic light, large soft key from front-left, gentle fill, faint natural shadow under jaw, background slightly brighter, 5200K.
CAMERA & LOOK: raw iPhone video frame, 1x lens ~26mm, no filter, mild noise, real skin texture, background slightly soft.
AVOID: cinematic grade, harsh shadows, any readable text, logos, watermarks.
FORMAT: vertical 9:16.
```
**BASE-1b** (A-5, A-6, A-7): sama persis, tapi `SCENE: he holds the product from Image 2 up at chest height in his right hand, label toward camera` + tambah `PRODUCT: exact copy of Image 2, no redesign, no added text`.

### BASE-2 · SHOWER — melayani I2V-4, I2V-5, I2V-6
```
REFERENCE IMAGES: Image 1 = UGC MAN sheet (face/body). Image 2 = PRODUCT sheet.
SCENE: The man stands in a home shower (water off), towel-free from the waist up, framed from chest up, holding the product in his right hand, cap open, squeezing a little white cream onto two fingers.
LOCATION: modern American bathroom shower, white subway tiles, matte black shower head and fixtures, clear glass door half open, small shelf with a generic shampoo bottle (no text).
FRAMING: phone held at chest height, 0.8 m away, chest-up crop. Nothing below the waist in frame.
LIGHTING: warm overhead bathroom light 3500K plus soft daylight from a frosted window on the right, slight steam haze.
PRODUCT: exact Image 2, no redesign.
CAMERA & LOOK: raw phone photo, mild noise, wet skin texture, droplets.
AVOID: nudity below waist, studio light, text, logos. FORMAT: vertical 9:16.
```

### BASE-3 · BATHROOM MIRROR — melayani I2V-7, I2V-9
```
REFERENCE IMAGES: Image 1 = UGC MAN sheet.
SCENE: The man in heather-grey t-shirt and navy athletic shorts takes a mirror selfie in his bathroom, phone in right hand, left hand resting on his upper thigh, calm confident half-smile.
LOCATION: clean home bathroom, white vanity with round sink, large mirror, plant on the counter, towel on a hook.
FRAMING: over-the-shoulder-free mirror reflection, full body from knees up, vertical.
LIGHTING: soft daylight from a window on the left, 5000K, gentle shadows.
CAMERA & LOOK: raw iPhone photo, slight grain. AVOID: text, logos, perfect studio look. FORMAT: vertical 9:16.
```

### STILL-1 · HOOK BANANA
```
Top-down close-up of one ripe yellow banana lying vertically on a light-grey cotton bath towel, with two brown eggs placed side by side at its base. The banana is covered in long dark curly hair fibers glued along its peel, a few small red bumps drawn on the peel near the base. Soft window daylight from the left, raw phone photo, shallow natural depth, real texture. No text, no logos. Vertical 9:16.
```
(Hook B/C pakai still yang sama — beda teks overlay saja.)

---

## BAGIAN 3 — Wan A-roll (dokter, lip-sync)

> Wan rule: @Audio1 = **potongan VO lo untuk segmen itu** (driving audio). Semua clip pakai blok ROLE + LOCKS di bawah, tinggal ganti bagian DIALOGUE.

### Blok standar (tempel di awal tiap A-roll)
```
Reference-based video generation, vertical 9:16, about [N] seconds, single shot.

ROLE MAPPING — DO NOT CHANGE:
@Image1 is the BASE IMAGE: scene master for location, clinic props, lighting, colour, wardrobe, framing. NOT a start or end frame.
@Image2 is the FACE REFERENCE only: facial structure, stubble, hair, skin texture, age. Ignore its grey background, studio light and clothing.
@Image3 is the PRODUCT REFERENCE (only when product is in hand): copy shape, colour, cap and label layout exactly; lit by @Image1.
@Audio1 is the exact voice-over track for this shot. Lip-sync to it precisely. ACCENT: natural General American, male, mid-40s, warm and conversational. Not British, not Australian, not advert voice.

CAMERA: phone on tripod as in @Image1, micro-drift only. No zoom, pan, dolly or cinematic moves. Raw, TikTok-native clinic video.
PERFORMANCE: talks directly to camera like explaining to a patient; one open-hand gesture per idea, then hands rest together at waist; small head nods; brief natural blinks; never theatrical.

LOCKS: clinic, lighting, white coat, blue shirt, lavalier mic, watch identical to @Image1. Face only from @Image2. No extra people. No text, captions, subtitles, logos, music. Natural skin with pores. Mouth clearly visible for lip-sync.
```

| Clip | @Image1 | Durasi | Dialogue (= isi @Audio1) | Performance |
|---|---|---|---|---|
| **A-1** | BASE-1 | ~4s | "Laser hair removal? Nope." | Sedikit angkat alis, geleng kecil saat "Nope." |
| **A-2** | BASE-1 | ~4s | "What about just shaving? Nope." | Tangan kanan terbuka ke samping, lalu "Nope" tegas |
| **A-3** | BASE-1 | ~13s | "So what actually works? There is one simple thing any man can do to get smooth down there without razor bumps, ingrown hairs, or chemical burns. It takes five minutes in the shower and the results last up to seven days." | Mulai condong sedikit ke kamera; angkat 1 jari di "one simple thing"; senyum tipis di akhir |
| **A-4** | BASE-1 | ~6s | "This is called root-dissolve grooming." | Tangan menunjuk ke poster anatomi di belakang, lalu balik ke kamera |
| **A-5** | BASE-1b + @Image3 | ~7s | "Botane is a men's hair removal cream built specifically for men's thick body hair." | Angkat tube pelan ke dada, label ke kamera |
| **A-6** | BASE-1b + @Image3 | ~7s | "That is why dermatologists recommend it for men who want smooth skin down there without the razor and chemical burn cycle." | Pegang tube, ngangguk approval |
| **A-7** | BASE-1b + @Image3 | ~5s | "Click the link below to try it completely risk free." | Senyum, tube di tangan, dagu nunjuk ke bawah sedikit |

Tambahan wajib untuk A-5/6/7: `PRODUCT LOCK: product identical to @Image3 whenever visible, no redesign, recolour, resize or added text.`

Sisa VO (yang bukan A-roll) jalan di atas B-roll.

---

## BAGIAN 4 — B-roll

### Blok standar B-roll (akhiri tiap prompt)
```
CAMERA: handheld phone micro-drift, no zoom, no cinematic moves, raw phone look.
AUDIO: no speech, no music.
LOCKS: no text, no logos, no watermarks; natural skin texture.
```

### Image-to-video (pakai ref)
| ID | Ref | Durasi | Prompt inti |
|---|---|---|---|
| I2V-1 | UGC MAN sheet | 3s | `Black-and-white. The man from @Image1 lies on a clinic waxing bed in grey t-shirt, a beautician (only hands visible) rips a wax strip from his upper thigh; he winces hard, squeezes eyes shut, grabs the bed edge. Waist-up framing, nothing explicit.` |
| I2V-2 | UGC MAN sheet | 4s | `Black-and-white. The man from @Image1 sits on the edge of a bathtub, elbows on knees, exhausted, rubbing his forehead. On the bathroom counter: a razor, an electric trimmer, a generic white cream tube, wax strips. Slow sigh.` |
| I2V-3 | PRODUCT sheet | 4s | `The product from @Image1 stands upright on a white bathroom counter next to a folded towel, soft morning window light, camera slowly drifts in 10 cm. Product identical to @Image1.` |
| I2V-4 | BASE-2 + UGC + PRODUCT | 4s | `0–2s: he squeezes white cream from the tube onto two fingers. 2–4s: he spreads it on his outer thigh (only thigh visible, shorts on). Product identical to @Image3.` |
| I2V-5 | BASE-2 | 3s | `He leans on the tile wall, checks a phone timer, relaxed, steam haze.` (Timer "5:00" ditambah di edit) |
| I2V-6 | BASE-2 | 4s | `Close-up on his forearm/thigh: he wipes cream off with a wet washcloth in one stroke, revealing smooth clean hairless skin underneath, no redness.` |
| I2V-7 | BASE-3 | 3s | `He takes a mirror selfie, turns slightly, half smile, relaxed.` |
| I2V-8 | UGC MAN sheet | 4s | `SCENE: cozy living room, grey sofa, afternoon window light. He lounges on the sofa in t-shirt and shorts, scrolling his phone, calm, legs stretched out smooth.` |
| I2V-9 | BASE-3 | 4s | `He runs his palm along his smooth lower leg/thigh while looking in the mirror, satisfied nod.` |
| I2V-10 | PRODUCT sheet | 4s | `Hero close-up: the product rotates slowly 30 degrees on a wet white tile surface with water droplets, soft daylight. Identical to @Image1.` |

### Text-to-video (tanpa ref — gampang)
| ID | Durasi | Prompt |
|---|---|---|
| T2V-1 | 3s | (opsional ganti STILL-1) `Slow push-in top-down on a hairy banana with two brown eggs on a grey towel, soft daylight, raw phone look.` |
| T2V-2 | 3s | `A professional laser hair removal machine with a handpiece in a dim clinic room, red indicator lights, slow dolly-free handheld shot. No text.` |
| T2V-3 | 2s | `Close-up of a thumb tapping "book appointment" style button on a phone calendar app, screen blurred, no readable text.` |
| T2V-4 | 2s | `Hands counting several 100-dollar bills onto a table, close-up, warm light.` |
| T2V-5 | 2s | `Black-and-white close-up of a hand pressing a wax strip onto a hairy male calf and ripping it off quickly.` |
| T2V-6 | 2s | `Paper wall calendar, a red marker circles dates every three weeks, close-up.` |
| T2V-7 | 6s | `3D medical animation, cross-section of human skin layers with a single dark hair shaft. 0–2s: a razor blade slices the hair at the surface leaving a sharp angled tip. 2–4s: the sharp tip grows back above the skin, prickly. 4–6s: the tip curls back and pierces into the skin, red inflamed bump forms. Clean realistic medical render, beige skin tones, soft lighting, no text.` |
| T2V-8 | 3s | `Macro close-up of an electric trimmer gliding over a male forearm, leaving visible dark stubble behind, not smooth.` |
| T2V-9 | 4s | `3D medical animation, cross-section of skin with thick dark hairs; white depilatory cream sits on top, only thin hairs dissolve leaving thick hairs patchy, then the skin surface turns red and irritated. No text.` |
| T2V-10 | 6s | `3D medical animation, cross-section of skin with a hair follicle. A soft orange papaya-colored gel seeps down along the hair shaft to the root; the hair dissolves from the root upward and fades away; the follicle opening remains smooth and flat, no sharp tip. Clean realistic medical render, warm tones, no text.` |
| T2V-11 | 5s | `Split-screen 3D medical animation of skin cross-sections. Left: hair cut at the surface by a blade, sharp tip remaining. Right: hair dissolved at the root, smooth surface. Same style, no text.` |
| T2V-12 | 5s | `3D medical animation, translucent green aloe vera gel layer spreads over skin surface like a protective film, calm cooling glow, skin stays even-toned, no redness. No text.` |
| T2V-13 | 2s | `Slices of fresh papaya and an aloe vera leaf cut open on a white marble surface, droplets, macro, soft light.` (insert di mechanism/aloe) |
| T2V-14 | 3s | `Exterior of a modern aesthetic clinic storefront at daytime, glass doors, people walking past, handheld phone shot. No readable signage.` |

---

## BAGIAN 5 — Edit (CapCut / Premiere) — kunci biar mirip referensi
1. VO full di track bawah → susun visual sesuai Peta edit, **cut tiap 1,5–3 dtk**, jangan ada shot >4 dtk kecuali A-3.
2. **Caption:** font Montserrat ExtraBold / "The Bold Font", putih, all-caps, outline/shadow tipis, 2–4 kata per layar, kata kunci diberi **kotak merah #E0201B**, posisi 60% tinggi layar.
3. Hook: bubble putih "Reply to [username]'s comment" + panah putih melengkung.
4. Section attack: footage B&W, **red X** besar (pop-in 0.15s) + SFX "whoosh/buzz" pelan.
5. Angka harga: teks merah raksasa "$200–$400 PER SESSION".
6. Music bed: lo-fi/corporate tipis, −24 dB, mati di 2 dtk terakhir CTA.
7. End card: tube + "UP TO 60% OFF · $34 FREE GIFTS · 90-DAY GUARANTEE · botanelabs.com".

---

## Risiko & urutan test
1. **Durasi 4+ menit vs referensi 2 menit.** Script ini panjang; retensi cold traffic biasanya drop. Saran: siapin juga cut 90–120 dtk (hook → razor attack → bridge → mechanism → product → CTA). [Medium confidence — berdasarkan pola umum VSL paid social, bukan data akun lo]
2. **Lip-sync A-3 (13 dtk)** paling rawan drift → test duluan. Kalau jelek, pecah jadi 2 shot (cut di "...chemical burns.").
3. **Product drift** di I2V-4/A-5: tanpa foto asli, label pasti ngaco. Jangan skip 1c.
4. **Animasi medis T2V** kadang anatomi salah; generate 2–3 variasi, pilih yang paling bersih.

**Urutan test:** VO full → BASE-1 → A-3 → A-5 → T2V-7 → sisanya.

## Compliance flags (FTC/FDA/Meta) — buat client, dialog TIDAK gw ubah
- **"Dermatologists recommend it"** + aktor berjas dokter: FTC butuh substansiasi nyata; aktor AI sebagai dokter tanpa disclaimer = endorsement menyesatkan. Minimal tambah "Actor portrayal" di layar. **Risiko tertinggi.** [High confidence — FTC Endorsement Guides]
- **Depilatory di area genital:** banyak label depilatory (termasuk Nair) memperingatkan tidak dipakai di genital; klaim "no chemical burns" absolut berisiko. Pastikan label Botane memang mengizinkan & ada data uji.
- "Same smooth result as laser", "no ingrown hair can form", "up to 7 days" → butuh bukti.
- Meta: konten "banana + eggs" + groin bisa kena review *sexual/adult*. Siapin hook alternatif yang lebih aman.
- Diskon "up to 60% off" & "$34 free gifts" harus nyata di halaman checkout.
