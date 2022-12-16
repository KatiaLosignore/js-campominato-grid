console.log('JS OK');

//Recupero gli elementi dal DOM
const buttonElement = document.getElementById('button');

const gridElement = document.getElementById('grid');

// Numero righe e colonne
const rows = 10;
const cols = 10;
const totalCells = rows * cols;



buttonElement.addEventListener('click', function(){

    for(let i = 1; i <= totalCells; i++) {
        
        const cell = createCell(i);


        cell.addEventListener('click', function (event) {
            this.classList.add('clicked');
        });

        gridElement.appendChild(cell);


    }


});


function createCell(content) {
    const cell = document.createElement('div');
    cell.append(content);
    cell.classList.add('cell');
    return cell;
}