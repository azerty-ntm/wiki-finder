export default function(eleventyConfig) {
  // 🔥 Copier les fichiers CSS, images et autres assets vers le dossier dist
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: ".",       // Prend la racine du projet comme source
      includes: "_layouts",  // Dossier pour les layouts
      output: "dist"    // Dossier où seront générées les pages finales
    }
  };
}
