const lenis = new Lenis({
  duration: 1.1,
  // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

lenis.on("scroll", (e) => {});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
const elem_Container = document.getElementById("elem_Container");
const fixed_video_image = document.getElementById("fixed_video_image");
const Fixed_Image = document.getElementById("Fixed_Image");
const elem = document.querySelectorAll(".elem");
// elem_Container.addEventListener("mouseenter", () => {
//   fixed_video_image.classList.add("show_image_container");
// });
// elem_Container.addEventListener("mouseleave", () => {
//   fixed_video_image.classList.remove("show_image_container");
// });
elem.forEach((eachElement) => {
  eachElement.addEventListener("mouseenter", () => {
    fixed_video_image.classList.add("show_image_container");
    var imgSrc = eachElement.getAttribute("data-url");
    Fixed_Image.setAttribute("src", imgSrc);
  });
  eachElement.addEventListener("mouseleave", () => {
    fixed_video_image.classList.remove("show_image_container");
  });
});

const button_one = document.querySelectorAll(".button-one");
const variable_image = document.getElementById("variable_image");
const variable_text_sec = document.getElementById("variable_text_sec");
button_one.forEach((e) => {
  e.addEventListener("click", () => {
    button_one[0].classList.remove("active-flex");
    button_one[1].classList.remove("active-flex");
    button_one[2].classList.remove("active-flex");
    let imageUrl = e.getAttribute("data-image-url");
    let text = e.getAttribute("data-text");
    e.classList.add("active-flex");
    variable_image.setAttribute("src", imageUrl);
    variable_text_sec.innerHTML = text;
  });
});
var swiper = new Swiper(".first_slider_sec", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
const loader = document.getElementById("loader");
const loader_text = document.getElementById("loader_text");
const main = document.getElementById("main");

setTimeout(() => {
  loader_text.innerHTML = "EXPERIENCES";
}, 1100);
setTimeout(() => {
  loader_text.innerHTML = "CONTENT";
}, 2100);
setTimeout(() => {
  loader.classList.add("remove_loader");
  main.classList.remove("fixed_main");
}, 3100);
