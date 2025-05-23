const elmHeight = selector => {
  return document.querySelector(selector).scrollHeight;
};

Scrollbar.use(OverscrollPlugin);

//wrapper
const wrapper = document.querySelector(".wrapper");

Scrollbar.use(OverscrollPlugin);

//initialize Scrollbar
const scrollbar = Scrollbar.init(wrapper, {
  plugins: {
    overscroll: {
      effect: "bounce",
      damping: 0.2,
      maxOverscroll: 150,
    },
    disableScroll: {
      direction: "x",
    },
  },
  damping: 0.07,
  thumbMinSize: 20,
  continuousScrolling: true,
  renderByPixels: false,
});

scrollbar.track.xAxis.element.remove();

wrapper.addEventListener("scroll", () => {
  console.log(window.scrollY);
});

//connect wrapper to scrollTrigger to detect scroll
ScrollTrigger.scrollerProxy(wrapper, {
  scrollTop(value) {
    if (arguments.length) {
      scrollbar.scrollTop = value; //set
    }
    return scrollbar.scrollTop; //get
  },
  getBoundingClientRect() {
    return wrapper.getBoundingClientRect();
  },
});

scrollbar.addListener(ScrollTrigger.update);

ScrollTrigger.addEventListener("refresh", () => scrollbar.update());

//first titles timeline
const titleTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".clean",
    scroller: wrapper,
    start: "top 90%",
    toggleActions: "play none none reverse",
  },
});

titleTimeline.from(
  ".clean",
  {
    y: elmHeight(".clean") + 10,
    duration: 0.3,
  },
  "firstTitle"
);
titleTimeline.from(
  ".conscious",
  {
    y: elmHeight(".conscious") + 10,
    duration: 0.3,
  },
  "firstTitle+=0.1"
);
titleTimeline.from(
  ".performance",
  {
    y: elmHeight(".performance") + 10,
    duration: 0.3,
  },
  "firstTitle+=0.2"
);

//observer for :after skincare title
const skincareObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("after:w-0");
        entry.target.classList.add("after:w-full");
      } else {
        entry.target.classList.remove("after:w-full");
        entry.target.classList.add("after:w-0");
      }
    });
  },
  { rootMargin: "0% 0% -20% 0%" }
);

skincareObserver.observe(document.querySelector(".skincare-title"));

const innerBox = document.querySelector(".inner-div");

gsap.to(innerBox, {
  backgroundPositionY: "220%",
  scrollTrigger: {
    scroller: wrapper,
    trigger: innerBox,
    scrub: 0.8,
    start: "top 85%",
    end: "bottom 85%",
  },
});

//reproach box
gsap.fromTo(
  ".reproach",
  { translate: "0 110%" },
  {
    translate: "0 -110%",
    scrollTrigger: {
      scroller: wrapper,
      trigger: ".inner-div",
      scrub: 0.8,
      start: "top 60%",
    },
  }
);

//redical box
gsap.fromTo(
  ".radical",
  { translate: "0 66%" },
  {
    translate: "0 -66%",
    scrollTrigger: {
      scroller: wrapper,
      trigger: ".inner-div",
      scrub: 0.8,
      start: "top 60%",
    },
  }
);

//leaf-image :

gsap.fromTo(
  ".leaf-img",
  { translate: "0 110%" },
  {
    translate: "0 -44%",
    scrollTrigger: {
      scroller: wrapper,
      trigger: ".inner-div",
      scrub: 0.8,
      start: "top 60%",
    },
  }
);

//responsible box

gsap.fromTo(
  ".responsible",
  { translate: "0 66%" },
  {
    translate: "0 -66%",
    scrollTrigger: {
      scroller: wrapper,
      trigger: ".orange-box",
      scrub: 0.8,
      start: "top 90%",
    },
  }
);

//multi tasking box

gsap.fromTo(
  ".multi-tasking",
  { translate: "0 110%" },
  {
    translate: "0 -66%",
    scrollTrigger: {
      scroller: wrapper,
      trigger: ".orange-box",
      scrub: 0.8,
      start: "top 90%",
    },
  }
);

//orange img

gsap.fromTo(
  ".orange-img",
  { translate: "0 110%" },
  {
    translate: "0 0%",
    scrollTrigger: {
      scroller: wrapper,
      trigger: ".orange-box",
      scrub: 0.8,
      start: "top 90%",
    },
  }
);

const pureBrilliance = document.querySelector("#pure-brilliance");

gsap.from(".explore1", {
  translate: "0 -16%",
  scrollTrigger: {
    scroller: wrapper,
    trigger: pureBrilliance,
    start: "top bottom",
    end: "bottom top",
    scrub: 0.8,
  },
});

const varnayaBox = document.querySelector(".varnaya");

gsap.from(".explore2", {
  translate: "0 -16%",
  scrollTrigger: {
    scroller: wrapper,
    trigger: varnayaBox,
    start: "top bottom",
    end: "bottom top",
    scrub: 0.8,
  },
});

const brillianceSlides = document.querySelectorAll(
  ".right-swiper .swiper-slide"
);

brillianceSlides.forEach(slide => {
  let defaultImage = slide.querySelector(".default-image");
  slide.addEventListener("mouseover", () => {
    defaultImage.classList.add("hide");
  });
  slide.addEventListener("mouseout", () => {
    defaultImage.classList.remove("hide");
  });
});

const brillianceSwiper = new Swiper(".right-swiper", {
  slidesPerView: 1.8,
  spaceBetween: 10,
});

//varnaya
const varnayaSlides = document.querySelectorAll(".left-swiper .swiper-slide");
varnayaSlides.forEach(slide => {
  let defaultImage = slide.querySelector(".default-image");
  slide.addEventListener("mouseover", () => {
    defaultImage.classList.add("hide");
  });
  slide.addEventListener("mouseout", () => {
    defaultImage.classList.remove("hide");
  });
});

const varnayaSwiper = new Swiper(".left-swiper", {
  slidesPerView: 1.8,
  spaceBetween: 10,
});
varnayaSwiper.changeLanguageDirection("rtl"); //changing swiper direction

document.querySelectorAll(".left-swiper p").forEach(para => {
  para.style.direction = "ltr";
});

//explore title
const exploreTimeline = gsap.timeline({
  scrollTrigger: {
    scroller: wrapper,
    trigger: ".explore",
    start: "top 90%",
    toggleActions: "play none none reverse",
  },
});

exploreTimeline.from(
  ".explore",
  {
    y: elmHeight(".explore") + 10,
    duration: 0.5,
  },
  "showexplore"
);
exploreTimeline.from(
  ".pure-potency",
  {
    y: elmHeight(".pure-potency") + 10,
    duration: 0.3,
  },
  "showexplore+=0.2"
);

//brilliance title
const brillianceTimeline = gsap.timeline({
  scrollTrigger: {
    scroller: wrapper,
    trigger: ".pure-title",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});
brillianceTimeline.from(
  ".pure-title span",
  {
    y: elmHeight(".pure-title span") + 10,
    duration: 0.3,
  },
  "pure"
);
brillianceTimeline.from(
  ".brilliance-title",
  {
    y: elmHeight(".brilliance-title") + 10,
    duration: 0.3,
  },
  "pure+=0.1"
);

//varanya title
const varanyaTimeline = gsap.timeline({
  scrollTrigger: {
    scroller: wrapper,
    trigger: ".varanya-title",
    start: "top 85%",
    toggleActions: "play none none reverse",
  },
});
varanyaTimeline.from(
  ".varanya-title",
  {
    y: elmHeight(".varanya-title") + 10,
    duration: 0.3,
  },
  "varanya"
);
varanyaTimeline.from(
  ".blends-title",
  {
    y: elmHeight(".blends-title") + 10,
    duration: 0.3,
  },
  "varanya+=0.1"
);

//matic
gsap.fromTo(
  "#matic",
  { translate: "0 42%" },
  {
    translate: "0 -44%",
    scrollTrigger: {
      scroller: wrapper,
      trigger: "#matic",
      start: "top bottom",
      scrub: 0.8,
    },
  }
);

// radical title
const radicalTitle = document.querySelector(".radical-title");

const radicalTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".radical-title",
    scroller: wrapper,
    start: "top 90%",
    toggleActions: "play none none reverse",
  },
});

radicalTimeline.from(
  ".radical-title",
  {
    opacity: 0,
    y: elmHeight(".radical-title") + 10,
    duration: 0.5,
  },
  "radical"
);
radicalTimeline.from(
  ".transparency-title",
  {
    opacity: 0,
    y: elmHeight(".transparency-title") + 10,
    duration: 0.5,
  },
  "radical+=0.1"
);

// hide nothing timeline
const hideNothingTimeline = gsap.timeline({
  scrollTrigger: {
    scroller: wrapper,
    trigger: ".hide-title",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});
hideNothingTimeline.from(
  ".hide-title",
  {
    opacity: 0,
    x: "-100%",
    duration: 1,
  },
  "hide"
);
hideNothingTimeline.from(
  ".nothing-title",
  {
    opacity: 0,
    x: "100%",
    duration: 1,
  },
  "hide"
);

// offer img
gsap.fromTo(
  "img.offer-img",
  { translate: "0 -15%" },
  {
    translate: "0 0%",
    scrollTrigger: {
      scroller: wrapper,
      trigger: ".exciting-offer",
      start: "top center",
      end: "bottom top",
      scrub: 0.8,
    },
  }
);

// exciting timeline

const offersTimeline = gsap.timeline({
  scrollTrigger: {
    scroller: wrapper,
    trigger: ".exciting-title",
    start: "top 90%",
    toggleActions: "play none none reverse",
  },
});
offersTimeline.from(
  ".exciting-title",
  {
    opacity: 0,
    y: elmHeight(".exciting-title") + 10,
    duration: 0.3,
  },
  "exciting"
);
offersTimeline.from(
  ".offers-title",
  {
    opacity: 0,
    y: elmHeight(".offers-title") + 10,
    duration: 0.3,
  },
  "exciting+=0.1"
);
offersTimeline.from(
  ".awaits-title",
  {
    opacity: 0,
    y: elmHeight(".awaits-title") + 10,
    duration: 0.3,
  },
  "exciting+=0.1"
);

const cleanJournalTimeline = gsap.timeline({
  scrollTrigger: {
    scroller: wrapper,
    trigger: "#clean-title",
    start: "top 90%",
    toggleActions: "play none none reverse",
  },
});

cleanJournalTimeline.from(
  "#clean-title",
  {
    y: elmHeight("#clean-title") + 10,
    duration: 0.3,
  },
  "clean-journal"
);

cleanJournalTimeline.from(
  "#journal-title",
  {
    y: elmHeight("#journal-title") + 10,
    duration: 0.3,
  },
  "clean-journal+=0.1"
);

//connect us
gsap.fromTo(
  ".connect-first",
  { y: "44%" },
  {
    y: "-44%",
    scrollTrigger: {
      scroller: wrapper,
      trigger: ".connect-first",
      start: "top bottom",
      end: "bottom top",
      scrub: 0.8,
    },
  }
);

//together
gsap.fromTo(
  ".together",
  { y: "66%" },
  {
    y: "-66%",
    scrollTrigger: {
      scroller: wrapper,
      trigger: ".together",
      start: "top bottom",
      end: "bottom -20%",
      scrub: 0.8,
    },
  }
);

//footer bg image
gsap.to(".footer-bg-image", {
  backgroundPositionY: "0%",
  scrollTrigger: {
    scroller: wrapper,
    trigger: ".footer-bg-image",
    start: "top bottom",
    end: "bottom top",
    scrub: 0.8,
  },
});

//hear more from us

gsap.fromTo(
  "#hear-us",
  { translate: "0 66%" },
  {
    translate: "0 0%",
    scrollTrigger: {
      scroller: wrapper,
      trigger: "#hear-us",
      start: "top bottom",
      scrub: 0.8,
    },
  }
);

const headerTitlesTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-line",
    scroller: wrapper,
    toggleActions: "play reset play none",
  },
});

headerTitlesTimeline.from(
  ".first-line",
  {
    y: elmHeight(".first-line") + 10,
    duration: 1,
  },
  "headerTitles"
);

headerTitlesTimeline.from(
  ".second-line",
  {
    y: elmHeight(".second-line") + 10,
    duration: 1,
  },
  "headerTitles+=0.3"
);
