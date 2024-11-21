// gsap.to(".fixed-load", {
//   display: "none",
//   stagger: 0.01,
//   delay: 0.1,
// })

// gsap.from(".header", {
//   opacity: 0,
//   y: -20,
//   stagger: 0.01,
//   delay: 0.2,
// })

// gsap.from(".header h1 .main-title", {
//   opacity: 0,
//   y: -20,
//   stagger: 0.01,
// })

// gsap.from(".main-1 .columns", {
//   opacity: 0,
//   stagger: 0.1,
//   y: -100,
//   delay: 0.6,
// })


// gsap.from(".columns-1", {
//   flexGrow: 1,
//   delay: 0.7,
//   // backgroundColor: "black",
//   duration: 2,
//   ease: "power3.out",
// })

// gsap.from(".columns-1 #typingText", {
//   opacity: 0,
//   delay: 0.7,
// })

// gsap.from(".columns-2", {
//   minWidth: '0px',
//   width: 0,
//   opacity: 0,
//   delay: 0.7,
// })

// gsap.from(".columns-2 .input", {
//   opacity: 0,
//   delay: 0.7,
// })

// gsap.from(".columns-2 .input-send", {
//   opacity: 0,
//   delay: 0.7,
// })

let mm = gsap.matchMedia();


gsap.to(".main-1 .columns", {
  x: '-100%',
  scrollTrigger: {
    trigger: ".scroll",
    start: "top 99%",
    end: "top 0%",
    markers: false,
    scrub: 1,
  }
})

gsap.to(".columns-1", {
  width: "0px",
  opacity: 0,
  scrollTrigger: {
    trigger: ".scroll",
    start: "top 99%",
    end: "top 85%",
    markers: false,
    // scrub: 1,
  }
})

gsap.to(".columns-1 h1", {
  display: "none",
  scrollTrigger: {
    trigger: ".scroll",
    start: "top 99%",
    end: "top 89%",
    // markers: true,
    // scrub: 1,
    ease: "power3.out",
  }
})

mm.add("(min-width: 800px)", () => {
  gsap.to(".columns-2", {
    flexGrow: 1,
    backgroundColor: "white",
    scrollTrigger: {
      trigger: ".scroll",
      start: "top 99%",
      end: "top 85%",
      markers: false,
      // scrub: 1,
    }
  })


  gsap.to(".columns-2 .input input", {
    width: "50vw",
    scrollTrigger: {
      trigger: ".scroll",
      start: "top 99%",
      end: "top 85%",
      markers: false,
      // scrub: 1,
    }
  })

  gsap.to(".service-discription", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".scroll",
      start: "top 99%",
      end: "top 45%",
      markers: false,
      scrub: 1,
    }
  })
});



gsap.from(".cards", {
  scale: 0.95,
  scrollTrigger: {
    trigger: ".scroll",
    start: "top 50%",
    end: "top 30%",
    // markers: true,
    scrub: 1,
  }
})

gsap.from(".card-details", {
  opacity: 0.3,
  scrollTrigger: {
    trigger: ".scroll",
    start: "top 50%",
    end: "top 30%",
    scrub: 1,
  }
})


