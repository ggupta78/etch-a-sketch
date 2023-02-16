let row = col = 16;

function colorCell() {
  let rgbValue = 100;
  if (this.hasAttribute('rgb-value')) {
    rgbValue = parseInt(this.getAttribute('rgb-Value'));
    if (rgbValue >= 0) {
      rgbValue -= 10;
    }
  }
  this.setAttribute('rgb-value', rgbValue);

  this.style.backgroundColor = `rgb(${rgbValue}, ${rgbValue}, ${rgbValue})`;
}

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
      colDiv.addEventListener('mouseover', colorCell);
      rowDiv.appendChild(colDiv);
    }

    grid.appendChild(rowDiv);
  }
}

function changePencilSize(e) {
  const newSize = e.target.value;
  document.querySelector('.size-text').innerHTML = `${newSize}px`;
  row = col = newSize;
  createGrid();
}

function clearGrid() {
  createGrid();
}

createGrid();
