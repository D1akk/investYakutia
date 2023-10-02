const menuBtn = document.querySelector("#menuBtn");
const linkLang = document.getElementById("linkLang");
const langBtn = document.getElementById("langBtn");
const languageMenu = document.getElementById("languageMenu");
const linkGlasses = document.getElementById("linkGlasses");
const glassesBtn = document.getElementById("glassesBtn");
const linkSearch = document.getElementById("linkSearch");
const searchBtn = document.getElementById("searchBtn");

let time = document.getElementById("current_time");
let point_ = document.getElementById("pointTime");
let timeline = document.querySelector(".timeline");

setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    time.innerHTML = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

    let totalMinutes = hours * 60 + minutes;
    let positionPercentage = (totalMinutes / (24 * 60)) * 100;

    point_.style.left = positionPercentage + "%";
}, 1000);


menuBtn.addEventListener("click", toggleClass);

linkLang.addEventListener("click", function (event) {
  event.preventDefault();
  toggleLanguageMenu();
});

linkGlasses.addEventListener("click", function (event) {
  event.preventDefault();
  toggleImage(glassesBtn, "/images/glasses.svg", "/images/glasses2.svg");

});

linkSearch.addEventListener("click", function (event) {
  event.preventDefault();
  toggleImage(searchBtn, "/images/search.svg", "/images/search2.svg");
});

function toggleClass() {
  menuBtn.classList.toggle("open");
}

function toggleLanguageMenu() {
  const currentSrc = langBtn.getAttribute("src");
  if (
    currentSrc === "/images/language.svg" &&
    languageMenu.style.display === "none"
  ) {
    languageMenu.style.display = "block";
    langBtn.setAttribute("src", "/images/language2.svg");
  } else {
    langBtn.setAttribute("src", "/images/language.svg");
    languageMenu.style.display = "none";
  }
}

function toggleImage(element, src1, src2) {
  const currentSrc = element.getAttribute("src");
  if (currentSrc === src1) {
    element.setAttribute("src", src2);
  } else {
    element.setAttribute("src", src1);
  }
}


const point = document.querySelector("#orbit");
const spans = point.querySelectorAll("span");
const img = point.querySelector(".orbit__center");

spans.forEach((span, index) => {
  span.addEventListener("click", () => {
    const clickedIndex = Array.from(spans).indexOf(span);
    const numSpans = spans.length;

    const newOrder = [];
    for (let i = 0; i < numSpans; i++) {
      const newIndex = (i + clickedIndex) % numSpans;
      newOrder.push(spans[newIndex]);
    }

    point.innerHTML = ""; 
    newOrder.forEach((newSpan) => {
      point.appendChild(newSpan); 
    });

    point.appendChild(img);
  });
});