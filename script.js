var tl = gsap.timeline()

gsap.from("#nav h3",{
    y:-50,
    opacity:0,
    delay:0.4,
    duratiion:0.8,
    stagger:0.3
})
tl.from("#main h1", {
    duration: 1,
    x: -500,
    opacity:0,
    stagger:0.4,
})
tl.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    duratiion:0.5,
    stagger:0.5,
})