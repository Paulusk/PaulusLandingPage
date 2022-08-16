import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super(); 
        this.setTitle("TicTacToe");
     
        
    }

    async getHtml() {
        return `

        <body>

        <h3>
        Tic Tac Toe
      </h3>
      <h5>Press the button down to start the game</h5>
        <div class="container">
          <div id="tictactoe"></div>
          <div id="player" align="center">
           
          </div>
          <button class="button-primary" onClick="style.display = 'none', ticTacToe()" >lets go</button>
        </div>

   `;
    }
}