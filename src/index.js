import './styles.css';
import { DisplayMainPage } from './home-page.js'; 
import { DisplayAboutPage } from './about-page.js'; 
import { DisplayContactPage } from './contact-page.js'; 

// DisplayMainPage.init()

const launchPage = (() => {

let homeButton = document.querySelector("#home-button")
homeButton.addEventListener("click", DisplayMainPage.init)


let aboutButton = document.querySelector("#about-button")
aboutButton.addEventListener("click", DisplayAboutPage.init)

let contactButton = document.querySelector("#contact-button")
contactButton.addEventListener("click", DisplayContactPage.init)

DisplayMainPage.init()


})()