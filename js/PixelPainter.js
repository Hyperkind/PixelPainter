const PixelPainter = (() => {
    console.log('smoke test');
    const pp = document.getElementById('pixelPainter');
    const swatchColors = [
        'red',
        'yellow',
        'green',
        'black'
    ]

    const makeGrid = (height, width, gridId, gridClass) => {
        const grid = document.createElement('div');
        
        pp.appendChild(grid);
        
        grid.id = gridId;
        grid.className = gridClass;
        
        for(let i = 0; i < height; i++){
            const row = document.createElement('div');
            grid.appendChild(row);
            for(let j = 0; j < width; j++){
                const box = document.createElement('span');
                row.appendChild(box);
            }
        }
    }

    const makeBox = () => {
        const box = document.createElement('span');
    }

    makeGrid(1, 5, 'swatchGridId', 'swatchGridClass');
    makeGrid(1, 4, 'colorGridId', 'colorGridClass');

    
})();