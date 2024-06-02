const locomotiveScroll = new LocomotiveScroll({
    smooth: true,
});
// Shery.mouseFollower();
Shery.makeMagnet(".magnet",{
  mouseFollower: false,
});

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

//nav animation 
gsap.from(".nlink" , {
    stagger:.2,
    y:10 , 
    duration:2, 
    ease: Power3 , 
    opacity:0
})

//image animation 

Shery.imageEffect("#team-desc .team-images" , {
    style:4,
    config:{"a":{"value":2.75,"range":[0,30]},"b":{"value":-0.94,"range":[-1,1]},"zindex":{"value":"10","range":[-9999999,9999999]},"aspect":{"value":1.25099014683153},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.5,"range":[1,15]},"durationOut":{"value":0.44,"range":[0.1,5]},"durationIn":{"value":0.47,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.27,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.61,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":11}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.46,"range":[0,2]},"noise_scale":{"value":17.56,"range":[0,100]}},
    gooey:true, 
})



Shery.imageEffect(".formula-bharat-page .right-part" , {
    style:3 , 
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
    images:["./assets/logo0.png" , "./assets/shireto logo_mask.png" , "./assets/project bharat 2025 Designs/side-expo.png"],
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


const fixedImage = document.querySelector(".featured .fixed-image");

const featuredList = document.querySelector(".featured-list");
featuredList.addEventListener("mouseenter" , () => {
    fixedImage.style.display = "block";
})
featuredList.addEventListener("mouseleave" , () => {
    fixedImage.style.display = "none";
})
var elements = document.querySelectorAll(".elem")

elements.forEach((ele) => {
    const image = ele.getAttribute("data-image"); 
    ele.addEventListener("mouseenter" , () => {
        fixedImage.style.backgroundImage = `url("${image}")`; 
    })
})


var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".achievements",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 0",
        scrub:1,
    }
})

tl.from(".achievements .heading h2" , {
    y:-80 ,
    // duration:1,
    opacity:0
})
tl.from(".aleft" , {
    x:-500,
    duration:3,
    opacity:0,
},"animation")
tl.from(".aright" , {
    x:500,
    duration:3,
    opacity:0,
} ,"animation")

tl.from(".joinus-bnt" , {
    y:200,
    duration:2,
    opacity:0 
})

Shery.imageEffect(".aleft img", {
    style: 4, //Select Style
    config:{"uColor":{"value":false},"uSpeed":{"value":0.6,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.5,"range":[0,5]},"uFrequency":{"value":3.82,"range":[0,10]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":"100","range":[-9999999,9999999]},"aspect":{"value":1.35},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.49,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  });


  Shery.imageEffect(".aright img", {
    style: 4, //Select Style
    config:{"uColor":{"value":false},"uSpeed":{"value":0.6,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.5,"range":[0,5]},"uFrequency":{"value":3.82,"range":[0,10]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":"100","range":[-9999999,9999999]},"aspect":{"value":1.35},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.49,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  });