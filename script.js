const locomotiveScroll = new LocomotiveScroll({
    smooth: true,
});

var cursor = document.querySelector("#cursor");
var main = document.querySelector("#main");

main.addEventListener('mousemove', function (e) {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 2,
        ease: "back.out"
    })
})

let timeout;

main.addEventListener('mousemove', () => {
    clearTimeout(timeout);
    gsap.to(cursor, {
        scale:1,
        duration: 2,
        ease:"back.out"
    })
    timeout = setTimeout(() => {
        gsap.to(cursor, {
            scale:1.5,
            duration: 2,
            ease:"back.out"
        })
    }, 200); 
});



// script.js

document.addEventListener('mousemove', (e) => {
    // Get the width and height of the window
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Calculate the position of the mouse in percentage
    const mouseX = e.clientX / width;
    const mouseY = e.clientY / height;

    // GSAP animation for each layer
    gsap.to('.images img', {
        duration: 0.5,
        x: (mouseX - 0.5) * 100,
        y: (mouseY - 0.5) * 100,
        ease: 'power2.out'
    });
});
