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

                gsap.from(".hero-text", {
                    duration: 1,
                    x: -100,
                    opacity: 0,
                    ease: "power4.out",
                    delay: 0.5
                });

                gsap.from(".hero-image", {
                    duration: 1,
                    x: 100,
                    opacity: 0,
                    ease: "power4.out",
                    delay: 0.5
                });
            }
    }, 5000);
});