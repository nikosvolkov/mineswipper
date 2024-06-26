import { boardParameters } from './consts';

const rows = boardParameters.rows;
const columns = boardParameters.columns;

export const createBoard = () => {
  const boardArray = [];
  const boardDiv = document.createElement('div');
  boardDiv.id = 'board';
  boardDiv.classList.add('game-board');
  boardDiv.style.gridTemplateColumns = `repeat(${rows}, 50px)`;
  boardDiv.style.width = `${rows * 50 + 20}px`;
  boardDiv.style.height = `${columns * 50 + 20}px`;
  document.getElementById('app').append(boardDiv);

  for (let r = 0; r < rows; r++) {
    let row = [];
    for (let c = 0; c < columns; c++) {
      const boardCell = document.createElement('div');
      boardCell.id = `${r}-${c}`;
      boardCell.classList.add('board-cell');
      boardDiv.append(boardCell);
      row.push(boardCell);
    }
    boardArray.push(row);
  }
  return boardArray;
};
