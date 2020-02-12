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
zentime.from('.frame1', {opacity:0, duration:1, y:-500, ease: "power2.inOut",delay:0.3})
	    .fromTo(".frame2Lo", {opacity:0,scale:2}, {opacity:1, duration:1, ease:"sine.inOut", scale:1})
	    .fromTo(".frame2C", {opacity:0,scale:2}, {opacity:1, duration:1, ease:"sine.inOut", scale:1})
	    .from(".white", {opacity:0, ease:"power1.out"})
	    .call(removeElement(".frame2Lo"))
	    .call(removeElement(".frame2C"))
	    .from(".frame3C", {opacity:0, ease:"back.out(1.7)"})
	    .fromTo(".frame3B", {opacity:0, scale:2}, {opacity:1, duration: 1, ease: "steps(7)", y: -10, scale:1})
	    .from('.stag', {opacity:0, stagger:0.3, duration:1, x:500, ease: "bounce.in"})
	    .call(removeElement(".frame3B"))
	    .fromTo('.stag', {x:0}, {opacity:0, stagger:0.2, duration:1, x:-500, ease: "expo.inOut"})
	    .call(removeElement(".frame3C"))
	    .from('.frame4super', {opacity:0, duration:1, x:-500, ease: "power4.out"})
	    .from('.frame4fresh', {opacity:0, duration:1, x:500, ease: "power4.out"},'-=1')
	    .from(".frame4C", {opacity:0, duration:1, y:500, ease: "circ.out"})
	    .from('.frame4CTA', {opacity:0, duration:1, ease:"none"})
		.duration(9)

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
 
exports.default = () => 
(
    gulp.src('images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
)