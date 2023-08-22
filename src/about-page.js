


const DisplayAboutPage = (() => {



    const clearContent = () =>{
        const mainContent = document.querySelector("#main-content-container");
        mainContent.innerText = ''
    }


    const createAboutContainer = () => {
        const mainContent = document.querySelector("#main-content-container");
        let about = document.createElement("div");
        about.setAttribute("class", "main__about");
        mainContent.appendChild(about)
        return about
    }

  
    const createAboutTitle = (about) => {
        let aboutTitle = document.createElement("div");
        aboutTitle.setAttribute("class", "main__about__title");
        let aboutTitleText = document.createElement("h1")
        aboutTitleText.innerText = "About Us"
    
        aboutTitle.appendChild(aboutTitleText)
        about.appendChild(aboutTitle)
    };


const createAboutText = (about) => {
    const aboutTextDiv = document.createElement("div");
    aboutTextDiv.setAttribute("class", "main__about__text");

    const paragraphs = [
        "Welcome to Fancy Burger, where passion meets perfection! At Fancy Burger, we are dedicated to \
        crafting the most delicious and mouthwatering burgers you've ever tasted. Our commitment to quality, taste, and excellence is unmatched.",
        "Our chefs bring their culinary expertise to create unique and flavorful burger combinations that \
        will satisfy your taste buds and leave you craving for more.",
        "Whether you're a burger enthusiast or a casual diner, Fancy Burger offers a wide variety of options\
         to cater to every palate. From classic favorites to gourmet creations, we have something for everyone.",
        "Come and experience the true essence of burgers at Fancy Burger. Join us on this culinary journey and \
        savor the flavors that will make your dining experience memorable."
    ];

    paragraphs.forEach((paragraphText) => {
        const paragraph = document.createElement("p");
        paragraph.innerText = paragraphText;
        aboutTextDiv.appendChild(paragraph);
    });

    about.appendChild(aboutTextDiv);
};



    const init = () => {
        clearContent()
        const about = createAboutContainer();
        createAboutTitle(about);
        createAboutText(about);
    };
    
    return {init}
    
})();

export {DisplayAboutPage};
