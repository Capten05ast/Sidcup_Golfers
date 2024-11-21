// you wolud need to study a lil bit about gsap after this course





// ********** DESIGNING CURSOR AND ITS LOGIC **********
var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x + 30 + "px"
    crsr.style.top = dets.y + "px"
    // console.log(dets.x);

    blur.style.left = dets.x - 200 + "px"
    blur.style.top = dets.y - 200 + "px"

    // left and top basically refers to the left and top 
    // position of our div tag (we ave index-z above so it can move freely
    // above our webpage without showing any white colured whole width

});





// ********** CURSOR ANIMATION FOR NAVIGATION BAR H4 **********
var h4all = document.querySelectorAll("#nav h4");
console.log(h4all);

h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 4;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E";
    })
})
// this treats h4all as array and elem is like i of for loop 





// ********** NAVIGATION AND MAIN PAGE ANIMATION **********
gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      markers: true,
      start: "top -25%",
      end: "top -70%",
      scrub: 2,
    },
});





// ********** ABOUT US ANIMATION **********
gsap.from("#about-us img, #about-us-in", {
    y:90,
    // about us objects will fly up on y axis

    opacity:0,
    duration:5,
    stagger:1,
    // defines gap between each duration
    // basically stagger dosent brings everything at once

    scrollTrigger: {
        trigger: "#about-us-in",
        scroller: "body",
        // markers: true,

        start: "top 60%",
        end: "top 58%",
        scrub: 2
    }
})





// ********** CARD ANIMATION **********
gsap.from(".card", {
    scale: 0.8,
    opacity:0,
    duration: 1,
    stagger: 0.1,

    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        markers:false,

        start: "top 90%",  // Starts when .card is further down
        end: "top 10%", 
        scrub: 1
    }
});

// in case its not showing effect then just 
// see for start and end position
// scrub makes it fast or slow 





// ********** COLON ANIMATION **********
gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 40%",
        scrub: 4
    }

})
gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 40%",
        scrub: 4
    }

})





gsap.from("#page4 h1", {
    y:50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",

        start: "top 75%",
        end: "top 70%",
        scrub: 3
    }
})





//  ********** HOW SCRUB WORKS **********
// Without scrub: The animation plays independently of the scroll position. 
// For example, it might start when the scroll reaches a specific point and 
// play through at a set duration.

// With scrub: The animation's progress is tied to the scroll position. 
// As the user scrolls down or up, the animation moves forward or backward 
// accordingly, creating a smoother and more interactive experience.