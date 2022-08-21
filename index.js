const hamburgerMenu = document.querySelector("#hamburgerMenu");
let mobileNavElements = document.querySelector("#navComponentsContainer");

let isMobileMenuActive = false;

hamburgerMenu.addEventListener("click", (event) => {

    if( isMobileMenuActive === false )
    { 
        mobileNavElements.style.display = "flex"; 
        mobileNavElements.style.flexFlow = "column wrap";
        hamburgerMenu.classList.remove("fa-bars");
        hamburgerMenu.classList.add("fa-xmark");
        isMobileMenuActive = true;
    }
    else 
    {
        mobileNavElements.style.display = "none";
        hamburgerMenu.classList.remove("fa-xmark");
        hamburgerMenu.classList.add("fa-bars");
        isMobileMenuActive = false;
    }

});