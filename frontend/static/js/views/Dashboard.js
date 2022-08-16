import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
        <body>
        <nav>
        
          <div class="navLinks">
            <ul>
              <li><a href="#">you</a></li>
              <li><a href="#">shoud</a></li>
              <li><a href="#">hire</a></li>
              <li><a href="#">paulus</a></li>
              <button type="button" onclick = "whyHire()">why?</button>
            </ul>
          </div>
        </nav>
          
          <!-- Header content with banner image -->
          <div class="row">
            <div class="column1">
              <h1> Welcome to Paulus experimential side</h1>
              <p>please feel free to explore! </p>
              <p>for navigation see tabs on your left hand side </p>
            </div>

          </div>
          
        
       </body>
       </html>
            
        `;
    }
}