const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
    distance:"50px",
    origin:"bottom",
    duration: 1000,
};
// header container
scrollRevealOption().reveal(".header_content h1",{
   ... scrollRevealOption,
});

scrollRevealOption().reveal(".header_content .section_descripiton",{
    ...scrollRevealOption,
    delay: 500,
});

scrollRevealOption().reveal(".header_content.header_btn",{
    ...scrollRevealOption,
    delay: 1000,
});

// about container
scrollRevealOption().reveal(".about_content.section_header",{
    ... scrollRevealOption,
 });
 
 scrollRevealOption().reveal(".about_content .section_description",{
     ...scrollRevealOption,
     delay: 500,
 });
 
 scrollRevealOption().reveal(".header_content.about_btn",{
     ...scrollRevealOption,
     delay: 1000,
 });

 // product container
 scrollReveal().reveal(".product_card",{
    ...scrollRevealOption,
    interval:500,
 })