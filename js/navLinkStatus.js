addEventListener("scroll", ()=>{
    const scrollTop = document.documentElement.scrollTop;
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
            navLinks.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${section.id}`) {
                    link.classList.add("active");
                }
            });
        }
    });
}
);