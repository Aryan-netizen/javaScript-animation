var int = gsap.timeline();

int.from("nav h1",{
    y:-50,
    opacity:0,
    delay:0.4,
    duration:0.5,
    stagger:0.2,
})

int.from(".hero h1",{
    x:-50,
    opacity:0,
    duration:1,
    stagger:0.1
})

int.from(".hero img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:1,
    stagger:0.5
})