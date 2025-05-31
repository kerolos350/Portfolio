document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function() {
            gsap.registerPlugin(ScrollTrigger);

            const skill = document.getElementsByClassName("skill");
            for (let i = 0; i < skill.length; i++) {
                skill[i].style.opacity = 0;
            }

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

                gsap.from("#about h2", {
                    scrollTrigger: {
                        trigger: "#about",
                        start: "top 70%",
                        toggleActions: "play none none reverse"
                    },
                    duration: 1,
                    y: 150,
                    opacity: 0,
                    ease: "power4.out",
                    delay: 0.5
                })

                gsap.from("#about .about-label", {
                    scrollTrigger: {
                        trigger: "#about .about-label",
                        start: "top 70%",
                        toggleActions: "play none none reverse"
                    },
                    duration: 1,
                    x: -100,
                    opacity: 0,
                    ease: "power4.out",
                    delay: 0.7
                });

                gsap.from("#about .about-content", {
                    scrollTrigger: {
                        trigger: "#about .about-content",
                        start: "top 70%",
                        toggleActions: "play none none reverse"
                    },
                    duration: 1,
                    x: 100,
                    opacity: 0,
                    ease: "power4.out",
                    delay: 0.7
                });

                gsap.to(".skill", {
                    scrollTrigger: {
                        trigger: ".skills",
                        start: "top 70%",
                        toggleActions: "play none none reverse"
                    },
                    opacity: 1,
                    rotation: 360,
                    ease: "sine.out",
                    stagger: 0.2,
                    delay: 0,
                    duration: 1,
                    force3D: true
                });
            }
    }, 5000);
});