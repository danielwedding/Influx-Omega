// Imports
import { Router, View } from "@outwalk/iris";
import { PC } from "./pc";
import { Console } from "./console";
import { Mobile } from "./mobile";

// Webpages to be loaded into the router
let menuHTML = [
    "<h2>Choose your console</h2>",
    "<button id='pc'>Computer (PC) </button>",
    "<button id='console'>Console (XBOX | SWITCH | PS' </buttom>",
    "<button id='mobile'> Mobile (Phones, Tablets) </button>"
].join("\n");

let menu = new View(menuHTML);

menu.run = () => {
    document.querySelectorAll("button").forEach(element => {
        element.onclick = () => {
            localStorage.setItem("console", element.id);
            window.location = "./#/game";
        };
    });
};

let gameHTML = [
    "<link rel='stylesheet' href='./styles/global.css'>",
    "<canvas id='canva'></canvas>"
].join("\n");

let game = new View(gameHTML);

let con = null;

game.run = () => {
    let canva = document.getElementById("canva");
    canva.width = window.innerWidth;
    canva.height = window.innerHeight;
    switch (localStorage.getItem("console")) {
        case "pc":
            let pc = new PC();
            con = pc;
            requestAnimationFrame(looper);
            break;

        case "console":
            let console = new Console();
            con = console;
            requestAnimationFrame(looper);
            break;

        case "mobile":
            let mobile = new Mobile();
            con = mobile;
            requestAnimationFrame(looper);
            break;
    }
};

/**
 * Configuration of all the webviews of the website.
 */
const router = new Router({
    "/": menu,
    "/game": game
});

// Starts the router
router.start();

function looper() {
    con.render();
    con.update();
    requestAnimationFrame(looper);
};