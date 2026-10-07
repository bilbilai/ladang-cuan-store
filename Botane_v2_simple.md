# Botane VSL — Pack v2 (versi simpel)

## Cara kerja
1. VO full dari ElevenLabs langsung lo taruh di CapCut sebagai track utama.
2. Semua video di-generate **tanpa suara** dan ditaruh di atas VO.
3. **Pengecualian:** clip dokter yang ditandai **LIP-SYNC**. Untuk clip ini, potong **cuma kalimat itu** dari VO lo, lalu attach sebagai @Audio1. Jangan attach VO full.
4. Base image cuma 2:
   - **Klinik dokter**: udah lo punya.
   - **Bathroom**: prompt-nya ada di bawah.
   Sisanya text-to-video, kecuali shot yang ada produknya. Shot produk wajib attach foto produk biar label & botolnya konsisten.

**Ref yang dipakai:**
- `DOC` = character sheet dokter
- `CLINIC` = base image klinik
- `BATH` = base image bathroom
- `PROD` = foto produk lo (3 panel itu)
- `MAN` = character sheet cowok UGC (kalau belum ada, cukup pakai `BATH`)

**Kunci produk (tempel di setiap prompt yang ada produknya):**
```
PRODUCT LOCK: sage-green matte cylindrical pump bottle, white collar ring, silver-grey pump head under a clear dome cap, white label print "BOTANE MAN+" with a line-drawn aloe plant, 80 ml. Copy exactly from the product reference. No redesign, no new text, no colour change.
```

**Kunci gaya raw (tempel di akhir semua prompt):**
```
LOOK: raw amateur phone footage, shot on an older iPhone, slightly soft focus, mild compression and noise, imperfect auto-exposure, handheld micro-shake, natural skin with pores and blemishes, no beauty filter, not cinematic, not sharp, not polished. No text, no captions, no logos besides the product label.
```

---

## Base image BATH (GPT Image 2)
Attach: `PROD` + `MAN` (kalau ada)
```
Raw phone photo, vertical 9:16. A regular American guy, early 30s, short messy brown hair, short beard, average build with some chest hair, white bath towel around his waist, stands in front of his bathroom sink after a shower. He holds the product from the reference in his right hand at chest height, label facing camera, and has a small blob of white cream on two fingers of his left hand.
Bathroom: ordinary rental bathroom, white subway tile with slightly grey grout, a fogged mirror with water streaks, cheap white vanity, toothbrush cup, half-used shampoo bottle without readable text, damp towel on a hook, shower curtain half open in the background.
Light: one warm overhead bathroom bulb (3200K) plus dull daylight from a small frosted window on the left; slight steam haze; uneven exposure with the window side a bit blown.
Framing: phone propped on the counter, chest-up, slightly low angle, a bit off-centre.
PRODUCT LOCK: sage-green matte cylindrical pump bottle, white collar ring, silver-grey pump head under a clear dome cap, white label "BOTANE MAN+" with line-drawn aloe, 80 ml — exact copy of the reference.
Look: older iPhone, soft focus, grain, wet skin, water droplets, not retouched, not sharp, no text.
```
Base ini dipakai di clip: B12, B18, B19, B20, B22.

---

## Shot list (urut sesuai VO)

### HOOK (A/B/C, visual sama)
**H1 · T2V · 3s**
```
Top-down handheld phone shot of a ripe banana covered in glued-on dark curly hairs with a few tiny red bumps near its base, two brown eggs beside it, lying on a wrinkled grey bath towel on a bathroom floor. Slow slight push-in. [LOOK]
```
Bubble komentar dan panah dibikin di CapCut.

### Attack laser
**A1 · LIP-SYNC dokter** · attach `CLINIC` + `DOC` + @Audio1 = *"Laser hair removal? Nope."*
```
The doctor from the reference image, same clinic, same white coat, speaks the attached line to the phone camera on a tripod. Slight eyebrow raise on the question, small head shake and a short dismissive hand wave on "Nope." Lip-sync to the audio exactly. Static framing, micro-drift only. [LOOK]
```
**B1 · T2V · 2s** — "It costs two hundred to four hundred dollars per session"
```
A laser hair removal machine with a handpiece cable in a dim clinic room, red and blue standby lights, handheld phone shot walking slowly past it. [LOOK]
```
**B2 · T2V · 2s** — "takes months of treatments"
```
Black-and-white. A bored man in a hoodie sits in a clinic waiting room chair, checks his phone, sighs, leans his head back against the wall. [LOOK]
```
**B3 · T2V · 2s** — "pay for appointments"
```
Close-up of a man's hand tapping a credit card on a card reader at a clinic front desk, receipt printing. [LOOK]
```

### Attack waxing
**B4 · T2V · 2s** — "It is painful"
```
Black-and-white. A man lies on a treatment bed in a t-shirt, a woman's hands rip a wax strip off his hairy calf, he winces hard and grabs the bed edge. Waist-up and calf only. [LOOK]
```
**B5 · T2V · 2s** — "appointments every three weeks"
```
A paper wall calendar on a fridge, a man's hand circles a date with a red marker; several dates already circled three weeks apart. [LOOK]
```
**B6 · T2V · 2s** — "the whole thing resets"
```
Close-up of a man's hairy forearm with patchy regrown stubble, he scratches it, slight red irritation. [LOOK]
```

### Attack razor
**A2 · LIP-SYNC dokter** · `CLINIC` + `DOC` + @Audio1 = *"What about just shaving? Nope."*
```
Same doctor, same clinic. He tilts his head slightly on the question, then "Nope." with a firm small shake and open palm. Lip-sync exactly to the audio. Static, micro-drift. [LOOK]
```
**B7 · T2V · 6s** — "...sharp angled tip ... becomes the ingrown hair"
```
3D medical animation, cross-section of human skin with a single dark hair. 0-2s: a razor blade slices the hair flush at the skin surface, leaving a sharp angled tip. 2-4s: the sharp tip grows back above the surface, stiff and prickly. 4-6s: the tip curls back and pierces into the skin, a red inflamed bump swells. Realistic beige skin layers, soft lighting, no text.
```
(Animasi gak pakai LOOK raw. Biar kontras sama footage UGC, kayak di video referensi.)

**B8 · T2V · 2s** — "It is creating it."
```
Black-and-white close-up of a man's neck/jawline after shaving: red razor bumps, a small nick, he touches it and flinches. [LOOK]
```

### Attack trimmer
**B9 · T2V · 3s**
```
Close-up of a cheap black electric trimmer running along a man's hairy lower leg, leaving short dark stubble behind, not smooth; his hand rubs the stubble afterward. [LOOK]
```

### Attack cream
**B10 · T2V · 3s** — "drugstore creams"
```
A generic pink depilatory cream tube with no readable text on a bathroom counter, a man's hand picks it up, squeezes it, frowns. [LOOK]
```
**B11 · T2V · 4s** — "leaves patches ... burns skin"
```
3D medical animation, cross-section of skin with thick dark hairs and a pink cream layer on top: thin hairs dissolve, thick hairs stay leaving patches, then the skin surface turns red and inflamed. No text.
```

### Which explains why
**B12 · I2V** · attach `BATH` · 4s
```
Black-and-white. Same man and bathroom as the reference, but the product is NOT in frame. He sits on the closed toilet lid with a towel around his waist, elbows on knees, rubbing his face, frustrated; on the counter behind him a razor, a trimmer and wax strips. [LOOK]
```

### Bridge
**A3 · LIP-SYNC dokter** · `CLINIC` + `DOC` + @Audio1 = *"So what actually works? There is one simple thing any man can do to get smooth down there without razor bumps, ingrown hairs, or chemical burns."*
```
Same doctor, same clinic. He leans in slightly, raises one finger on "one simple thing", then rests his hands together. Calm, friendly, like explaining to a patient. Lip-sync exactly to the audio. [LOOK]
```
Sisa kalimat ("It takes five minutes in the shower...") di-cover pakai B14.

### Mechanism
**A4 · LIP-SYNC dokter** · `CLINIC` + `DOC` + @Audio1 = *"This is called root-dissolve grooming."*
```
Same doctor, same clinic. He half-turns and points at the skin anatomy poster behind him, then back to camera. Lip-sync exactly. [LOOK]
```
**B13 · T2V · 6s** — "Botane uses papaya extract to dissolve the hair at the root"
```
3D medical animation, cross-section of skin with a hair follicle. A soft orange papaya-coloured gel seeps down along the hair shaft to the root; the hair dissolves from the root upward and fades; the skin surface stays flat and smooth with no sharp tip. Warm tones, no text.
```
**B14 · T2V · 5s** — "They all start at the surface. Botane starts at the root."
```
Split-screen 3D medical animation of two skin cross-sections. Left: hair cut flush by a blade, sharp tip left behind. Right: hair dissolved at the root, smooth follicle. Same render style, no text.
```

### Skin protection
**B15 · T2V · 5s** — "thirty percent aloe vera base"
```
3D medical animation: a translucent green aloe gel layer spreads over the skin surface like a protective film, cool soft glow, skin stays calm and even-toned, no redness. No text.
```

### Professional anchor
**B16 · T2V · 2s** — reuse B1 dengan overlay harga merah di CapCut.
**B17 · I2V** · attach `PROD` · 3s — "at home for a fraction of that cost"
```
The product from the reference stands on a white bathroom counter next to a toothbrush cup, morning window light, a man's hand reaches in and picks it up. [PRODUCT LOCK] [LOOK]
```

### Product introduced
**A5 · LIP-SYNC dokter** · `CLINIC` + `DOC` + `PROD` + @Audio1 = *"Botane is a men's hair removal cream built specifically for men's thick body hair."*
```
Same doctor, same clinic. He lifts the product from the product reference to chest height in his right hand, label toward camera, and keeps it there while speaking. Lip-sync exactly. [PRODUCT LOCK] [LOOK]
```
**B18 · I2V** · `BATH` + `PROD` · 4s — "Apply it in the shower."
```
Same man and bathroom as the base image. He presses the silver pump twice into his left fingers, then spreads the white cream evenly on his outer thigh just below the towel edge. Phone propped on the counter. [PRODUCT LOCK] [LOOK]
```
**B19 · I2V** · `BATH` · 3s — "Wait five minutes."
```
Same man, same bathroom, cream visible on his thigh. He leans against the sink, scrolls his phone casually, glances at it like checking a timer. [LOOK]
```
Timer "5:00" ditambah di CapCut.

**B20 · I2V** · `BATH` · 4s — "Wipe it off. Smooth for up to seven days."
```
Same man, same bathroom. Close-up of his thigh: he wipes the cream off in one stroke with a damp washcloth, revealing smooth hairless skin underneath, no redness; he runs his palm over it. [LOOK]
```

### Objections
**B21 · T2V · 4s** — "No appointment needed. No pain. No leaving the house."
```
A guy in his early 30s, grey t-shirt and shorts, lounges on a worn grey couch at home on a Sunday afternoon, feet up, scrolling his phone, relaxed. Messy living room, dull window light. [LOOK]
```
**B22 · I2V** · `BATH` · 3s — "faster than shaving"
```
Same man, same bathroom, now in a grey t-shirt. He glances at his reflection, half smile, rubs his smooth forearm, nods. [LOOK]
```

### Authority
**A6 · LIP-SYNC dokter** · `CLINIC` + `DOC` + `PROD` + @Audio1 = *"That is why dermatologists recommend it for men who want smooth skin down there without the razor and chemical burn cycle."*
```
Same doctor, same clinic, holding the product at chest height. Slow approving nods while speaking, calm confident expression. Lip-sync exactly. [PRODUCT LOCK] [LOOK]
```

### Guarantee
**B23 · T2V · 4s** — "Try Botane for ninety days..."
```
A man in a grey t-shirt and shorts takes a mirror selfie in a small home bathroom, turns slightly, checks his smooth legs, confident relaxed smile. [LOOK]
```

### CTA
**B24 · I2V** · `PROD` · 3s — "Up to sixty percent off right now..."
```
The product from the reference on a wet white tile ledge with water droplets, handheld phone slowly circling 20 degrees, soft daylight. [PRODUCT LOCK] [LOOK]
```
**A7 · LIP-SYNC dokter** · `CLINIC` + `DOC` + `PROD` + @Audio1 = *"Click the link below to try it completely risk free."*
```
Same doctor, same clinic, product in hand. Warm smile, small nod downward on "link below". Lip-sync exactly. [PRODUCT LOCK] [LOOK]
```

---

## Ringkasan
| Tipe | Jumlah | Attach |
|---|---|---|
| Lip-sync dokter | 7 (A1–A7) | CLINIC + DOC (+PROD di A5–A7) + potongan VO |
| I2V produk/bathroom | 7 | BATH dan/atau PROD |
| T2V | 18 | tanpa ref |

**Urutan test:** A3 (lip-sync paling panjang) → B18 (produk di tangan) → sisanya.

**Catatan jujur:**
- Label "BOTANE MAN+" kemungkinan tetap sedikit berubah di video AI. Kalau rusak, tempel ulang PNG label/produk asli di CapCut buat shot close-up.
- Klaim "Safe for intimate areas" & "dermatologists recommend" tetap jadi risiko compliance seperti di pack v1.
