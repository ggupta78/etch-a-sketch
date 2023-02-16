let row = col = 100;

function createGrid() {
  const grid = document.querySelector(".grid");
  //empty the existing grid
  grid.replaceChildren();

  //Generate rows of divs
  for (let index = 1; index <= row; index++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    rowDiv.style.height = `${640/row}px`;

    //Generate columns of divs
    for (let colIndex = 1; colIndex <= col; colIndex++) {
      const colDiv = document.createElement('div');
      colDiv.classList.add('col');
      rowDiv.appendChild(colDiv);
    }

    grid.appendChild(rowDiv);
  }
}

createGrid();
