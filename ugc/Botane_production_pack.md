# Botane MAN+ — AI UGC Production Pack (Wan 3.0)

Script: Botane 55–66 (Girlfriend / "boyfriend stole my cream").
**Market profile:** US · English (dialog word-for-word dari script) · General American accent · ~150 wpm (~2,5 kata/detik).

**Keputusan & asumsi:**
- Market US: script pakai "dollars", "Nair", "botanelabs.com" → casting & rumah Amerika, compliance FTC.
- Script nyebut "Botane **tube**", tapi produk asli (gambar 1) itu **botol pump 80 ml sage green**. Semua prompt pakai botol pump. Kalau ada versi tube, kasih tau gw.
- Hook A/B/C dibikin **clip terpisah ~10 detik** biar bisa A/B test tanpa generate ulang body.
- Workflow simpel: **Maya (pacar) = semua A-roll ngomong.** Jake (cowok) cuma B-roll tanpa dialog. Semua animasi = text-to-video, ditimpa di edit di atas suara A-roll.
- Semua TEXT OVERLAY dari script masuk di **edit (CapCut)**, BUKAN di prompt (teks AI pasti rusak).

## Ringkasan

| Item | Jumlah |
|---|---|
| Character sheet | 2 (Maya, Jake) |
| Product sheet | 1 |
| Base image | 2 (BASE-1 kamar Maya, BASE-2 kamar mandi berdua) |
| A-roll Wan | 3 hook + 6 body = 9 clip |
| B-roll Wan | 4 (BR-1 & BR-4 opsional) |
| Animasi (text-to-video) | 5 |

**Versi paling hemat:** Maya sheet + product sheet + BASE-1 → semua A-roll (1 hook + clip 2–7) + ANIM-2, ANIM-4, ANIM-5. Jake sheet + BASE-2 cuma perlu buat BR-2/BR-3.

## Workflow (urut)
1. Generate **product sheet** (upload gambar 1 sebagai referensi) → GPT Image 2.
2. Generate **Maya sheet** & **Jake sheet** → GPT Image 2.
3. Generate **BASE-1** (Maya sheet + product sheet) dan **BASE-2** (Maya + Jake + product).
4. Siapin **@Audio1**: rekaman/TTS suara cewek US 20-an, 10–20 detik, nada santai (cuma buat timbre, isi kalimatnya bebas).
5. Wan 3.0: A-roll clip per clip → B-roll → animasi.
6. Edit: susun Hook → Clip 2–7, timpa animasi/B-roll, tambahin text overlay + subtitle.

## Slot Wan

| Slot | Isi |
|---|---|
| @Image1 | Base image clip itu (scene master) |
| @Image2 | Character sheet (wajah aja) |
| @Image3 | Product sheet — wajib tiap produk keliatan |
| @Image4 | Jake sheet (cuma BR-3) |
| @Audio1 | Voice reference |

## Peta clip

| Clip | Section | @Image1 | Durasi | Produk | Timpa di edit (B-roll / text) |
|---|---|---|---|---|---|
| 1A/1B/1C | Hook A/B/C | BASE-1 | ~10 s | 1A ya | Text hook sesuai script |
| 2 | Story opens | BASE-1 | ~20 s | – (tube pink polos) | — |
| 3 | What she noticed 1 | BASE-1 | ~19 s | – | ANIM-1, ANIM-2 · text "MADE FOR WOMEN'S FINE LEG HAIR…" |
| 4 | What she noticed 2 + Big reaction | BASE-1 | ~22 s | ya | ANIM-2/ANIM-3, (BR-1) · text "EITHER LEAVES PATCHES OR BURNS" & "I FOUND A CREAM…" |
| 5 | She asks him | BASE-1 | ~20 s | ya | ANIM-4 · text "STRONG ENOUGH…" |
| 6 | What it is + Wrongly accused | BASE-1 | ~22 s | ya | ANIM-5, BR-2 · text "30% ALOE VERA BASE…" & "NO BURNS…" |
| 7 | Mechanism + Close | BASE-1 | ~18 s | ya | BR-3 · text "HE HAS HIS OWN BOTANE…" & offer + botanelabs.com |

Total body ±2 menit + hook 10 s. Durasi dari hitung kata @150 wpm [Medium confidence — kecepatan asli Wan bisa beda, cek di test clip pertama].

---

## Bagian 1 — Reference sheets (GPT Image 2)

### REF-P — Product sheet (GENERATE, upload gambar 1)
```
Reference image 1 = real product photo. Recreate THIS exact product as a clean product reference sheet. No redesign.
PRODUCT: slim cylindrical bottle, about 15 cm tall, matte muted sage-green body (soft-touch finish); white collar ring at the neck; silver-grey airless pump head with a short side-facing nozzle; clear transparent dome over-cap covering the pump; front label printed in off-white: serif wordmark at the top, a thin line-drawing of an aloe vera plant in the middle, small text lines and three check-mark lines below, small volume text at the bottom. Label wording reads "BOTANE MAN+" (wordmark) and "Hair Removal Cream" — keep the label layout exactly like the reference photo; if text cannot be reproduced perfectly, keep it minimal and faithful rather than inventing new words.
LAYOUT: three views on one sheet — hero 3/4 front view (centre, large), straight side view (left), back/top detail of the pump and clear dome cap (right). Plus one small view with the cap removed showing the silver pump nozzle.
BACKGROUND: pure white seamless, soft even studio light, sharp focus, true colours (muted sage green, not mint, not olive).
LOCK: exact proportions (tall slim cylinder, about 3.5:1 height to width), no added text, no extra branding, no props, no hands.
```

### REF-M — Maya character sheet (GENERATE)
```
Ultra-realistic raw character reference sheet, multi-panel on a plain mid-grey studio background: front close-up, 3/4 left, 3/4 right, profile, full-body front. Same person in every panel.
PERSON: Maya, American woman 26-29, light-medium warm skin with visible pores, a few faint freckles across the nose, slight under-eye shadows, natural brows; shoulder-length dark-brown wavy hair, a bit messy, tucked behind one ear; slim-average build. Hazel-brown eyes with slightly hooded lids, faint smile lines, straight medium nose, natural medium lips, soft jaw, natural uneven brows.
SKIN: visible pores, faint freckles, slight redness around the nose, small healed acne mark on the left cheek, uneven natural tone. No smoothing, no AI sheen.
WARDROBE (lock for all scenes): oversized faded sage-grey crewneck sweatshirt (slightly pilled cotton), small thin gold hoop earrings in both ears, thin black hair tie on the left wrist, no other jewellery, no makeup except a little lip balm, light-wash straight jeans in the full-body panel, barefoot.
Neutral soft studio light, raw photo, no retouching, no text.
```

### REF-J — Jake character sheet (GENERATE)
```
Ultra-realistic raw character reference sheet, multi-panel on a plain mid-grey studio background: front close-up, 3/4 left, 3/4 right, profile, full-body front. Same person in every panel.
PERSON: Jake, American man 28-31, fair-medium skin with visible pores, light stubble, short messy light-brown hair, average-athletic build, a little body hair on forearms. Blue-grey eyes, slight crow's feet, strong straight nose, medium lips, defined jaw with uneven stubble, thick slightly unruly brows.
SKIN: visible pores, slight razor-bump redness on the neck, uneven tone. No smoothing, no AI sheen.
WARDROBE (lock): plain heather-grey cotton t-shirt, dark navy drawstring sweatpants, no jewellery except a black silicone watch on the left wrist, barefoot.
Neutral soft studio light, raw photo, no retouching, no text.
```

---

## Bagian 2 — Base images (GPT Image 2)

### BASE-1 — Maya di kasur, kamar apartemen (dipakai: SEMUA A-roll + BR-1, BR-4)
Kenapa perlu: ini anchor semua A-roll. Belum ada.
```
REFERENCE IMAGES:
- Image 1 = Maya character sheet: face, hair, body, wardrobe.
- Image 2 = Botane product sheet: copy the bottle design exactly.

SCENE: a casual selfie-style video frame. Maya sits cross-legged on her unmade bed, leaning slightly toward the phone, mid-thought, relaxed half-smile, mouth closed. Hands resting loosely on her knees. The Botane bottle lies casually on the duvet next to her right hip, partly visible. A plain soft-pink squeeze tube (no text, no logo) lies near her left knee.
CHARACTER: Maya, American woman 26-29, light-medium warm skin with visible pores, a few faint freckles across the nose, slight under-eye shadows, natural brows; shoulder-length dark-brown wavy hair, a bit messy, tucked behind one ear; slim-average build; wearing oversized faded sage-grey crewneck sweatshirt (slightly pilled cotton), small thin gold hoop earrings in both ears, thin black hair tie on the left wrist, no other jewellery, no makeup except a little lip balm, light-wash jeans.
PRODUCT: Botane MAN+ bottle, exact copy of image 2, lying on its side on the duvet, label partly visible.
LOCATION: small American apartment bedroom. Rumpled off-white waffle duvet, two slept-on pillows, a mustard throw blanket bunched at the corner; behind her a light wood headboard and a white wall with a slightly crooked framed print; a cheap wooden nightstand with a phone charger cable, a half-drunk iced coffee in a plastic cup, a hair clip. Lived-in, a bit messy, NOT styled. No plants overload, no fairy lights.
FRAMING: phone propped on the bed facing her at chest height, about 1 m away, slightly below eye level; she is centred, head to waist, headroom small, a bit off-centre like a real self-recording.
LIGHTING (most important): late-afternoon daylight from a window to camera-left, soft and warm-neutral (~4800K), falling off into soft shadow on the right side of her face; room slightly underexposed; no ring light, no fill light, no rim light.
CAMERA & LOOK: raw unedited iPhone front-camera frame, 26 mm equivalent, no filter, no HDR, slight noise in shadows, slightly soft focus, real skin texture.
AVOID: studio light, even lighting, CGI look, influencer aesthetic, over-sharpening, any text, captions, watermarks or invented logos.
FORMAT: vertical 9:16.
```

### BASE-2 — Kamar mandi, Jake + Maya (dipakai: BR-2, BR-3)
Kenapa perlu: karakter kedua yang muncul >1 kali; harus konsisten antar shot.
```
REFERENCE IMAGES:
- Image 1 = Jake character sheet (face, hair, body, wardrobe).
- Image 2 = Maya character sheet (face, hair, body, wardrobe).
- Image 3 = Botane product sheet: copy the bottle design exactly.

SCENE: Jake stands at the bathroom sink holding his Botane bottle in his right hand at waist height, looking at it with a pleased half-smile. Maya leans against the open door frame on the right side of the frame, arms crossed, eyeing the bottle with a playful suspicious smirk.
CHARACTERS: Jake = Jake, American man 28-31, fair-medium skin with visible pores, light stubble, short messy light-brown hair, average-athletic build, a little body hair on forearms, wearing plain heather-grey cotton t-shirt, dark navy drawstring sweatpants, no jewellery except a black silicone watch on the left wrist. Maya = Maya, American woman 26-29, light-medium warm skin with visible pores, a few faint freckles across the nose, slight under-eye shadows, natural brows; shoulder-length dark-brown wavy hair, a bit messy, tucked behind one ear; slim-average build, wearing oversized faded sage-grey crewneck sweatshirt (slightly pilled cotton), small thin gold hoop earrings in both ears, thin black hair tie on the left wrist, no other jewellery, no makeup except a little lip balm, light-wash jeans.
PRODUCT: one Botane bottle, exact copy of image 3, in Jake's hand, label facing camera.
LOCATION: small ordinary American apartment bathroom: white subway tile, a slightly water-spotted mirror, white sink with a cluttered counter (toothbrush cup, electric razor, deodorant, hand soap pump), a grey hand towel hanging crooked. Not luxurious.
FRAMING: phone propped on a shelf across from the sink, waist-up of both people, Jake left-centre, Maya right in the doorway.
LIGHTING: warm overhead vanity bulb (~3200K) plus a little cooler daylight spill from the hallway behind Maya; slightly harsh, real bathroom light; mild shadows under eyes.
CAMERA & LOOK: raw unedited iPhone frame, 26 mm, no filter, no HDR, mild noise, real skin texture.
AVOID: studio light, spa/hotel bathroom, CGI look, any text, captions, watermarks.
FORMAT: vertical 9:16.
```

---

## Bagian 3 — Wan A-roll

### CLIP 1A — HOOK A (~10 s)
**Slot:** @Image1 = BASE-1 · @Image2 = Maya sheet · @Image3 = product sheet · @Audio1 = voice

```
Reference-based video generation, vertical 9:16, about 10 seconds (hard maximum 30 seconds), 2 shots with hard cuts.

ROLE MAPPING — DO NOT CHANGE:
@Image1 is the BASE IMAGE — the scene master for every shot. NOT a start frame, NOT an end frame. It defines location, layout, props, lighting, colour grade, shadows, wardrobe, jewellery, hair and body. A shot may change framing only where it says so; room, light and wardrobe never change.
@Image2 is the FACE REFERENCE only (Maya): facial structure, eyes, nose, lips, jaw, freckles, skin texture, age. Do not copy its grey studio background, studio lighting or clothing.
@Image3 is the PRODUCT REFERENCE (Botane MAN+ bottle): slim cylindrical bottle, about 15 cm tall, matte muted sage-green body (soft-touch finish); white collar ring at the neck; silver-grey airless pump head with a short side-facing nozzle; clear transparent dome over-cap covering the pump; front label printed in off-white: serif wordmark at the top, a thin line-drawing of an aloe vera plant in the middle, small text lines and three check-mark lines below, small volume text at the bottom. Copy exactly whenever the product appears. Ignore its white background and studio light; the product is lit by @Image1.
@Audio1 is the VOICE REFERENCE: timbre, pitch and energy only. ACCENT OVERRIDE — THIS TAKES PRIORITY OVER @Audio1: natural General American accent, woman in her late twenties, casual conversational register like talking to a friend on FaceTime. Not British, not Australian, not Indonesian-accented, not an advert/announcer voice. Speaks the exact DIALOGUE in English word for word. In INSERT shots the voice continues off-screen: same voice, same accent, same close-mic sound.

CAMERA: vertical 9:16, phone look. ON CAMERA = phone propped on the bed facing her at chest height as framed in @Image1, unless the shot says closer; micro-drift only. INSERT = handheld close-up in the same room. No zoom, pan, tilt, dolly or cinematic moves. Raw, amateur, slightly underexposed, TikTok-native.

AUDIO SETUP: close-mic phone UGC voice, natural breaths, crisp consonants, about 150 words per minute, never rushed. Quiet room tone. No reverb, no music, no SFX.

PERFORMANCE RULES: relaxed start pose; one gesture per idea, then rest; never mirror gestures to words or repeat a gesture; direct eye contact with brief glances away when remembering; one speaker only; ON CAMERA mouth clearly visible for lip-sync; INSERT mouth not in frame.

STYLE & EMOTION: Maya, 27, telling a friend something wild that happened at home. Energy arc: breathless → decisive.

PRE-SPEAKING ACTION: short inhale, tucks hair behind her ear

DIALOGUE & PERFORMANCE:
SHOT 1 — 0:00-0:06 · ON CAMERA (lip-sync)
Framing: closer, head to chest, same angle and light as @Image1
Mood: slightly breathless, she just has to tell someone
Expression: eyebrows up, half-laugh disbelief
Voice: quick, a little breathless, words tumbling but clear
Body: leans in toward the phone on the first word, then settles
Dialogue: "My boyfriend kept stealing my hair removal cream and getting chemical burns every time he used it."

SHOT 2 — 0:06-0:10 · ON CAMERA (lip-sync)
Framing: medium shot, head to waist, as in @Image1
Mood: decisive, a bit proud
Expression: small knowing smile
Voice: slower, landing the line
Body: lifts the Botane bottle from her lap into frame at chest height, label facing camera, holds still
Dialogue: "So I got him this instead."
Hard cut between each shot.

PRONUNCIATION: Botane = BOH-tahn (two syllables, stress on first).

LOCKS:
- @Image1 is the base for the whole clip. Face from @Image2 only. Product from @Image3 only.
- Room, window light, bedding, wardrobe (sage-grey sweatshirt, small gold hoops, black hair tie left wrist), hair identical to @Image1.
- PRODUCT LOCK: identical to @Image3 whenever visible — sage-green matte bottle, white collar, silver pump, clear dome cap, same proportions. No redesign, recolour, resize, no new text or logo, never turned into a tube.
- No extra people. No on-screen text, captions, subtitles or music. No objects beyond @Image1 and those named in the shots.
- Natural skin: pores, freckles, fine lines. No smoothing, no AI sheen, no beauty filter.
- Lip-sync matches the exact English dialogue, General American accent, @Audio1 voice identity.
```

### CLIP 1B — HOOK B (~10 s)
**Slot:** @Image1 = BASE-1 · @Image2 = Maya sheet · @Audio1 = voice

```
Reference-based video generation, vertical 9:16, about 10 seconds (hard maximum 30 seconds), 2 shots with hard cuts.

ROLE MAPPING — DO NOT CHANGE:
@Image1 is the BASE IMAGE — the scene master for every shot. NOT a start frame, NOT an end frame. It defines location, layout, props, lighting, colour grade, shadows, wardrobe, jewellery, hair and body. A shot may change framing only where it says so; room, light and wardrobe never change.
@Image2 is the FACE REFERENCE only (Maya): facial structure, eyes, nose, lips, jaw, freckles, skin texture, age. Do not copy its grey studio background, studio lighting or clothing.
@Audio1 is the VOICE REFERENCE: timbre, pitch and energy only. ACCENT OVERRIDE — THIS TAKES PRIORITY OVER @Audio1: natural General American accent, woman in her late twenties, casual conversational register like talking to a friend on FaceTime. Not British, not Australian, not Indonesian-accented, not an advert/announcer voice. Speaks the exact DIALOGUE in English word for word. In INSERT shots the voice continues off-screen: same voice, same accent, same close-mic sound.

CAMERA: vertical 9:16, phone look. ON CAMERA = phone propped on the bed facing her at chest height as framed in @Image1, unless the shot says closer; micro-drift only. INSERT = handheld close-up in the same room. No zoom, pan, tilt, dolly or cinematic moves. Raw, amateur, slightly underexposed, TikTok-native.

AUDIO SETUP: close-mic phone UGC voice, natural breaths, crisp consonants, about 150 words per minute, never rushed. Quiet room tone. No reverb, no music, no SFX.

PERFORMANCE RULES: relaxed start pose; one gesture per idea, then rest; never mirror gestures to words or repeat a gesture; direct eye contact with brief glances away when remembering; one speaker only; ON CAMERA mouth clearly visible for lip-sync; INSERT mouth not in frame.

STYLE & EMOTION: Maya, 27, a bit flustered, venting to a friend. Energy arc: flustered → relieved.

PRE-SPEAKING ACTION: exhales through the nose, small eye-roll

DIALOGUE & PERFORMANCE:
SHOT 1 — 0:00-0:06 · ON CAMERA (lip-sync)
Framing: closer, head to chest, same angle and light as @Image1
Mood: slightly flustered
Expression: scrunched brows, exasperated half-smile
Voice: quick, a little flustered
Body: one small open-palm gesture at 'stealing', then hand rests
Dialogue: "My boyfriend has been stealing my hair removal cream. Getting burned every time he tries it."

SHOT 2 — 0:06-0:10 · ON CAMERA (lip-sync)
Framing: medium shot, head to waist, as in @Image1
Mood: relieved, satisfied
Expression: small nod, confident smile
Voice: calmer, lands the line
Body: nods once on 'fixed it'
Dialogue: "I finally figured out why and fixed it."
Hard cut between each shot.

PRONUNCIATION: none special.

LOCKS:
- @Image1 is the base for the whole clip. Face from @Image2 only.
- Room, window light, bedding, wardrobe (sage-grey sweatshirt, small gold hoops, black hair tie left wrist), hair identical to @Image1.
- No extra people. No on-screen text, captions, subtitles or music. No objects beyond @Image1 and those named in the shots.
- Natural skin: pores, freckles, fine lines. No smoothing, no AI sheen, no beauty filter.
- Lip-sync matches the exact English dialogue, General American accent, @Audio1 voice identity.
```

### CLIP 1C — HOOK C (~10 s)
**Slot:** @Image1 = BASE-1 · @Image2 = Maya sheet · @Audio1 = voice

```
Reference-based video generation, vertical 9:16, about 10 seconds (hard maximum 30 seconds), 2 shots with hard cuts.

ROLE MAPPING — DO NOT CHANGE:
@Image1 is the BASE IMAGE — the scene master for every shot. NOT a start frame, NOT an end frame. It defines location, layout, props, lighting, colour grade, shadows, wardrobe, jewellery, hair and body. A shot may change framing only where it says so; room, light and wardrobe never change.
@Image2 is the FACE REFERENCE only (Maya): facial structure, eyes, nose, lips, jaw, freckles, skin texture, age. Do not copy its grey studio background, studio lighting or clothing.
@Audio1 is the VOICE REFERENCE: timbre, pitch and energy only. ACCENT OVERRIDE — THIS TAKES PRIORITY OVER @Audio1: natural General American accent, woman in her late twenties, casual conversational register like talking to a friend on FaceTime. Not British, not Australian, not Indonesian-accented, not an advert/announcer voice. Speaks the exact DIALOGUE in English word for word. In INSERT shots the voice continues off-screen: same voice, same accent, same close-mic sound.

CAMERA: vertical 9:16, phone look. ON CAMERA = phone propped on the bed facing her at chest height as framed in @Image1, unless the shot says closer; micro-drift only. INSERT = handheld close-up in the same room. No zoom, pan, tilt, dolly or cinematic moves. Raw, amateur, slightly underexposed, TikTok-native.

AUDIO SETUP: close-mic phone UGC voice, natural breaths, crisp consonants, about 150 words per minute, never rushed. Quiet room tone. No reverb, no music, no SFX.

PERFORMANCE RULES: relaxed start pose; one gesture per idea, then rest; never mirror gestures to words or repeat a gesture; direct eye contact with brief glances away when remembering; one speaker only; ON CAMERA mouth clearly visible for lip-sync; INSERT mouth not in frame.

STYLE & EMOTION: Maya, 27, curious, sharing a discovery. Energy arc: wince → realisation.

PRE-SPEAKING ACTION: small inhale, tilts head

DIALOGUE & PERFORMANCE:
SHOT 1 — 0:00-0:05 · ON CAMERA (lip-sync)
Framing: closer, head to chest, same angle and light as @Image1
Mood: genuinely curious, slightly wincing
Expression: brows pinched, slight wince at 'down there'
Voice: conversational, a little lower on 'down there'
Body: no gesture, eyes briefly glance down then back to lens
Dialogue: "My boyfriend kept using my Nair and ending up with chemical burns down there."

SHOT 2 — 0:05-0:10 · ON CAMERA (lip-sync)
Framing: medium shot, head to waist, as in @Image1
Mood: realisation
Expression: eyes widen slightly, small point of index finger toward camera on 'cream'
Voice: clear, slower, emphasis on 'not him' and 'cream'
Body: single point gesture, then hand rests
Dialogue: "Turns out the problem was not him. It was the cream."
Hard cut between each shot.

PRONUNCIATION: Nair = NAIR (rhymes with 'hair').

LOCKS:
- @Image1 is the base for the whole clip. Face from @Image2 only.
- Room, window light, bedding, wardrobe (sage-grey sweatshirt, small gold hoops, black hair tie left wrist), hair identical to @Image1.
- No extra people. No on-screen text, captions, subtitles or music. No objects beyond @Image1 and those named in the shots.
- Natural skin: pores, freckles, fine lines. No smoothing, no AI sheen, no beauty filter.
- Lip-sync matches the exact English dialogue, General American accent, @Audio1 voice identity.
```

### CLIP 2 — Story opens (~20 s)
**Slot:** @Image1 = BASE-1 · @Image2 = Maya sheet · @Audio1 = voice

```
Reference-based video generation, vertical 9:16, about 20 seconds (hard maximum 30 seconds), 3 shots with hard cuts.

ROLE MAPPING — DO NOT CHANGE:
@Image1 is the BASE IMAGE — the scene master for every shot. NOT a start frame, NOT an end frame. It defines location, layout, props, lighting, colour grade, shadows, wardrobe, jewellery, hair and body. A shot may change framing only where it says so; room, light and wardrobe never change.
@Image2 is the FACE REFERENCE only (Maya): facial structure, eyes, nose, lips, jaw, freckles, skin texture, age. Do not copy its grey studio background, studio lighting or clothing.
@Audio1 is the VOICE REFERENCE: timbre, pitch and energy only. ACCENT OVERRIDE — THIS TAKES PRIORITY OVER @Audio1: natural General American accent, woman in her late twenties, casual conversational register like talking to a friend on FaceTime. Not British, not Australian, not Indonesian-accented, not an advert/announcer voice. Speaks the exact DIALOGUE in English word for word. In INSERT shots the voice continues off-screen: same voice, same accent, same close-mic sound.

CAMERA: vertical 9:16, phone look. ON CAMERA = phone propped on the bed facing her at chest height as framed in @Image1, unless the shot says closer; micro-drift only. INSERT = handheld close-up in the same room. No zoom, pan, tilt, dolly or cinematic moves. Raw, amateur, slightly underexposed, TikTok-native.

AUDIO SETUP: close-mic phone UGC voice, natural breaths, crisp consonants, about 150 words per minute, never rushed. Quiet room tone. No reverb, no music, no SFX.

PERFORMANCE RULES: relaxed start pose; one gesture per idea, then rest; never mirror gestures to words or repeat a gesture; direct eye contact with brief glances away when remembering; one speaker only; ON CAMERA mouth clearly visible for lip-sync; INSERT mouth not in frame.

STYLE & EMOTION: Maya telling a story to a friend, natural, amused at herself. Energy arc: amused → sheepish → realisation.

PRE-SPEAKING ACTION: settles back against the headboard, small breath

DIALOGUE & PERFORMANCE:
SHOT 1 — 0:00-0:07 · ON CAMERA (lip-sync)
Framing: medium shot, head to waist, as in @Image1
Mood: storytelling, slightly amused at herself
Expression: soft smirk
Voice: relaxed, like gossip with a friend
Body: shrugs one shoulder on 'a few times'
Dialogue: "So he tried mine a few times. I use it on my legs. He uses it down there."

SHOT 2 — 0:07-0:12 · INSERT (voice-over, no lip-sync)
Framing: handheld close-up of her hand on the duvet beside her knee
Action: her hand picks up the plain soft-pink squeeze tube (no text, no logo), turns it over once, sets it down. Slow, casual.
Voice: continues, slightly lower
Voice-over: "And every time he ends up with burns and irritation for days after."

SHOT 3 — 0:12-0:20 · ON CAMERA (lip-sync)
Framing: closer, head to chest, same angle and light as @Image1
Mood: self-aware, a bit guilty
Expression: raises eyebrows, presses lips together after 'too long', then a tiny head shake on 'not him'
Voice: slower on the last sentence
Body: no gesture
Dialogue: "I thought he was just leaving it on too long. Turns out it was not him at all."
Hard cut between each shot.

PRONUNCIATION: none special.

LOCKS:
- @Image1 is the base for the whole clip. Face from @Image2 only.
- Room, window light, bedding, wardrobe (sage-grey sweatshirt, small gold hoops, black hair tie left wrist), hair identical to @Image1.
- No extra people. No on-screen text, captions, subtitles or music. No objects beyond @Image1 and those named in the shots.
- Natural skin: pores, freckles, fine lines. No smoothing, no AI sheen, no beauty filter.
- Lip-sync matches the exact English dialogue, General American accent, @Audio1 voice identity.
- PROP LOCK: Her own women's cream is a plain soft-pink squeeze tube with a white flip cap and NO readable text or logo.
```

### CLIP 3 — What she noticed (part 1) (~19 s)
**Slot:** @Image1 = BASE-1 · @Image2 = Maya sheet · @Audio1 = voice  (animasi ANIM-1 & ANIM-2 ditimpa di edit)

```
Reference-based video generation, vertical 9:16, about 19 seconds (hard maximum 30 seconds), 3 shots with hard cuts.

ROLE MAPPING — DO NOT CHANGE:
@Image1 is the BASE IMAGE — the scene master for every shot. NOT a start frame, NOT an end frame. It defines location, layout, props, lighting, colour grade, shadows, wardrobe, jewellery, hair and body. A shot may change framing only where it says so; room, light and wardrobe never change.
@Image2 is the FACE REFERENCE only (Maya): facial structure, eyes, nose, lips, jaw, freckles, skin texture, age. Do not copy its grey studio background, studio lighting or clothing.
@Audio1 is the VOICE REFERENCE: timbre, pitch and energy only. ACCENT OVERRIDE — THIS TAKES PRIORITY OVER @Audio1: natural General American accent, woman in her late twenties, casual conversational register like talking to a friend on FaceTime. Not British, not Australian, not Indonesian-accented, not an advert/announcer voice. Speaks the exact DIALOGUE in English word for word. In INSERT shots the voice continues off-screen: same voice, same accent, same close-mic sound.

CAMERA: vertical 9:16, phone look. ON CAMERA = phone propped on the bed facing her at chest height as framed in @Image1, unless the shot says closer; micro-drift only. INSERT = handheld close-up in the same room. No zoom, pan, tilt, dolly or cinematic moves. Raw, amateur, slightly underexposed, TikTok-native.

AUDIO SETUP: close-mic phone UGC voice, natural breaths, crisp consonants, about 150 words per minute, never rushed. Quiet room tone. No reverb, no music, no SFX.

PERFORMANCE RULES: relaxed start pose; one gesture per idea, then rest; never mirror gestures to words or repeat a gesture; direct eye contact with brief glances away when remembering; one speaker only; ON CAMERA mouth clearly visible for lip-sync; INSERT mouth not in frame.

STYLE & EMOTION: Maya explaining what she figured out, like a friend who did her research. Energy arc: calm → emphatic.

PRE-SPEAKING ACTION: small breath, sits up a little

DIALOGUE & PERFORMANCE:
SHOT 1 — 0:00-0:08 · ON CAMERA (lip-sync)
Framing: medium shot, head to waist, as in @Image1
Mood: explaining, calm and clear
Expression: focused, small nod
Voice: even, teacher-friend tone
Body: one hand gestures lightly at her own shin area on 'leg hair'
Dialogue: "My cream is formulated for women's fine leg hair. The hair there is thin and soft."

SHOT 2 — 0:08-0:13 · INSERT (voice-over, no lip-sync)
Framing: handheld close-up of her forearm/hand resting on the duvet, soft window light
Action: her fingertips lightly rub the pink tube's cap, then let go — nothing else moves
Voice: same voice, continues
Voice-over: "The formula dissolves it easily without needing to be very strong."

SHOT 3 — 0:13-0:19 · ON CAMERA (lip-sync)
Framing: closer, head to chest, same angle and light as @Image1
Mood: emphatic
Expression: eyebrows up, slight head tilt
Voice: slows down, a beat between 'Thicker.' and 'Coarser.'
Body: holds thumb and index finger apart on 'Thicker', then rests
Dialogue: "But the hair on a man's body down there is completely different. Thicker. Coarser."
Hard cut between each shot.

PRONUNCIATION: formulated = FOR-myoo-lay-ted; coarser = KOR-ser.

LOCKS:
- @Image1 is the base for the whole clip. Face from @Image2 only.
- Room, window light, bedding, wardrobe (sage-grey sweatshirt, small gold hoops, black hair tie left wrist), hair identical to @Image1.
- No extra people. No on-screen text, captions, subtitles or music. No objects beyond @Image1 and those named in the shots.
- Natural skin: pores, freckles, fine lines. No smoothing, no AI sheen, no beauty filter.
- Lip-sync matches the exact English dialogue, General American accent, @Audio1 voice identity.
- PROP LOCK: Her own women's cream is a plain soft-pink squeeze tube with a white flip cap and NO readable text or logo.
```

### CLIP 4 — What she noticed (part 2) + Big reaction (~22 s)
**Slot:** @Image1 = BASE-1 · @Image2 = Maya sheet · @Image3 = product sheet · @Audio1 = voice  (ANIM-3 ditimpa di shot 1)

```
Reference-based video generation, vertical 9:16, about 22 seconds (hard maximum 30 seconds), 3 shots with hard cuts.

ROLE MAPPING — DO NOT CHANGE:
@Image1 is the BASE IMAGE — the scene master for every shot. NOT a start frame, NOT an end frame. It defines location, layout, props, lighting, colour grade, shadows, wardrobe, jewellery, hair and body. A shot may change framing only where it says so; room, light and wardrobe never change.
@Image2 is the FACE REFERENCE only (Maya): facial structure, eyes, nose, lips, jaw, freckles, skin texture, age. Do not copy its grey studio background, studio lighting or clothing.
@Image3 is the PRODUCT REFERENCE (Botane MAN+ bottle): slim cylindrical bottle, about 15 cm tall, matte muted sage-green body (soft-touch finish); white collar ring at the neck; silver-grey airless pump head with a short side-facing nozzle; clear transparent dome over-cap covering the pump; front label printed in off-white: serif wordmark at the top, a thin line-drawing of an aloe vera plant in the middle, small text lines and three check-mark lines below, small volume text at the bottom. Copy exactly whenever the product appears. Ignore its white background and studio light; the product is lit by @Image1.
@Audio1 is the VOICE REFERENCE: timbre, pitch and energy only. ACCENT OVERRIDE — THIS TAKES PRIORITY OVER @Audio1: natural General American accent, woman in her late twenties, casual conversational register like talking to a friend on FaceTime. Not British, not Australian, not Indonesian-accented, not an advert/announcer voice. Speaks the exact DIALOGUE in English word for word. In INSERT shots the voice continues off-screen: same voice, same accent, same close-mic sound.

CAMERA: vertical 9:16, phone look. ON CAMERA = phone propped on the bed facing her at chest height as framed in @Image1, unless the shot says closer; micro-drift only. INSERT = handheld close-up in the same room. No zoom, pan, tilt, dolly or cinematic moves. Raw, amateur, slightly underexposed, TikTok-native.

AUDIO SETUP: close-mic phone UGC voice, natural breaths, crisp consonants, about 150 words per minute, never rushed. Quiet room tone. No reverb, no music, no SFX.

PERFORMANCE RULES: relaxed start pose; one gesture per idea, then rest; never mirror gestures to words or repeat a gesture; direct eye contact with brief glances away when remembering; one speaker only; ON CAMERA mouth clearly visible for lip-sync; INSERT mouth not in frame.

STYLE & EMOTION: Maya, problem → solution. Energy arc: serious → rising → proud.

PRE-SPEAKING ACTION: small breath

DIALOGUE & PERFORMANCE:
SHOT 1 — 0:00-0:11 · ON CAMERA (lip-sync)
Framing: medium shot, head to waist, as in @Image1
Mood: explaining the problem
Expression: slight frown, matter-of-fact
Voice: even, clear, slight emphasis on 'patches' and 'burns'
Body: one small open-hand gesture on 'either', rests
Dialogue: "The formula is not strong enough to dissolve it cleanly. So either it does not fully work and leaves patches. Or he leaves it on longer trying to make it work. And that is when the skin burns."

SHOT 2 — 0:11-0:17 · INSERT (voice-over, no lip-sync)
Framing: handheld close-up over her shoulder: her phone in her hands, screen glowing bright and blurred (no readable content), thumb scrolling
Action: thumb scrolls twice, taps once
Voice: lighter, energy rising
Voice-over: "So I looked for a hair removal cream actually built for men's thick body hair down there."

SHOT 3 — 0:17-0:22 · ON CAMERA (lip-sync)
Framing: medium shot, head to waist, as in @Image1
Mood: proud reveal
Expression: small satisfied smile
Voice: bright, lands the brand name
Body: lifts the Botane bottle from beside her hip to chest height, label facing camera, holds still
Dialogue: "And I found Botane."
Hard cut between each shot.

PRONUNCIATION: Botane = BOH-tahn.

LOCKS:
- @Image1 is the base for the whole clip. Face from @Image2 only. Product from @Image3 only.
- Room, window light, bedding, wardrobe (sage-grey sweatshirt, small gold hoops, black hair tie left wrist), hair identical to @Image1.
- PRODUCT LOCK: identical to @Image3 whenever visible — sage-green matte bottle, white collar, silver pump, clear dome cap, same proportions. No redesign, recolour, resize, no new text or logo, never turned into a tube.
- No extra people. No on-screen text, captions, subtitles or music. No objects beyond @Image1 and those named in the shots.
- Natural skin: pores, freckles, fine lines. No smoothing, no AI sheen, no beauty filter.
- Lip-sync matches the exact English dialogue, General American accent, @Audio1 voice identity.
- PHONE LOCK: screen is bright and blurred, nothing readable.
```

### CLIP 5 — She asks him about it (~20 s)
**Slot:** @Image1 = BASE-1 · @Image2 = Maya sheet · @Image3 = product sheet · @Audio1 = voice  (ANIM-4 ditimpa di edit)

```
Reference-based video generation, vertical 9:16, about 20 seconds (hard maximum 30 seconds), 3 shots with hard cuts.

ROLE MAPPING — DO NOT CHANGE:
@Image1 is the BASE IMAGE — the scene master for every shot. NOT a start frame, NOT an end frame. It defines location, layout, props, lighting, colour grade, shadows, wardrobe, jewellery, hair and body. A shot may change framing only where it says so; room, light and wardrobe never change.
@Image2 is the FACE REFERENCE only (Maya): facial structure, eyes, nose, lips, jaw, freckles, skin texture, age. Do not copy its grey studio background, studio lighting or clothing.
@Image3 is the PRODUCT REFERENCE (Botane MAN+ bottle): slim cylindrical bottle, about 15 cm tall, matte muted sage-green body (soft-touch finish); white collar ring at the neck; silver-grey airless pump head with a short side-facing nozzle; clear transparent dome over-cap covering the pump; front label printed in off-white: serif wordmark at the top, a thin line-drawing of an aloe vera plant in the middle, small text lines and three check-mark lines below, small volume text at the bottom. Copy exactly whenever the product appears. Ignore its white background and studio light; the product is lit by @Image1.
@Audio1 is the VOICE REFERENCE: timbre, pitch and energy only. ACCENT OVERRIDE — THIS TAKES PRIORITY OVER @Audio1: natural General American accent, woman in her late twenties, casual conversational register like talking to a friend on FaceTime. Not British, not Australian, not Indonesian-accented, not an advert/announcer voice. Speaks the exact DIALOGUE in English word for word. In INSERT shots the voice continues off-screen: same voice, same accent, same close-mic sound.

CAMERA: vertical 9:16, phone look. ON CAMERA = phone propped on the bed facing her at chest height as framed in @Image1, unless the shot says closer; micro-drift only. INSERT = handheld close-up in the same room. No zoom, pan, tilt, dolly or cinematic moves. Raw, amateur, slightly underexposed, TikTok-native.

AUDIO SETUP: close-mic phone UGC voice, natural breaths, crisp consonants, about 150 words per minute, never rushed. Quiet room tone. No reverb, no music, no SFX.

PERFORMANCE RULES: relaxed start pose; one gesture per idea, then rest; never mirror gestures to words or repeat a gesture; direct eye contact with brief glances away when remembering; one speaker only; ON CAMERA mouth clearly visible for lip-sync; INSERT mouth not in frame.

STYLE & EMOTION: Maya passing on what she learned. Energy arc: informative → convinced.

PRE-SPEAKING ACTION: glances at the bottle in her hand, then to lens

DIALOGUE & PERFORMANCE:
SHOT 1 — 0:00-0:06 · ON CAMERA (lip-sync)
Framing: medium shot, head to waist, as in @Image1
Mood: informative, confident
Expression: relaxed
Voice: clear, unhurried
Body: holds the Botane bottle at chest height, label to camera, a small tilt toward lens on 'papaya'
Dialogue: "Botane uses papaya extract to dissolve the hair at the root."

SHOT 2 — 0:06-0:13 · INSERT (voice-over, no lip-sync)
Framing: handheld close-up of the bottle in her right hand, she takes off the clear dome cap with the other hand
Action: removes the clear cap, presses the silver pump once, a pea-sized dollop of smooth pale off-white cream lands on her fingertip; holds it toward camera
Voice: continues, warm
Voice-over: "Strong enough for men's thick body hair. But gentle enough for the sensitive skin down there."

SHOT 3 — 0:13-0:20 · ON CAMERA (lip-sync)
Framing: closer, head to chest, same angle and light as @Image1
Mood: convinced, ticking off points
Expression: slight nods
Voice: rhythmic, short beats
Body: counts on fingers, one finger per 'No'
Dialogue: "No burns. No patches left behind. No sharp tip left on any hair to grow back prickly or curl back into an ingrown."
Hard cut between each shot.

PRONUNCIATION: Botane = BOH-tahn; papaya = puh-PIE-uh; ingrown = IN-grohn.

LOCKS:
- @Image1 is the base for the whole clip. Face from @Image2 only. Product from @Image3 only.
- Room, window light, bedding, wardrobe (sage-grey sweatshirt, small gold hoops, black hair tie left wrist), hair identical to @Image1.
- PRODUCT LOCK: identical to @Image3 whenever visible — sage-green matte bottle, white collar, silver pump, clear dome cap, same proportions. No redesign, recolour, resize, no new text or logo, never turned into a tube.
- No extra people. No on-screen text, captions, subtitles or music. No objects beyond @Image1 and those named in the shots.
- Natural skin: pores, freckles, fine lines. No smoothing, no AI sheen, no beauty filter.
- Lip-sync matches the exact English dialogue, General American accent, @Audio1 voice identity.
- CREAM LOCK: cream is smooth, pale off-white, opaque, soft peak, no foam, no glitter.
```

### CLIP 6 — What it actually is + Wrongly accused (~22 s)
**Slot:** @Image1 = BASE-1 · @Image2 = Maya sheet · @Image3 = product sheet · @Audio1 = voice  (ANIM-5 + BR-2 ditimpa di edit)

```
Reference-based video generation, vertical 9:16, about 22 seconds (hard maximum 30 seconds), 3 shots with hard cuts.

ROLE MAPPING — DO NOT CHANGE:
@Image1 is the BASE IMAGE — the scene master for every shot. NOT a start frame, NOT an end frame. It defines location, layout, props, lighting, colour grade, shadows, wardrobe, jewellery, hair and body. A shot may change framing only where it says so; room, light and wardrobe never change.
@Image2 is the FACE REFERENCE only (Maya): facial structure, eyes, nose, lips, jaw, freckles, skin texture, age. Do not copy its grey studio background, studio lighting or clothing.
@Image3 is the PRODUCT REFERENCE (Botane MAN+ bottle): slim cylindrical bottle, about 15 cm tall, matte muted sage-green body (soft-touch finish); white collar ring at the neck; silver-grey airless pump head with a short side-facing nozzle; clear transparent dome over-cap covering the pump; front label printed in off-white: serif wordmark at the top, a thin line-drawing of an aloe vera plant in the middle, small text lines and three check-mark lines below, small volume text at the bottom. Copy exactly whenever the product appears. Ignore its white background and studio light; the product is lit by @Image1.
@Audio1 is the VOICE REFERENCE: timbre, pitch and energy only. ACCENT OVERRIDE — THIS TAKES PRIORITY OVER @Audio1: natural General American accent, woman in her late twenties, casual conversational register like talking to a friend on FaceTime. Not British, not Australian, not Indonesian-accented, not an advert/announcer voice. Speaks the exact DIALOGUE in English word for word. In INSERT shots the voice continues off-screen: same voice, same accent, same close-mic sound.

CAMERA: vertical 9:16, phone look. ON CAMERA = phone propped on the bed facing her at chest height as framed in @Image1, unless the shot says closer; micro-drift only. INSERT = handheld close-up in the same room. No zoom, pan, tilt, dolly or cinematic moves. Raw, amateur, slightly underexposed, TikTok-native.

AUDIO SETUP: close-mic phone UGC voice, natural breaths, crisp consonants, about 150 words per minute, never rushed. Quiet room tone. No reverb, no music, no SFX.

PERFORMANCE RULES: relaxed start pose; one gesture per idea, then rest; never mirror gestures to words or repeat a gesture; direct eye contact with brief glances away when remembering; one speaker only; ON CAMERA mouth clearly visible for lip-sync; INSERT mouth not in frame.

STYLE & EMOTION: Maya. Energy arc: reassuring → delighted → amazed.

PRE-SPEAKING ACTION: small breath, lowers the bottle to her lap

DIALOGUE & PERFORMANCE:
SHOT 1 — 0:00-0:10 · ON CAMERA (lip-sync)
Framing: medium shot, head to waist, as in @Image1
Mood: calm, reassuring
Expression: soft smile
Voice: gentle, slower on 'clean calm skin'
Body: holds bottle loosely in lap
Dialogue: "Plus the 30 percent aloe vera base protects the skin the whole time the hair dissolves. Not burning it. Not stripping it. Just clean calm skin after."

SHOT 2 — 0:10-0:16 · ON CAMERA (lip-sync)
Framing: closer, head to chest, same angle and light as @Image1
Mood: delighted recounting
Expression: grin, eyebrows up
Voice: quicker, amused
Body: small laugh breath before speaking, no gesture
Dialogue: "He used it once. No burns. No irritation. No patches left behind. Completely smooth."

SHOT 3 — 0:16-0:22 · ON CAMERA (lip-sync)
Framing: medium shot, head to waist, as in @Image1
Mood: still slightly amazed
Expression: eyebrows raised, small head shake
Voice: slower, beat before 'Gone.'
Body: flat hand small sweep on 'Gone', then rests
Dialogue: "And the ingrown hairs and bumps he always got from shaving before. Gone."
Hard cut between each shot.

PRONUNCIATION: 30 percent = thirty percent; aloe vera = AL-oh VEER-uh.

LOCKS:
- @Image1 is the base for the whole clip. Face from @Image2 only. Product from @Image3 only.
- Room, window light, bedding, wardrobe (sage-grey sweatshirt, small gold hoops, black hair tie left wrist), hair identical to @Image1.
- PRODUCT LOCK: identical to @Image3 whenever visible — sage-green matte bottle, white collar, silver pump, clear dome cap, same proportions. No redesign, recolour, resize, no new text or logo, never turned into a tube.
- No extra people. No on-screen text, captions, subtitles or music. No objects beyond @Image1 and those named in the shots.
- Natural skin: pores, freckles, fine lines. No smoothing, no AI sheen, no beauty filter.
- Lip-sync matches the exact English dialogue, General American accent, @Audio1 voice identity.
```

### CLIP 7 — Mechanism (her smug) + Close/CTA (~18 s)
**Slot:** @Image1 = BASE-1 · @Image2 = Maya sheet · @Image3 = product sheet · @Audio1 = voice  (BR-3 ditimpa di shot 1)

```
Reference-based video generation, vertical 9:16, about 18 seconds (hard maximum 30 seconds), 2 shots with hard cuts.

ROLE MAPPING — DO NOT CHANGE:
@Image1 is the BASE IMAGE — the scene master for every shot. NOT a start frame, NOT an end frame. It defines location, layout, props, lighting, colour grade, shadows, wardrobe, jewellery, hair and body. A shot may change framing only where it says so; room, light and wardrobe never change.
@Image2 is the FACE REFERENCE only (Maya): facial structure, eyes, nose, lips, jaw, freckles, skin texture, age. Do not copy its grey studio background, studio lighting or clothing.
@Image3 is the PRODUCT REFERENCE (Botane MAN+ bottle): slim cylindrical bottle, about 15 cm tall, matte muted sage-green body (soft-touch finish); white collar ring at the neck; silver-grey airless pump head with a short side-facing nozzle; clear transparent dome over-cap covering the pump; front label printed in off-white: serif wordmark at the top, a thin line-drawing of an aloe vera plant in the middle, small text lines and three check-mark lines below, small volume text at the bottom. Copy exactly whenever the product appears. Ignore its white background and studio light; the product is lit by @Image1.
@Audio1 is the VOICE REFERENCE: timbre, pitch and energy only. ACCENT OVERRIDE — THIS TAKES PRIORITY OVER @Audio1: natural General American accent, woman in her late twenties, casual conversational register like talking to a friend on FaceTime. Not British, not Australian, not Indonesian-accented, not an advert/announcer voice. Speaks the exact DIALOGUE in English word for word. In INSERT shots the voice continues off-screen: same voice, same accent, same close-mic sound.

CAMERA: vertical 9:16, phone look. ON CAMERA = phone propped on the bed facing her at chest height as framed in @Image1, unless the shot says closer; micro-drift only. INSERT = handheld close-up in the same room. No zoom, pan, tilt, dolly or cinematic moves. Raw, amateur, slightly underexposed, TikTok-native.

AUDIO SETUP: close-mic phone UGC voice, natural breaths, crisp consonants, about 150 words per minute, never rushed. Quiet room tone. No reverb, no music, no SFX.

PERFORMANCE RULES: relaxed start pose; one gesture per idea, then rest; never mirror gestures to words or repeat a gesture; direct eye contact with brief glances away when remembering; one speaker only; ON CAMERA mouth clearly visible for lip-sync; INSERT mouth not in frame.

STYLE & EMOTION: Maya, wrapping up to a friend. Energy arc: smug → friendly.

PRE-SPEAKING ACTION: small smirk, short breath

DIALOGUE & PERFORMANCE:
SHOT 1 — 0:00-0:08 · ON CAMERA (lip-sync)
Framing: medium shot, head to waist, as in @Image1
Mood: slightly smug, playful
Expression: side-eye toward off-camera left, then back to lens with a smirk
Voice: teasing
Body: no gesture
Dialogue: "He has not touched my cream since. He has his own Botane now. And honestly I am considering switching too."

SHOT 2 — 0:08-0:18 · ON CAMERA (lip-sync)
Framing: closer, head to chest, same angle and light as @Image1
Mood: friendly, direct offer
Expression: open, warm
Voice: clear, numbers distinct, casual on the last line
Body: holds the Botane bottle up beside her face, label facing camera; on 'down there' points down with index finger, then smiles
Dialogue: "It is up to 60 percent off right now with 34 dollars in free gifts and a 90-day guarantee. Links down there somewhere."
Hard cut between each shot.

PRONUNCIATION: Botane = BOH-tahn; 60 percent = sixty percent; 34 dollars = thirty-four dollars; 90-day = ninety-day.

LOCKS:
- @Image1 is the base for the whole clip. Face from @Image2 only. Product from @Image3 only.
- Room, window light, bedding, wardrobe (sage-grey sweatshirt, small gold hoops, black hair tie left wrist), hair identical to @Image1.
- PRODUCT LOCK: identical to @Image3 whenever visible — sage-green matte bottle, white collar, silver pump, clear dome cap, same proportions. No redesign, recolour, resize, no new text or logo, never turned into a tube.
- No extra people. No on-screen text, captions, subtitles or music. No objects beyond @Image1 and those named in the shots.
- Natural skin: pores, freckles, fine lines. No smoothing, no AI sheen, no beauty filter.
- Lip-sync matches the exact English dialogue, General American accent, @Audio1 voice identity.
```


---

## Bagian 4 — Wan B-roll

### BR-1 — Maya researching on phone (opsional, kalau insert di CLIP 4 kurang) (5 s)
**Ref:** Same location as base → @Image1 = BASE-1, @Image2 = Maya sheet. **Ditimpa di:** CLIP 4 shot 2

```
Reference-based video generation, vertical 9:16, 5 seconds, single continuous shot, no dialogue.

ROLE MAPPING: @Image1 = BASE-1 scene master (room, light, wardrobe). @Image2 = Maya face only; ignore its studio background and clothing.
ACTION: 0–2s Maya sits cross-legged on the bed, looking down at her phone, thumb scrolling; 2–4s stops, eyes widen slightly, small 'huh' expression; 4–5s turns the phone screen slightly toward herself and nods.
CAMERA: handheld from the foot of the bed, chest-up, micro-drift. No zoom.
AUDIO: no speech, no music, quiet room tone.
LOCKS: scene from @Image1, face from @Image2, phone screen bright and blurred (nothing readable), no text or logos, natural skin.
```

### BR-2 — Jake checks his skin, surprised (5 s)
**Ref:** @Image1 = BASE-2, @Image2 = Jake sheet, @Image3 = product sheet. **Ditimpa di:** CLIP 6 shot 2–3

```
Reference-based video generation, vertical 9:16, 5 seconds, single continuous shot, no dialogue.

ROLE MAPPING: @Image1 = BASE-2 scene master (bathroom, light, wardrobe). @Image2 = Jake face only. @Image3 = product reference: copy exactly if visible.
SCENE: Jake alone in the bathroom from BASE-2 (Maya not in frame), standing at the sink mirror.
ACTION: 0–2s he runs his palm slowly over the side of his lower stomach just above the waistband of his sweatpants (waistband stays up, nothing explicit), 2–4s looks down, then at his own reflection, eyebrows lift, genuinely surprised half-smile; 4–5s small impressed nod to himself.
CAMERA: handheld, from the bathroom doorway, waist-up, micro-drift.
AUDIO: no speech, no music, quiet room tone.
LOCKS: scene from @Image1, face from @Image2, PRODUCT LOCK (Botane bottle on the sink counter identical to @Image3), no text, no nudity, natural skin.
```

### BR-3 — Jake with his own Botane, Maya eyeing it (5 s)
**Ref:** @Image1 = BASE-2, @Image2 = Maya sheet, @Image3 = product sheet, @Image4 = Jake sheet. **Ditimpa di:** CLIP 7 shot 1

```
Reference-based video generation, vertical 9:16, 5 seconds, single continuous shot, no dialogue.

ROLE MAPPING: @Image1 = BASE-2 scene master (both people, positions, bathroom, light, wardrobe). @Image2 = Maya face only. @Image4 = Jake face only. @Image3 = product reference, copy exactly. Ignore all sheet backgrounds and studio light.
ACTION: 0–2s Jake picks his Botane bottle up from the sink counter, holds it casually; 2–4s Maya, leaning in the doorway with arms crossed, narrows her eyes at the bottle with a playful smirk; 4–5s Jake notices, pulls the bottle slightly toward his chest protectively and grins.
CAMERA: static phone on the counter shelf, both people in frame, micro-drift. No zoom.
AUDIO: no speech, no music, quiet room tone.
LOCKS: scene from @Image1, faces from @Image2 / @Image4, PRODUCT LOCK identical to @Image3 (one bottle only), no text, natural skin.
```

### BR-4 — Product hero, pump action (5 s)
**Ref:** @Image1 = product sheet, @Image2 = BASE-1 (setting). **Ditimpa di:** CLIP 5 / CLIP 7 backup

```
Reference-based video generation, vertical 9:16, 5 seconds, single continuous shot, no dialogue.

ROLE MAPPING: @Image1 = product reference, copy exactly. @Image2 = BASE-1 for the setting (bedside table, window light only; no person).
ACTION: 0–2s bottle stands on the wooden bedside table in soft daylight; 2–4s a hand (Maya's, black hair tie on wrist, sage-grey sleeve) lifts the clear dome cap off; 4–5s presses the silver pump once, a smooth pale off-white dollop of cream lands on two fingertips.
CAMERA: handheld close-up, slight micro-drift, phone look.
AUDIO: quiet room tone only.
LOCKS: PRODUCT LOCK identical to @Image1, no added text, no logo invention, natural light.
```


---

## Bagian 5 — Animasi penjelasan (text-to-video)
Tujuan: penonton langsung ngerti 3 hal — (1) rambut cowok jauh lebih tebal, (2) krim cewek kurang kuat → nyisa / kebakar kalau didiemin, (3) Botane larut di akar + aloe ngelindungin kulit. Tiap animasi cuma 1 ide, gerak pelan, warna kontras. Label/teks ("FINE HAIR" / "THICK HAIR") ditambahin di edit.

### ANIM-1 — Fine leg hair vs thick male hair (split screen) (6 s)
**Mode:** text-to-video (tanpa referensi). **Ditimpa di:** CLIP 3, shot 1–2

```
Text-to-video, vertical 9:16, 6 seconds, single continuous shot, no dialogue.

STYLE: clean educational 3D medical animation, macro cross-section of human skin like a dermatology explainer: skin layers clearly visible (thin pale-peach epidermis on top, pinker dermis below), hair shafts rising from follicles, soft studio lighting, shallow depth of field, slow and readable motion, colours easy to tell apart at phone size. No people, no faces, no text, no labels, no numbers, no logos, no music. Vertical 9:16.

SCENE: vertical split screen divided by a thin soft white line. LEFT half: macro cross-section of skin with 6–8 very thin, soft, light-brown hairs, slightly translucent, straight, thin as threads. RIGHT half: the same skin cross-section but with 4–5 thick, dark-brown, coarse, slightly curly hairs, each clearly 3–4 times thicker than on the left, rooted deeper with bigger bulbs.
ACTION:
0–2s: camera holds on both halves; the hairs sway very slightly so the thickness difference reads instantly.
2–4s: the camera slowly pushes in a little on the RIGHT half to show the coarse hair's rough, layered cuticle surface vs the smooth thin hair on the left.
4–6s: hold, both halves visible again, still and clear.

CAMERA: slow, steady, almost static; one gentle push-in at most. No fast moves.
AUDIO: none.
LOCKS: no text, no labels, no arrows with words, no numbers, no logos, no people. Anatomically clean, not gory, no blood.
```

### ANIM-2 — Weak formula: dissolves fine hair, struggles on thick hair (8 s)
**Mode:** text-to-video (tanpa referensi). **Ditimpa di:** CLIP 3 shot 3 → CLIP 4 shot 1

```
Text-to-video, vertical 9:16, 8 seconds, single continuous shot, no dialogue.

STYLE: clean educational 3D medical animation, macro cross-section of human skin like a dermatology explainer: skin layers clearly visible (thin pale-peach epidermis on top, pinker dermis below), hair shafts rising from follicles, soft studio lighting, shallow depth of field, slow and readable motion, colours easy to tell apart at phone size. No people, no faces, no text, no labels, no numbers, no logos, no music. Vertical 9:16.

SCENE: same split screen as before. A layer of pale pink cream spreads over the skin surface on both halves.
ACTION:
0–3s: LEFT (fine hair): the thin hairs soften, turn translucent and dissolve completely into the cream at the skin surface within seconds; skin underneath stays calm peach.
3–6s: RIGHT (thick hair): the same pink cream barely affects the coarse hairs — they only go slightly soft at the tips and stay standing; several hairs remain in clumps = visible PATCHES of hair left behind.
6–8s: hold on the right half: unevenly cleared skin with leftover dark hair patches between bare spots.

CAMERA: slow, steady, almost static; one gentle push-in at most. No fast moves.
AUDIO: none.
LOCKS: no text, no labels, no arrows with words, no numbers, no logos, no people. Anatomically clean, not gory, no blood.
```

### ANIM-3 — Leaving it on longer = burn spreading (6 s)
**Mode:** text-to-video (tanpa referensi). **Ditimpa di:** CLIP 4, shot 1 ("...that is when the skin burns")

```
Text-to-video, vertical 9:16, 6 seconds, single continuous shot, no dialogue.

STYLE: clean educational 3D medical animation, macro cross-section of human skin like a dermatology explainer: skin layers clearly visible (thin pale-peach epidermis on top, pinker dermis below), hair shafts rising from follicles, soft studio lighting, shallow depth of field, slow and readable motion, colours easy to tell apart at phone size. No people, no faces, no text, no labels, no numbers, no logos, no music. Vertical 9:16.

SCENE: close macro of the RIGHT-half skin from ANIM-2, coarse hairs still partly standing, pink cream sitting on top.
ACTION:
0–2s: a subtle clock-like time cue: the light in the scene shifts slightly warmer, cream stays on the skin.
2–5s: the skin under the cream starts turning red: a red-orange glow spreads outward from under the cream through the epidermis like heat spreading, small raised red bumps appear, the top skin layer looks irritated and slightly raw at the edges.
5–6s: hold on the inflamed red patch with stubborn coarse hairs still poking out. Clear, not gory, no blood, no open wounds.

CAMERA: slow, steady, almost static; one gentle push-in at most. No fast moves.
AUDIO: none.
LOCKS: no text, no labels, no arrows with words, no numbers, no logos, no people. Anatomically clean, not gory, no blood.
```

### ANIM-4 — Papaya extract dissolves thick hair at the root (8 s)
**Mode:** text-to-video (tanpa referensi). **Ditimpa di:** CLIP 5, shot 2–3

```
Text-to-video, vertical 9:16, 8 seconds, single continuous shot, no dialogue.

STYLE: clean educational 3D medical animation, macro cross-section of human skin like a dermatology explainer: skin layers clearly visible (thin pale-peach epidermis on top, pinker dermis below), hair shafts rising from follicles, soft studio lighting, shallow depth of field, slow and readable motion, colours easy to tell apart at phone size. No people, no faces, no text, no labels, no numbers, no logos, no music. Vertical 9:16.

SCENE: macro cross-section of skin with 4–5 thick, dark, coarse male hairs (same as the right half earlier). Above, a fresh cut papaya half (orange flesh, black seeds) floats briefly at the top of frame.
ACTION:
0–2s: soft orange-gold particles flow from the papaya and blend into a smooth pale off-white cream that settles on the skin surface; papaya fades out.
2–5s: glowing orange-gold particles travel DOWN along each hair shaft into the follicle; each thick hair dissolves cleanly from the root upward, collapsing into the cream evenly — all hairs at the same time, no patches.
5–7s: comparison detail: a single follicle opening shown close: the hair end is soft and rounded, NOT a sharp cut tip (show a faint ghost outline of a sharp shaved spike crossed out by fading away, no text).
7–8s: hold: smooth even skin surface, calm peach colour, no redness, no hair left.

CAMERA: slow, steady, almost static; one gentle push-in at most. No fast moves.
AUDIO: none.
LOCKS: no text, no labels, no arrows with words, no numbers, no logos, no people. Anatomically clean, not gory, no blood.
```

### ANIM-5 — 30% aloe vera base protects skin (7 s)
**Mode:** text-to-video (tanpa referensi). **Ditimpa di:** CLIP 6, shot 1

```
Text-to-video, vertical 9:16, 7 seconds, single continuous shot, no dialogue.

STYLE: clean educational 3D medical animation, macro cross-section of human skin like a dermatology explainer: skin layers clearly visible (thin pale-peach epidermis on top, pinker dermis below), hair shafts rising from follicles, soft studio lighting, shallow depth of field, slow and readable motion, colours easy to tell apart at phone size. No people, no faces, no text, no labels, no numbers, no logos, no music. Vertical 9:16.

SCENE: macro cross-section of skin with thick coarse hairs and the off-white cream on top.
ACTION:
0–2s: a fresh green aloe vera leaf is sliced open at the top of frame; clear glossy aloe gel drips down and spreads.
2–5s: a thin translucent soft-green protective layer forms directly ON the skin surface, BETWEEN the skin and the cream, like a cushion; the skin under it glows calm and cool; meanwhile the hairs above dissolve into the cream.
5–7s: cream and dissolved hair wipe away to the side; the skin surface is smooth, even, calm peach, no redness, slightly dewy.

CAMERA: slow, steady, almost static; one gentle push-in at most. No fast moves.
AUDIO: none.
LOCKS: no text, no labels, no arrows with words, no numbers, no logos, no people. Anatomically clean, not gory, no blood.
```


---

## Risiko & urutan test
1. **Test CLIP 1A dulu** → cek aksen US & timbre @Audio1, plus apakah botol tetap botol (bukan berubah jadi tube). Kalau aksen bocor, pertegas ACCENT OVERRIDE.
2. **CLIP 5 shot 2 (pump + krim)** paling rawan: tangan + tutup bening + pump sering rusak. Kalau gagal, pakai BR-4 sebagai pengganti insert.
3. **Label produk**: teks "BOTANE MAN+" bakal sering blur/ngaco di AI [High confidence — model video masih lemah render teks kecil]. Solusi: shot produk dekat diganti foto produk asli / tempel label di edit.
4. **ANIM-3/ANIM-4** bisa jadi abstrak. Kalau hasil Wan ga jelas, generate ulang dengan durasi lebih pendek (5 s) dan satu aksi aja.
5. Durasi asli bisa meleset ±3 s dari estimasi; recount kalau ada clip mepet 30 s (ga ada yang lewat 22 s, jadi aman).

## Compliance flags (FTC/FDA — kasih ke klien, dialog TIDAK gw ubah)
- **"Nair" (Hook C)**: nyebut merek pesaing + ngaitin ke "chemical burns" = comparative/disparagement risk; butuh substansiasi. Hook A/B lebih aman.
- **"No burns. No irritation." / "No ingrown"**: klaim absolut, butuh bukti uji; depilatori tetap bisa bikin iritasi → saranin "Fewer…" atau disclaimer "results may vary, patch test first".
- **Area intim ("down there")**: banyak depilatori label FDA-nya melarang pemakaian di area genital. Cek label/izin Botane — kalau ga diklaim aman untuk area itu, ini risiko besar (juga risiko penolakan iklan di Meta/TikTok).
- **"30 percent aloe vera base"**: harus sesuai formula.
- **Testimoni**: pasangan fiktif yang diperankan AI → FTC butuh disclosure (mis. "Dramatization / AI-generated").
- **"Up to 60% off", "$34 free gifts", "90-day guarantee"**: harus benar & ada syaratnya di landing page.
