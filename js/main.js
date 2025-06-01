document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function() {
            gsap.registerPlugin(ScrollTrigger);

            const skill = document.getElementsByClassName("skill");
            for (let i = 0; i < skill.length; i++) {
                skill[i].style.opacity = 0;
            }

            const serviceCards = document.querySelectorAll("#services .service-card");
            const aboutLabels = document.querySelectorAll("#about .about-label");
            const projectLabels = document.querySelectorAll("#projects .raw h3");
            const projects = document.querySelectorAll("#projects .projects .project");

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

                aboutLabels.forEach((label, index) => {
                    gsap.from(label, {
                        scrollTrigger: {
                            trigger: label,
                            start: "top 70%",
                            toggleActions: "play none none reverse"
                        },
                        duration: 1,
                        x: -100,
                        opacity: 0,
                        ease: "power4.out",
                        delay: 0.5 + (index * 0.2)
                    });
                })

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

                gsap.from("#services h2, #services .catch-phrase", {
                    scrollTrigger: {
                        trigger: "#services",
                        start: "top 70%",
                        toggleActions: "play none none reverse"
                    },
                    duration: 1,
                    y: 150,
                    opacity: 0,
                    ease: "power4.out",
                    delay: 0.5
                })

                serviceCards.forEach((card, index) => {
                    gsap.from(card, {
                        scrollTrigger: {
                            trigger: card,
                            start: "top 70%",
                            toggleActions: "play none none reverse"
                        },
                        duration: 1,
                        x: -150,
                        opacity: 0,
                        ease: "power4.out",
                        delay: 0.5 + (index * 0.2),
                        stagger: 0.2
                    });
                });

                gsap.from("#projects h2, #projects .catch-phrase", {
                    scrollTrigger: {
                        trigger: "#projects",
                        start: "top 70%",
                        toggleActions: "play none none reverse"
                    },
                    duration: 1,
                    y: 150,
                    opacity: 0,
                    ease: "power4.out",
                    delay: 0.5
                })

                projectLabels.forEach((label, index) => {
                    gsap.from(label, {
                        scrollTrigger: {
                            trigger: label,
                            start: "top 90%",
                            toggleActions: "play none none reverse"
                        },
                        duration: 1,
                        y: 100,
                        opacity: 0,
                        ease: "power4.out",
                        delay: 0.5 + (index * 0.2)
                    });
                });

                projects.forEach((project, index) => {
                    gsap.from(project, {
                        scrollTrigger: {
                            trigger: project,
                            start: "top 90%",
                            toggleActions: "play none none reverse"
                        },
                        duration: 1,
                        x: -100,
                        opacity: 0,
                        ease: "power4.out",
                        delay: 0.5 + (index * 0.2),
                        stagger: 0.2
                    });

                    project.addEventListener("mouseenter", function() {
                        gsap.to(project, {
                            scale: 1.05,
                            ease: "power2.out",
                            duration: 0.3
                        });
                    })
                    project.addEventListener("mouseleave", function() {
                        gsap.to(project, {
                            scale: 1,
                            ease: "power2.out",
                            duration: 0.3
                        });
                    });
                    
                });
                
            }
    }, 5000);
});