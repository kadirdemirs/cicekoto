import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const origin = "https://forged.build";
const outputRoot = new URL("../forged-clone/", import.meta.url);
const outputRootPath = fileURLToPath(outputRoot);

const sanityFiles = [
  "0d77854d5c0f7838adcd0bf6e9c4f0b18121c9a4-540p.mp4",
  "1846f8233c9d8c43c122862e6333e15f1488966c-540p.mp4",
  "977c85947ca5359d5f85bd7aea5631065d7ca96f-540p.mp4",
  "ca6e088c6ac22176cafd6a23ff66dcfe3552c668-540p.mp4",
  "a826ae4531b91fa6bab47cd6565801c085c7566c-540p.mp4",
  "61f00eeada5fc239f8a91e6973123e24e34db54f-540p.mp4",
  "96b3ef4085c6a2ae1f7793af57a1acd0c8c454d4-540p.mp4",
  "0d77854d5c0f7838adcd0bf6e9c4f0b18121c9a4-thumbnail.jpg",
  "1846f8233c9d8c43c122862e6333e15f1488966c-thumbnail.jpg",
  "977c85947ca5359d5f85bd7aea5631065d7ca96f-thumbnail.jpg",
  "ca6e088c6ac22176cafd6a23ff66dcfe3552c668-thumbnail.jpg",
  "a826ae4531b91fa6bab47cd6565801c085c7566c-thumbnail.jpg",
  "61f00eeada5fc239f8a91e6973123e24e34db54f-thumbnail.jpg",
  "96b3ef4085c6a2ae1f7793af57a1acd0c8c454d4-thumbnail.jpg",
  "dc98f48b18b4f7772209e8991768e65df1be1d68-3840x2160-w800.webp",
  "dc98f48b18b4f7772209e8991768e65df1be1d68-3840x2160-w800.jpg",
  "b7f3735fc1af95a694a1bbb42ea8bb0bf8def651-3840x2160-w800.webp",
  "b7f3735fc1af95a694a1bbb42ea8bb0bf8def651-3840x2160-w800.jpg",
  "9522fe3237f46e8ea9fc44a8022487371631fc5e-1920x1080-w800.webp",
  "9522fe3237f46e8ea9fc44a8022487371631fc5e-1920x1080-w800.jpg",
  "370d43bac22008be6cc4b8bb63eb585b055e3bc8-1920x1080-w800.webp",
  "370d43bac22008be6cc4b8bb63eb585b055e3bc8-1920x1080-w800.jpg",
  "a81dcebd911637b0ea3e49e660d01c55f4b76025-2774x1552-w800.webp",
  "a81dcebd911637b0ea3e49e660d01c55f4b76025-2774x1552-w800.jpg",
  "e6981fc25af0fccbd4e05b1d252b91dbaaab0543-2776x1488-w800.webp",
  "e6981fc25af0fccbd4e05b1d252b91dbaaab0543-2776x1488-w800.jpg",
  "52b072cf3bc5f7143ed585afa822a4bce62dfba1-2778x1540-w800.webp",
  "52b072cf3bc5f7143ed585afa822a4bce62dfba1-2778x1540-w800.jpg",
  "f08828980a18e0cd79b07c0bca553e10816eec56-2780x1548-w800.webp",
  "f08828980a18e0cd79b07c0bca553e10816eec56-2780x1548-w800.jpg",
  "149e9d1c88d521fab79f706bb94ba11a5642dbc2-2954x1648-w800.webp",
  "149e9d1c88d521fab79f706bb94ba11a5642dbc2-2954x1648-w800.jpg",
  "e70b8b59ff06f123bfa657fee28c5cbe073b2ecc-2974x1634-w800.webp",
  "e70b8b59ff06f123bfa657fee28c5cbe073b2ecc-2974x1634-w800.jpg",
  "97662037cfffd5a6ebc7f03f9dffae2908d2dfcb-2990x1652-w800.webp",
  "97662037cfffd5a6ebc7f03f9dffae2908d2dfcb-2990x1652-w800.jpg",
  "c94df683e37caba33da79c9813a51d18e1df594e-2984x1634-w800.webp",
  "c94df683e37caba33da79c9813a51d18e1df594e-2984x1634-w800.jpg",
];

const files = [
  "assets/bin/auraruntime.js",
  "assets/bin/auraruntime.wasm",
  "assets/bin/app.aura",
  "assets/bin/visit.bin",
  "assets/fonts/AkiraExpanded.otf",
  "assets/fonts/Manrope.ttf",
  "assets/images/favicon.png",
  "assets/images/0d1d7043-f534-462b-b94e-98d9c65b1f4b_lineblur.jpg",
  "assets/images/26141b4c-4b1a-4e43-8f71-f6cd0cf94395_forged-f.png",
  "assets/images/f02983dc-d93c-422e-9dda-b6c658056947_lightblur.jpg",
  "assets/images/logo.png",
  "assets/images/logo.svg",
  "assets/images/social.png",
  "assets/images/openlink.svg",
  "assets/images/youtube-icon.svg",
  "assets/images/instagram-icon.svg",
  "assets/images/linkedin-icon.svg",
  "assets/images/x-icon.svg",
  "assets/video/motion.mp4",
  ...sanityFiles.map((file) => `assets/sanity/${file}`),
];

async function download(relativePath) {
  const url = `${origin}/${relativePath}`;
  const target = join(outputRootPath, relativePath);
  try {
    const existing = await stat(target);
    if (existing.size > 0) {
      return { path: relativePath, ok: true, bytes: existing.size, retained: true };
    }
  } catch {
    // Download missing files below.
  }
  const response = await fetch(url, {
    headers: { "user-agent": "Mozilla/5.0 ForgedCloneResearch/1.0" },
  });

  if (!response.ok) {
    return { path: relativePath, ok: false, status: response.status };
  }

  await mkdir(dirname(target), { recursive: true });
  const bytes = new Uint8Array(await response.arrayBuffer());
  await writeFile(target, bytes);
  return { path: relativePath, ok: true, bytes: bytes.byteLength };
}

async function main() {
  await mkdir(outputRoot, { recursive: true });

  const source = await fetch(`${origin}/`, {
    headers: { "user-agent": "Mozilla/5.0 ForgedCloneResearch/1.0" },
  });
  if (!source.ok) throw new Error(`Could not download source HTML: ${source.status}`);

  let html = await source.text();
  html = html
    .replace(/\s*<script async src="https:\/\/www\.googletagmanager\.com[\s\S]*?<\/script>/, "")
    .replace(/\s*<script>\s*window\.dataLayer[\s\S]*?<\/script>/, "")
    .replace(/\s*<script type="module" src="https:\/\/static\.cloudflareinsights\.com[\s\S]*?<\/script>/, "");
  await writeFile(new URL("index.html", outputRoot), html, "utf8");

  const results = [];
  for (let index = 0; index < files.length; index += 4) {
    results.push(...(await Promise.all(files.slice(index, index + 4).map(download))));
  }

  const runtimePath = join(outputRootPath, "assets/bin/auraruntime.js");
  const runtimeSource = await readFile(runtimePath, "utf8");
  const visitRequest = 'e=await fetch(`${location.origin}/visit`,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({t:Date.now()})})';
  const interimWasmRequest = 'e=await fetch(new URL("auraruntime.wasm",_capturedScript.src))';
  const localVisitRequest = 'e=await fetch(new URL("visit.bin",_capturedScript.src))';
  const legacyGeneratedVisitResponse = 'e=new Response(Uint8Array.from([66,65,83,73,2,218,0,0,0,13,...String(Date.now()+5e3).split("").map(e=>10+Number(e))]))';
  const generatedVisitResponse = 'e=new Response(Uint8Array.from([66,65,83,73,2,218,0,0,0,13,...String(Date.now()+36e5).split("").map(e=>10+Number(e))]))';
  const shaderFetchBinding = 'e.fetch=fetch.bind(window);';
  const inlineShaderFetchBinding = 'e.fetch=(t,n)=>String(t).includes("/shaderCache/lookup/")?Promise.resolve(new Response(\'{"miss":true}\',{status:200,headers:{"Content-Type":"application/json"}})):fetch(t,n);';
  const legacyLocalShaderFetchBinding = 'e.fetch=(t,n)=>String(t).includes("/shaderCache/lookup/")?fetch(`/assets/shader-cache/${String(t).split("/").pop()}.json`):fetch(t,n);';
  const localShaderFetchBinding = 'e._localFetch=fetch.bind(window);e.fetch=(t,n)=>String(t).includes("/shaderCache/lookup/")?e._localFetch(`/assets/shader-cache/${String(t).split("/").pop()}.json`):e._localFetch(t,n);';
  if (!runtimeSource.includes(visitRequest) && !runtimeSource.includes(interimWasmRequest) && !runtimeSource.includes(localVisitRequest) && !runtimeSource.includes(legacyGeneratedVisitResponse) && !runtimeSource.includes(generatedVisitResponse)) {
    throw new Error("Aura runtime visit request signature changed; local patch was not applied.");
  }
  if (!runtimeSource.includes(shaderFetchBinding) && !runtimeSource.includes(inlineShaderFetchBinding) && !runtimeSource.includes(legacyLocalShaderFetchBinding) && !runtimeSource.includes(localShaderFetchBinding)) {
    throw new Error("Aura runtime fetch binding changed; shader cache patch was not applied.");
  }
  await writeFile(
    runtimePath,
    runtimeSource
      .replace(visitRequest, legacyGeneratedVisitResponse)
      .replace(interimWasmRequest, legacyGeneratedVisitResponse)
      .replace(localVisitRequest, legacyGeneratedVisitResponse)
      .replace(generatedVisitResponse, legacyGeneratedVisitResponse)
      .replace(shaderFetchBinding, localShaderFetchBinding)
      .replace(inlineShaderFetchBinding, localShaderFetchBinding)
      .replace(legacyLocalShaderFetchBinding, localShaderFetchBinding),
    "utf8",
  );

  await writeFile(
    new URL("asset-manifest.json", outputRoot),
    JSON.stringify({ source: origin, generatedAt: new Date().toISOString(), results }, null, 2),
    "utf8",
  );

  const downloaded = results.filter((result) => result.ok);
  const failed = results.filter((result) => !result.ok);
  const bytes = downloaded.reduce((total, result) => total + result.bytes, 0);
  console.log(`Downloaded ${downloaded.length}/${results.length} assets (${(bytes / 1024 / 1024).toFixed(1)} MiB).`);
  if (failed.length) console.warn("Unavailable optional assets:", failed);
}

await main();
