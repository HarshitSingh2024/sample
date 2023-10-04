var circle = document.querySelector("#circle");
var frames = document.querySelectorAll(".frame");

frames.forEach(frame => {
    frame.addEventListener("mousemove", function (dets) {
        gsap.to(circle, {
            scale: 6
        })

        gsap.to(frame.children, {
            color: "white",
            dutarion: .4,
            y: "-5vw"
        })
    })
    frame.addEventListener("mouseleave", function (dets) {
        gsap.to(circle, {
            scale: 1
        })

        gsap.to(frame.children, {
            color: "black",
            dutarion: .4,
            y: 0
        })
    })
})

window.addEventListener("mousemove", function (dets) {
    gsap.to(circle, {
        x: dets.clientX,
        y: dets.clientY,
        dutarion: .3,
        ease: Expo
    })
})

