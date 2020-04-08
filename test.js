const tile = document.querySelector('.tile6');
const nauka = document.querySelector('.additionalTile');

tile.addEventListener("mouseover", () => {
    nauka.style.display = 'grid'
})
tile.addEventListener("mouseout", () => {
    nauka.style.display = 'none'
})