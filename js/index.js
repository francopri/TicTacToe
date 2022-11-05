const ticTac = new TicTac();

let nextPlayer = 'X';

function reset() {

    ticTac.reset();

    document.querySelectorAll('.item').forEach(posDiv => {
        posDiv.innerText = '';
        posDiv.removeEventListener('click', posClick);
        posDiv.addEventListener('click', posClick);
    });
    
    nextPlayer = 'X';

}


function posClick(event) {

    let playerWon = false;

    event.currentTarget.innerText = nextPlayer;

    if (nextPlayer === 'X') {

        nextPlayer = 'O';

        playerWon = ticTac.setPosition(1, +event.currentTarget.dataset.pos);

    } else {

        nextPlayer = 'X';

        playerWon = ticTac.setPosition(2, +event.currentTarget.dataset.pos);

    }

    if (playerWon) {
        showWinner();
    }

    event.currentTarget.removeEventListener('click', posClick);

    event.currentTarget.classList.remove('item-pointer');

}

function showWinner(){

    document.querySelectorAll('.item').forEach(posDiv => {
        posDiv.removeEventListener('click', posClick);
    });

}

// for (let i = 1; i <= 9; i++) {
//     const posDiv = document.getElementById(`pos${i}`);
//     posDiv.addEventListener('click', posClick);
// }


//A linha abaixo faz rigorosamente a mesma coisa do FOR acima.

document.querySelectorAll('.item').forEach(posDiv => {
    posDiv.addEventListener('click', posClick);
});

document.getElementById('btnReset').addEventListener('click', reset);

