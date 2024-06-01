const locomotiveScroll = new LocomotiveScroll({
    smooth: true,
});
// Shery.mouseFollower();
Shery.makeMagnet(".magnet");

var cursor = document.querySelector("#cursor");
var main = document.querySelector("#main");

main.addEventListener('mousemove', function (e) {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 1.5,
        ease: "back.out"
    })
})

let timeout;

main.addEventListener('mousemove', () => {
    clearTimeout(timeout);
    gsap.to(cursor, {
        scale:1,
        duration: 1.5,
        ease:"back.out"
    })
    timeout = setTimeout(() => {
        gsap.to(cursor, {
            scale:1.5,
            duration: 1.5,
            ease:"back.out"
        })
    }, 200); 
});



// script.js

// document.addEventListener('mousemove', (e) => {
//     // Get the width and height of the window
//     const width = window.innerWidth;
//     const height = window.innerHeight;

//     // Calculate the position of the mouse in percentage
//     const mouseX = e.clientX / width;
//     const mouseY = e.clientY / height;

//     // GSAP animation for each layer
//     gsap.to('.images img', {
//         duration: 0.5,
//         x: (mouseX - 0.5) * 100,
//         y: (mouseY - 0.5) * 100,
//         ease: 'power2.out'
//     });
// });

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



Shery.imageEffect(".formula-bharat-page .right-part" , {
    style:3 , 
    debug:true,
})


gsap.to(".descriptions", {
    scrollTrigger: {
      trigger: ".models",
      pin: true,
      start: "top top",
      end: "bottom bottom",
      endTrigger: ".last",
      scrub: 1,
    },
    y: "-250%",
  });

let sections = document.querySelectorAll(".descriptions");
Shery.imageEffect(".images", {
  style: 4,
  config: { onMouse: { value: 1 },zindex:{value:100} },
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});


Shery.hoverWithMediaCircle(".hvr" ,{
    images:["./assets/_logo_mask.png" , "./assets/shireto logo_mask.png" , "./assets/project bharat 2025 Designs/side-expo.png"],
    duration:2,
})


Shery.textAnimate(".titleani"  , {
    style:1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,

})



const items = [

    {
        img:"./assets/Sponsor and Featured Logo/Sponsor/Altair.jpg",
        parallaxSpeed:0.04,
    },
    {
        img:"./assets/Sponsor and Featured Logo/Sponsor/Doro.jpg",
        parallaxSpeed:0.04,
    },
    {
        img:"./assets/Sponsor and Featured Logo/Sponsor/GolchhaGroup.jpg",
        parallaxSpeed:0.04,
    },
    {
        img:"./assets/Sponsor and Featured Logo/Sponsor/Neoteric.jpg",
        parallaxSpeed:0.04,
    },
    {
        img:"./assets/Sponsor and Featured Logo/Sponsor/SolidWorks.jpg",
        parallaxSpeed:0.04,
    }

]


const sponsor = document.querySelector(".sponsor-list");
const itemPositions = [
    {top:"15%" , left:"10%"},
    {top:"20%" , left:"70%"},
    {top:"5%" , left:"40%"},
    {top:"65%" , left:"55%"},
    {top:"65%" , left:"25%"},
];

items.forEach((itemData , index) => {
    const item = document.createElement("div"); 
    item.classList.add("item") ;
    
    const position = itemPositions[index] ;
    item.style.top = position.top ; 
    item.style.left = position.left ; 

    const img = document.createElement("img") ; 
    img.src = itemData.img; 
    item.appendChild(img) ;

    sponsor.appendChild(item) ; 
})

const sponsor_display = document.querySelector(".sponsors"); 
sponsor_display.addEventListener("mousemove" , (e) => {
    sponsor.querySelectorAll(".item").forEach((item , index) => {
        const animationFactor = items[index].parallaxSpeed; 
        const deltaX = (e.clientX - window.innerWidth) * animationFactor; 
        const deltaY = (e.clientY - window.innerHeight) * animationFactor; 

        gsap.to(item , {
            x:deltaX , 
            y:deltaY , 
            duration:0.75
        })
    })
})