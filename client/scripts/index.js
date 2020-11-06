const timeline = gsap.timeline({ defaults: { ease: "power1.out"} });

timeline.to(".text", { y: "0%", duration: 1.2, stagger: 0.5} );
timeline.to(".slider", { y: '-100%', duration: 2, stagger: 0.1 });
timeline.to(".intro", { y: '-100%', duration: 1}, "-=1.9" );
timeline.to(".Outro", { x: "0%", duration: 0.1} )



setTimeout(function () {
    // after 2 seconds
    window.location = "/mural";
 }, 6000)