import nav from "./nav";
import {
    footer
} from "./footer";
import makeButton from "./button";
import {
    red,
    blue,
    makeColorStyle
} from './buttonStyles';
import css from "./footer.css";

console.log(css);
const button = makeButton("Wow, a button!");

button.style = makeColorStyle("cyan")
document.body.appendChild(button);
document.body.appendChild(footer);



// console.log(nav(), top, bottom, makeButton("My First Button!"), makeColorStyle("cyan"));