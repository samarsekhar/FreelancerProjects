const lyrics = [
  "🎶 Sunn Le Yeh Sadaa.....",
  "💖 Kaisi Dillagi Hai Tu.....",
  "🤗 Kaisi Bebasi Hai Tu.....",
  "🥰 Meri Jindagi Hai Tu.....",
  "🙌 Meri Jindagi Hai Tu.....",
  "💖 ✨ . . . o(≧▽≦)o . . . ✨ 💖"
];

const delays = [900, 4200, 2400, 4600, 800, 4000];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeLine(line) {
  for (const char of line) {
    process.stdout.write(char);
    await sleep(50);
  }
  process.stdout.write("\n");
}

async function playSong() {
  await sleep(2000);

  for (let i = 0; i < lyrics.length; i++) {
    await typeLine(lyrics[i]);
    await sleep(delays[i]);
  }
}

playSong();
