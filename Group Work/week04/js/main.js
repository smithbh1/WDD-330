const board = document.querySelector('.board');
      const divBoard = document.querySelector('.divBoard');
      const resetButton = document.getElementById('reset');
      const player1 = 'X';
      const player2 = 'O';
      let player = player1;
      function addPiece(e) {
        console.log(e.target);
        e.target.innerHTML = player;
        if (player === player1) player = player2;
        else player = player1;
      }

function clearBoard(){

    document.querySelectorAll('td').innerHTML = '';

}
// Need an event listener for onClick for the pieces to actually add.

board.addEventListener('click', addPiece);
resetButton.addEventListener('click', clearBoard);