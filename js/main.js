document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function() {
            document.getElementById('loader').style.display = 'none';
            document.body.style.overflowY = 'auto';
            
            const motion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

            if (motion === false) {
                gsap.from(".header", {
                    duration: 1,
                    y: -100,
                    ease: "power2.inOut"
                });
            }
    }, 5000);
});