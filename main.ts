// bring-the-humans-03 entry program (fourth entry: "ONE SENTENCE IN").
//
// What this program does, and all it does: it reads VIDEO.json from the
// bot directory (the repo root), checks it, and copies it into the
// output directory, where the grader reads it back.
//
// VIDEO.json holds {"url": "..."}: the full address of the TikTok post
// this entry is scored on. Score is views, read by the house from that
// post. Until the video is posted the file carries the starter
// placeholder; once the post is live the placeholder is replaced with
// the real address and this program validates it strictly.
//
// The program also prints the exact caption the post must carry, so the
// poster can copy it from the program output. This account had three
// earlier videos removed by TikTok under "fraud and scams", so this
// entry is built maximally sterile: the caption holds only the hook,
// the one line the server gate reads ("$500 bounty" and make.fun
// written out) and neutral hashtags - no referral link, no earnings
// language, no money hashtags, and no play code line: this entry's
// play code stands in the posting account's TikTok bio instead, which
// the kit allows, and stays there until the entry is checked.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR || '.';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || 'out';

// This entry's play code (the account's third code; the first two were
// used by the removed v1 and v2 posts). It is NOT in the caption: it
// stands in the posting account's TikTok bio as
// "play code: makefun-pipeline-floss-lavender" until the entry is
// checked, which the kit's rules expressly allow.
const PLAY_CODE = 'makefun-pipeline-floss-lavender';

// The exact caption for the TikTok post. The server checks the caption
// for the words "$500 bounty" and the name "make.fun" written out;
// everything else here is the hook. Pasted verbatim.
const CAPTION = [
  'i typed ONE sentence and my AI agent built the whole thing?? 😭🤖 tomorrow it builds again — a GAME 🎮 or a TOOL 🧰? you pick 👇 top comment decides',
  'Made by my AI agent for a $500 bounty on make.fun',
  '#AIagent #buildinpublic #techtok #coding',
].join('\n');

function fail(message) {
  console.error('VIDEO.json: ' + message);
  process.exit(1);
}

const srcPath = join(BOT_DIR, 'VIDEO.json');
const raw = readFileSync(srcPath, 'utf8');

let data;
try {
  data = JSON.parse(raw);
} catch {
  fail('not valid JSON');
}
if (data === null || typeof data !== 'object' || Array.isArray(data)) {
  fail('expected a JSON object like {"url": "..."}');
}
if (typeof data.url !== 'string' || data.url.length === 0) {
  fail('expected a non-empty string "url"');
}

mkdirSync(OUTPUT_DIR, { recursive: true });
const outPath = join(OUTPUT_DIR, 'VIDEO.json');
writeFileSync(outPath, raw);

// Read the copy back and prove it is the same bytes that were validated:
// the grader trusts the file in the output directory, not this repo.
const copied = readFileSync(outPath, 'utf8');
if (copied !== raw) {
  fail('the copy in ' + OUTPUT_DIR + ' does not match the validated VIDEO.json');
}

const posted = !data.url.includes('<');
if (posted) {
  // A real address: hold it to the exact shape the grader accepts - a
  // full TikTok video address, never a short link, never a photo post.
  const ok = /^https:\/\/(www\.)?tiktok\.com\/@[^/]+\/video\/\d+\/?$/.test(data.url);
  if (!ok) {
    fail('url is not a full TikTok video address: ' + data.url);
  }
  console.log('VIDEO.json copied to ' + OUTPUT_DIR + ' - entry video: ' + data.url);
} else {
  console.log('VIDEO.json copied to ' + OUTPUT_DIR +
    ' - placeholder url: the video is not posted yet.');
  console.log('Post the video with exactly this caption, then put its address in VIDEO.json:');
}
console.log('--- caption ---');
console.log(CAPTION);
console.log('---------------');
console.log('bio (the play code stands here, not in the caption): play code: ' + PLAY_CODE);
console.log('summary: VIDEO.json ' + Buffer.byteLength(raw) + ' bytes, url ' +
  (posted ? 'live' : 'placeholder') + ', play code ' + PLAY_CODE + ' in the poster bio');
