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

//nav animation 
gsap.from(".nlink" , {
    stagger:.2,
    y:10 , 
    duration:2, 
    ease: Power3 , 
    opacity:0
})

//image animation 

Shery.imageEffect(".home-page" , {
    style:5,
    config:{"a":{"value":1.6,"range":[0,30]},"b":{"value":-0.92,"range":[-1,1]},"zindex":{"value":"100","range":[-9999999,9999999]},"aspect":{"value":2.0850077279752703},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.5,"range":[1,15]},"durationOut":{"value":0.44,"range":[0.1,5]},"durationIn":{"value":0.47,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.46,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":11}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.46,"range":[0,2]},"noise_scale":{"value":17.56,"range":[0,100]}},
    gooey:true,
})