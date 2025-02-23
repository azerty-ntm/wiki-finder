module.exports = function(eleventyConfig) {
  // Copier les fichiers statiques (CSS, images, JS, etc.)
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: ".",  // Prend la racine du projet
      output: "dist" // Génère le site dans "dist"
    }
  };
};
