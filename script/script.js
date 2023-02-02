function createCanvas(size) {
    const screen = document.querySelector('.box');

    for(let i = 0; i < size; i++) {
        const coll = createRows();

        for(let j = 0; j < size; j++) {
            const pixel = createPixel();
            pixel.style.width = `${getPixelSize(size)}px`;
            pixel.style.height = `${getPixelSize(size)}px`;
            coll.appendChild(pixel);
        }

        screen.appendChild(coll)
    }
}

function createRows() {
    const rows = document.createElement('div');
    rows.classList.toggle('col')
    return rows
}

function createPixel() {
    const pixel = document.createElement('div');
    pixel.classList.toggle('pixel');

    pixel.addEventListener('mouseover', () => {
        pixel.classList.toggle('hover')
    })

    return pixel;
}

function getPixelSize(numOfPixels) {
    return 600 / numOfPixels;

}

createCanvas(16);


