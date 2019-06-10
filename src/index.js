import nav from "./nav";
import {
    top,
    bottom
} from "./footer";
import makeButton from "./button";
import {
    red,
    blue,
    makeColorStyle
} from './buttonStyles';

console.log(nav(), top, bottom, makeButton("My First Button!"), makeColorStyle("cyan"));