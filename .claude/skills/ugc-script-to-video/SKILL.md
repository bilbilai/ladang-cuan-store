---
name: ugc-script-to-video
description: Use when Billy gives an AI UGC ad script (PDF/text, usually Section | Script | Visual columns) plus a product photo and wants prompts for character sheet, product sheet, base image and Wan 3.0 video clips (max 30 s). Visual and dialogue follow the script 1:1, raw mid-range phone look, animations and B-roll built INTO the main clips.
---

# UGC Script → Wan 3.0 Pack (simple, script-faithful, raw)

Output: ONE markdown file `ugc/<Brand>_production_pack.md`. Explanations in casual Bahasa Indonesia (gw/lo); prompts in English; dialogue in the script's own language, word for word.

## Rule 0 — Read the script before writing anything
1. Extract every section: dialogue (exact) + the VISUAL column (exact).
2. Build the **audit table first**: `Section | Visual di script | Jadi shot apa`. Every shot in the pack must trace back to a line in the Visual column.
3. **Never invent** what the script does not show:
   - Product appears ONLY in sections whose visual mentions it. "Girlfriend to camera" = person only, empty hands, no product, no @product slot.
   - No extra props, demos (pump, unboxing, applying), locations, or people the script didn't ask for.
   - If dialogue says "this" but the visual shows no product, follow the visual and flag it to Billy — don't fix it yourself.
4. If the script contradicts the real product (e.g. script says "tube", photo is a pump bottle), use the real product and flag it.

## Assets — keep it minimal
Only three asset types, GPT Image 2:
1. **Character sheet** — one per person who actually appears in the visuals. Multi-panel (front, 3/4 L, 3/4 R, profile, full body), grey background, raw skin (pores, marks, uneven tone), fixed default wardrobe + jewellery.
2. **Product sheet** — from Billy's product photo. Describe every part (shape, colour, finish, cap, pump, label layout). White background. No redesign, no new text.
3. **Base image** — as few as possible (usually 1). Only add another base if a new location/second person recurs. The main base contains ONLY what the hook visual shows (usually no product). Product enters later via the product-sheet slot.

Voice: Billy supplies @Audio1 (timbre only); accent is set by an ACCENT OVERRIDE line in every clip (says what it IS and what it is NOT).

## RAW look (apply to every image and video prompt)
"Raw unedited footage from a mid-range Android/iPhone (not flagship), front or back camera, auto exposure slightly off, slight underexposure or blown window, mild noise and compression, soft focus hunting, slight handheld wobble, imperfect framing (off-centre, head slightly cropped or too much headroom), messy lived-in room, real skin texture, no makeup look, no ring light, no studio light, no colour grade, no cinematic moves. Looks unplanned, like someone just grabbed their phone and started talking."
Performance: natural pauses, small stumbles allowed, glances away, not presenter energy.

## Wan 3.0 clips — main clips contain A-roll + B-roll + animation together
- Each clip ≤ 30 s (target 20–28 s). Count words: English ~150 wpm, Indonesian ~115–135 wpm.
- Split the script into clips at section boundaries. Hooks = separate short clips (for A/B testing).
- Inside ONE clip use hard-cut shots: ON CAMERA (lip-sync), INSERT/B-ROLL (voice-over), ANIMATION (voice-over). Do NOT make separate B-roll or animation clips unless Wan clearly can't do it in one (e.g. second character needing its own base) — then note why.
- Animation shots: describe step by step with timing so the audience truly understands (what is shown, what changes, before vs after, colours that contrast, slow readable motion). Explainer style (macro cross-section / simple 3D), no text or labels in the animation — labels go in the edit.

### Clip prompt skeleton
```
Reference-based video generation, vertical 9:16, about N seconds (max 30), n shots with hard cuts.
ROLE MAPPING: @Image1 = base image (scene master, not a start frame). @Image2 = face only (ignore its background/clothes). [@Image3 = product, copy exactly — ONLY if the script visual shows the product in this clip.] @Audio1 = voice timbre only. ACCENT OVERRIDE: ...
LOOK: [RAW look line]
SHOT 1 — 0:00-0:0X · ON CAMERA (lip-sync) — Framing / Expression / Body / Dialogue: "..."
SHOT 2 — ... · INSERT / B-ROLL (voice-over) — Action: ... / Voice-over: "..."
SHOT 3 — ... · ANIMATION (voice-over) — 0-2s ... 2-4s ... / Voice-over: "..."
PRONUNCIATION: brand, numbers spelled as spoken, hard words.
LOCKS: room/light/wardrobe from @Image1; face from @Image2; [PRODUCT LOCK]; no text/captions/logos/music; no extra people or objects not in the script; natural skin; lip-sync exact dialogue.
```

## Pack structure (short)
1. Header: market, language, accent, wpm, flags (contradictions, assumptions).
2. Audit table (script visual → shot).
3. Workflow steps (numbered, 5–6 lines).
4. Assets: character sheet(s), product sheet, base image(s).
5. Clips (each: slot line + full prompt). Text overlays listed per clip for the edit.
6. Risks & test order (2–3 items) + compliance flags (don't rewrite dialogue).

## Final check before sending
- Every dialogue line appears word for word (verify with a script/diff).
- Every shot maps to the Visual column; no product/prop where the script doesn't show it.
- No clip over 30 s.
