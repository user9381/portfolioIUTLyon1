AOS.init();

gsap.utils.toArray(".scroll-item").forEach(function (elem) {
  var color = elem.getAttribute('data-color');

  ScrollTrigger.create({
    scroller: ".scroll-container",
    trigger: elem,
    start: 'top 5%',
    end: 'bottom 5%',
    markers: false,
    onEnter: () => gsap.to('section', {
      backgroundColor: color,
      duration: 1.4
    }),
    onLeave: () => gsap.to('section', {
      backgroundColor: '#fef9ef',
      duration: 1.4
    }),
    onLeaveBack: () => gsap.to('section', {
      backgroundColor: '#fef9ef',
      duration: 1.4
    }),
    onEnterBack: () => gsap.to('section', {
      backgroundColor: color,
      duration: 1.4
    }),
  });
});