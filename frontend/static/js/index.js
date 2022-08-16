import Dashboard from "./views/Dashboard.js";
import TicTacToe from "./views/TicTacToe.js";
import Inspiration from "./views/Inspiration.js";

function whyHire() {
    window.alert("Because he is ambitious, creative and reliable ");
}

// client side java side:
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        {path: "/", view: Dashboard },
        {path: "/tictactoe", view: TicTacToe},
        {path: "/inspiration", view: Inspiration}
    ];

    //test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }
    // creating a new instance of the view at the mathc orot
    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();
    //console.log(match.route.view());
};
// navigation through browser history, without reloading content
window.addEventListener("popstate", router);
//does the item have data-link attribute? if yes prevents default behavior
// if so navigate to href --> no loading!
document.addEventListener("DOMContentLoaded", () => {
   document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
   });
   
    router();    
});

