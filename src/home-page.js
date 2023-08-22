import Burger from './images/burger_2.png';


const DisplayMainPage = (() => {


    const clearContent = () =>{
        const mainContent = document.querySelector("#main-content-container");
        mainContent.innerText = ''
    }
  
    const createHero = () => {
        const mainContent = document.querySelector("#main-content-container");
        let hero = document.createElement("div");
        hero.setAttribute("class", "hero");
        mainContent.appendChild(hero)
        return hero
    };


    const createHeroTitle = (hero) => {
        let heroTitle = document.createElement("div");
        heroTitle.setAttribute("class", "hero-title");

        let heroTitleH2 = document.createElement("h2");

        heroTitleH2.innerText = "Fancy Burger";
        heroTitle.appendChild(heroTitleH2);

        hero.appendChild(heroTitle);
    };

    const createHeroImage = (hero) => {
        let heroImage = document.createElement("div");
        let heroImageContainer = document.createElement("div");
        heroImageContainer.setAttribute("class", "hero-image-container");

        let myIcon = document.createElement("img");
        myIcon.src = Burger;
        heroImageContainer.appendChild(myIcon);

        heroImage.appendChild(heroImageContainer);
        hero.appendChild(heroImage);
    };

    const createHeroText = (hero) => {
        let heroText = document.createElement("div");
        heroText.setAttribute("class", "hero-text");
        let heroTextSlogan = document.createElement("h5");
        heroTextSlogan.innerText = "Burgers Crafted with Passion and Perfection";
        heroText.appendChild(heroTextSlogan);

        hero.appendChild(heroText);
    };


    const init = () => {
        clearContent()
        const hero = createHero();
        createHeroTitle(hero);
        createHeroImage(hero);
        createHeroText(hero);
    };
    
    return {init}
    
})();

export { DisplayMainPage};


