class TicTac {

    constructor() {

        this.player1Positions = [];
        this.player2Positions = [];

    }

    setPosition(player, position) {

        let playerWon = false;

        if (
            this.player1Positions.find(p => p === position) ||
            this.player2Positions.find(p => p === position)
        ) {
            throw new Error("Pode não!");
        }

        if (player === 1) {

            this.player1Positions.push(position);

            playerWon = this.checkWinner(this.player1Positions);

        } else {

            this.player2Positions.push(position);

            playerWon = this.checkWinner(this.player2Positions);

        }

        return playerWon;

    }

    checkWinner(positions) {

        const score = positions.reduce((p, c) => p * (c + 1), 1);

        return (
            score === 24 ||
            score === 80 ||
            score === 120 ||
            score === 162 ||
            score === 192 ||
            score === 210 ||
            score === 280 ||
            score === 720
        );

    }

    reset() {
        this.player1Positions = [];
        this.player2Positions = [];
    }
    
}