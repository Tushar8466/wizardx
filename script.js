// Initialize GSAP Timeline for Section 1
const tl = gsap.timeline();

tl.from("nav", {
    y: -100,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
});

tl.from(".nav-logo, .part2 h4, nav button", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: "power3.out"
});

tl.from(".center-part1 h1", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
});

tl.from(".center-part1 p", {
    x: -50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
});

tl.from(".center-part1 button", {
    opacity: 0,
    duration: 0.6,
    ease: "power3.out"
});

tl.from(".center-part2 img", {
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

tl.from(".section1bottom img", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: "power3.out"
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".services h3, .services p", {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".section2",
        start: "top 80%",
        end: "top 50%",
        scrub: 2
    }
});

// Animate line 1 cards
gsap.from(".line1.left", {
    x: -300,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".line1",
        start: "top 80%",
        end: "top 50%",
        scrub: 2
    }
});

gsap.from(".line1.right", {
    x: 300,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".line1",
        start: "top 80%",
        end: "top 50%",
        scrub: 2
    }
});

// Animate line 2 cards
gsap.from(".line2.left", {
    x: -300,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".line2",
        start: "top 80%",
        end: "top 50%",
        scrub: 2
    }
});

gsap.from(".line2.right", {
    x: -300,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".line2",
        start: "top 80%",
        end: "top 50%",
        scrub: 2
    }
});

// Section 3 Animation
gsap.from(".cta", {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".section3",
        start: "top 80%",
        end: "top 50%",
        scrub: 2
    }
});

// Section 4 Animation
gsap.from(".case-study-header h3, .case-study-header p", {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".section4",
        start: "top 80%",
        end: "top 60%",
        scrub: 2
    }
});

gsap.from(".case-studies", {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".section4",
        start: "top 60%",
        end: "top 30%",
        scrub: 2
    }
});

