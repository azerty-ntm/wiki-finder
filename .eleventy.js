module.exports = function(eleventyConfig) {
  // Copier les fichiers statiques (CSS, images, JS)
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: ".",  // Dossier source (racine)
      output: "dist", // Dossier généré
      includes: "_includes" // Dossier des layouts
    }
  };
};
