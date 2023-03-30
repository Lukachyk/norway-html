//header-slider
console.log("main");
const slider = tns({
  container: ".header-slider",
  items: 1,
  slideBy: "page",
  autoplay: true,
  controls: false,
  autoplayButtonOutput: false,
});

const sliderPrev = document.querySelector("#sliderPrev");
const sliderNext = document.querySelector("#sliderNext");

sliderPrev.onclick = () => {
  slider.goTo("prev");
};
sliderNext.onclick = () => {
  slider.goTo("next");
};
// Info start

const currentSliderIndexEl = document.querySelector("#sliderCurrent");
const currentTotalEl = document.querySelector("#sliderTotal");

function updateSlideFraction() {
  const sliderInfo = slider.getInfo();
  currentSliderIndexEl.innerText = "0" + (sliderInfo.navCurrentIndex + 1);
  currentTotalEl.innerText = "0" + sliderInfo.pages;
}
updateSlideFraction();

//On move info
slider.events.on("indexChanged", () => {
  updateSlideFraction();
});
