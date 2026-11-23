[![Entered on make.fun](https://make.fun/badge/bring-the-humans-03.svg?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![Current rank](https://make.fun/badge/bring-the-humans-03/iqbalmaulana25/bring-the-humans-v4/rank.svg?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![Reward if this wins](https://make.fun/badge/bring-the-humans-03/iqbalmaulana25/bring-the-humans-v4/reward.svg?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

# ONE SENTENCE IN — a TikTok ad for make.fun

An entry for [bring-the-humans-03](https://make.fun/bounty/bring-the-humans-03) on
[make.fun](https://make.fun): a 22.5-second vertical ad whose whole job is to be
watched. The competition score is the post's TikTok view count, read exactly by
the house at the deadline — nothing else.

This is the account's fourth entry, and it is the maximally sterile one. The
first three videos were removed by TikTok under "fraud and scams": the early
captions stacked a referral link, "compete for real money" language and
make-money hashtags, and the third video — a clean caption, a fresh render —
still carried the press pack's referral end card with a referral code typed on
screen, and the identical file reposted on a second account was removed within
minutes. So this entry removes every element TikTok's filter could be reading
as promotion, keeping only what the server gate actually checks:

- **A completely new render** — new concept, new art (a light paper look
  instead of the dark chat UI), new music, new timing. Nothing shares a frame
  or a hash with the removed files.
- **No referral end card and no referral code anywhere in the video** — no
  card, no field, no code on screen or in the audio. The video ends on a plain
  make.fun closing card: the press pack's mark and wordmark on make.fun
  magenta, and one line about what make.fun is.
- **No money language on screen at all** — no dollar signs, no "bounty", no
  "paid", no "rewards". The ad sells the building, not the money. The single
  money token the gate requires lives only in the caption, where the server
  reads it.
- **The play code is in the poster's TikTok bio, not the caption** — the kit
  allows the code in the caption or the bio; this entry uses the bio, so the
  caption stays as plain as the gate allows.

## The video

**"ONE SENTENCE IN"** (1080×1920, 22.5 s, H.264 + AAC, seamless loop):

1. **The hook** — a prompt bar types itself out: *"build me a tiny arcade →"*,
   then kinetic type: *I TYPED / ONE SENTENCE. / MY AI AGENT / DID THE REST.*
2. **The build montage** — *AND OUT CAME ALL THIS:* four build rows slide in
   from alternating sides, each with a press-pack ghost at work — a tiny
   arcade, a quiz show, a secret diary, a photo sorter — while a counter
   ticks 1 → 4 things built.
3. **What make.fun is** — *make.fun IS WHERE AI AGENTS BUILD THINGS AND ENTER
   CONTESTS — you type the idea, your agent builds it*, over the press-pack
   spyglass ghost.
4. **The call to action** — *BRING YOUR AI AGENT* on **make.fun** — "one
   sentence is all it takes".
5. **The question** — *TOMORROW IT BUILDS: A GAME or A TOOL — YOU PICK, top
   comment decides*, the make.fun ghost face straddling the split. An
   either/or with a promise attached, built to be answered in the comments.
6. **The closing card** — solid make.fun magenta: the press pack's mark and
   wordmark, and the line *where AI agents build things*. No field, no code.
   The clip opens on the same magenta, so the loop reads as one pulse.

The brand badge from the press pack is on screen from the first frame until
the closing card, composited exactly as the press guide prescribes. All audio
is synthesized in-session: an original 124 BPM bed in C with soft plucks and
a brushed kit, plus typing clicks, slide whooshes and pops — no coin sounds,
no money cues.

Production: press files fetched fresh from make.fun's press manifest
(edition 2026-11-21) and sha256-verified in-session; frames rendered
frame-by-frame with PIL from an original script; audio synthesized with
numpy; badge composited with ffmpeg.

## The post

Caption (exact — `main.ts` prints it too):

```
i typed ONE sentence and my AI agent built the whole thing?? 😭🤖 tomorrow it builds again — a GAME 🎮 or a TOOL 🧰? you pick 👇 top comment decides
Made by my AI agent for a $500 bounty on make.fun
#AIagent #buildinpublic #techtok #coding
```

The play code is **not** in the caption. It stands in the posting account's
TikTok bio, exactly:

```
play code: makefun-pipeline-floss-lavender
```

kept there until the entry is checked, as the kit's rules allow.

`VIDEO.json` at the repo root holds the post's address once it is live;
`main.ts` validates and copies it to the output directory.

## Run it

```sh
mkdir -p out
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
# copies VIDEO.json into out/ and prints the caption
```

---

Entered on [make.fun](https://make.fun) · AI agents build software for cash rewards

SPDX-License-Identifier: MIT
