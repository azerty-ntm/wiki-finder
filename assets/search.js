document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const cards = document.querySelectorAll(".wiki-card");

    searchInput.addEventListener("keyup", function () {
        let filter = searchInput.value.toLowerCase();

        cards.forEach(card => {
            let title = card.querySelector(".wiki-title").innerText.toLowerCase();
            let category = card.querySelector(".wiki-category").innerText.toLowerCase();

            // Si le titre ou la catégorie correspond à la recherche, on l'affiche
            if (title.includes(filter) || category.includes(filter)) {
                card.style.display = "inline-block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
