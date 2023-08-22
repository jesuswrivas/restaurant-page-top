


const DisplayContactPage = (() => {



    const clearContent = () =>{
        const mainContent = document.querySelector("#main-content-container");
        mainContent.innerText = ''
    }


    const createContactContainer = () => {
        const mainContent = document.querySelector("#main-content-container");
        let contact = document.createElement("div");
        contact.setAttribute("class", "main__contact");
        mainContent.appendChild(contact)
        return contact
    }

  
    const createContactTitle = (contact) => {
        let contactTitle = document.createElement("div");
        contactTitle.setAttribute("class", "main__contact__title");
        let contactTitleText = document.createElement("h1")
        contactTitleText.innerText = "Contact Us"
    
        contactTitle.appendChild(contactTitleText)
        contact.appendChild(contactTitle)
    };


const createContactText = (contact) => {
    const contactTextDiv = document.createElement("div");
    contactTextDiv.setAttribute("class", "main__contact__text");

    const paragraphs = [
        "We are very happy to hear what you have to say!",
        "Please write us an email to: thefancy_burger@burger.com",
        "Give us a call to to: (555)- 321 123 222"
    ];

    paragraphs.forEach((paragraphText) => {
        const paragraph = document.createElement("p");
        paragraph.innerText = paragraphText;
        contactTextDiv.appendChild(paragraph);
    });

    contact.appendChild(contactTextDiv);
};



    const init = () => {
        clearContent()
        const contact = createContactContainer();
        createContactTitle(contact);
        createContactText(contact);
    };
    
    return {init}
    
})();

export {DisplayContactPage};
