import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Inspiration");
    }

    async getHtml() {
        return `
        
   
          <h3>
            Need inspiration?
          </h3>
          <p></p>
          <h5>Get a quote by clicking the button below</h5>
          <p></p>
          <button class="button-primary" onClick="getQuote()" id="get_quote">Inspiration</button>
     
        <div id="quote" class="row quote"></div>
        <div id="author" class ="row quote"></div>
      </div>
    
 `;
    }
}