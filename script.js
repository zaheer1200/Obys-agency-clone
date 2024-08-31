function scroll() {
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

    
}
scroll()

function loader() {
    gsap.from("#loader .line>h1,h2,h4,h5",{ 
        y: 100,
        stagger:.3,
    },"hello")
    gsap.to("#loader",{ 
        delay:1.5,
        
     },"hello1")
    gsap.to("#loader",{ 
        display:"none",
      },"hello2")
    gsap.to("#page1",{ 
        y:0,
      },"hello2")
   
   
   
    grow=0
    setInterval(() => {
    var a=document.querySelector("#loader h4")
    if (grow<101) {
      a.innerHTML=grow++
    }else{
        grow=100
    }
    }, 25)
    
};
loader() 
function cursor(){
    document.addEventListener("mousemove", function(val){
        gsap.to("#cursor", {
            top: val.y,
            left: val.x,
           
        })
    })
};
cursor()
    function play_btn(){
        var btn= document.querySelector("#play-btn")
        var video= document.querySelector("#video");
       video.addEventListener("mousemove",function(dets){
        console.log(dets)
           gsap.to(btn,{
              top:dets.y + 500,
               left:dets.x,
           })
       })
       video.addEventListener("mouseenter",function(dets){
        console.log(dets)
           gsap.to(btn,{
              opacity:1,
              display: "flex",
  
           })
           gsap.to("#cursor",{
              opacity:0,
           })
       })
       video.addEventListener("mouseleave",function(dets){
        console.log(dets)
           gsap.to(btn,{
              opacity:0,
             display: "none",
           })
           gsap.to("#cursor",{
              opacity:1,
           })
       })
       };
       play_btn()
       Shery.makeMagnet("#navright a" /* Element to target.*/, {
      });
       Shery.makeMagnet(".item-heading h3,h6" /* Element to target.*/, {
      });
      function page1(){
        gsap.from("#main-center .line2>h3,h1",{ 
          y:100,
          stagger:.1,
          delay:0.1,
        },"hello2")
      }
      page1()
      function sherryAnimation() {
        Shery.imageEffect(".img3-part", {
          style: 5, //Select Style
          // debug: true, // Debug Panel
          config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8108215110524579},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":2.47,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.46,"range":[0,2]},"discard_threshold":{"value":0.58,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
          gooey: true, // 
        })
        
      }
      sherryAnimation()

      function flag() {
      document.querySelector("#main").addEventListener("mousemove",function(values){
        gsap.to("#flag", {
          x: values.x,
          y: values.y,
        })
      })
      document.querySelector("#hero3").addEventListener("mouseenter",function(){
        gsap.to("#flag",{
          opacity: 1,
        })
      })
      document.querySelector("#hero3").addEventListener("mouseleave",function(){
        gsap.to("#flag",{
          opacity: 0,
        })
      })
    }
flag()