import sharp from "sharp";

const sizes = [
  { name: "footer-small", width: 480 },
  { name: "footer-medium", width: 800 },
  { name: "footer-large", width: 1200 },
];

for (const size of sizes) {
  sharp("footer-original.webp")
    .resize({ width: size.width })
    .toFile(`${size.name}.webp`)
    .then(() => console.log(`${size.name}.webp created!`))
    .catch(console.error);
}
