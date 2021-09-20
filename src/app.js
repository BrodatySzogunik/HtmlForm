
import "./style.css"
import {cookies} from "./cookies"

(cookies())

const menuButton = document.querySelector(".menu-btn");
const menuContent = document.getElementById("menu-content")
let menuOpen = false
menuButton.addEventListener("click",()=>{
    if(!menuOpen){
        menuButton.classList.add('open')
        menuContent.classList.add('open')
        menuOpen=true
    }else{
        menuButton.classList.remove('open')
        menuContent.classList.remove('open')
        menuOpen=false
    }
})
