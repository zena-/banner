 function removeElement(element) 
 {
  if (typeof(element) === "string") 
  {
    element = document.querySelector(element);
  }
  return function() 
  {
    element.parentNode.removeChild(element);
  }
}

var zentime = gsap.timeline({smoothChildTiming:true});
zentime.from('.frame1', {opacity:0, duration:1.5, y:-500, ease: "power1.inOut",delay:0.3})
	    .fromTo(".frame2C", {opacity:0,scale:2}, {opacity:1, duration:1, ease:"slow(0.3, 0.4, false)", scale:1, delay: .5})
	    .call(removeElement(".frame1"))
	    .call(removeElement(".frame2C"))
	    .fromTo(".frame3C",{opacity:0,scale:2}, {opacity:1, ease:"power2.out", scale:0.75},'-=0.1')
	    .fromTo(".frame3B", {opacity:0, scale:2}, {opacity:1, duration: 1, ease: "steps(7)", y: -10, scale:1})
	    .from('.stag', {opacity:0, stagger:0.3, duration:1, x:500, ease: "bounce.in"})
	    .call(removeElement(".frame3B"))
	    .fromTo('.stag', {x:0}, {opacity:0, stagger:0.2, duration:1, x:-500, ease: "expo.inOut"})
	    .call(removeElement(".frame3C"))
	    .from('.frame4super', {opacity:0, duration:1, x:-500, ease: "power4.out"})
	    .from('.frame4fresh', {opacity:0, duration:1, x:500, ease: "power4.out"},'-=1')
	    .from(".frame4C", {opacity:0, duration:1, y:500, ease: "circ.out"})
	    .from('.frame4CTA', {opacity:0, duration:1, ease:"none"})
		.duration(7)
