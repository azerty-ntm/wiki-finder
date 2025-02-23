export default function(eleventyConfig) {
  // 🔥 Copier les fichiers CSS, images et JS vers le dossier dist
  eleventyConfig.addPassthroughCopy("site/assets");

  return {
    dir: {
      input: "site",
      output: "dist"
    }
  };
};
