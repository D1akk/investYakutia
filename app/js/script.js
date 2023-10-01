

// const menuBtn = document.querySelector("#menuBtn");
// const linkLang = document.getElementById("linkLang");
// const langBtn = document.getElementById("langBtn");
// const languageMenu = document.getElementById("languageMenu");
// const linkGlasses = document.getElementById("linkGlasses");
// const glassesBtn = document.getElementById("glassesBtn");
// const linkSearch = document.getElementById("linkSearch");
// const searchBtn = document.getElementById("searchBtn");

// menuBtn.addEventListener("click", toggleClass);

// linkLang.addEventListener("click", function (event) {
//   event.preventDefault();
//   toggleLanguageMenu();
// });

// linkGlasses.addEventListener("click", function (event) {
//   event.preventDefault();
//   toggleImage(glassesBtn, "/images/glasses.svg", "/images/glasses2.svg");
// });

// linkSearch.addEventListener("click", function (event) {
//   event.preventDefault();
//   toggleImage(searchBtn, "/images/search.svg", "/images/search2.svg");
// });

// function toggleClass() {
//   menuBtn.classList.toggle("open");
// }

// function toggleLanguageMenu() {
//   const currentSrc = langBtn.getAttribute("src");
//   if (
//     currentSrc === "/images/language.svg" &&
//     languageMenu.style.display === "none"
//   ) {
//     languageMenu.style.display = "block";
//     langBtn.setAttribute("src", "/images/language2.svg");
//   } else {
//     langBtn.setAttribute("src", "/images/language.svg");
//     languageMenu.style.display = "none";
//   }
// }

// function toggleImage(element, src1, src2) {
//   const currentSrc = element.getAttribute("src");
//   if (currentSrc === src1) {
//     element.setAttribute("src", src2);
//   } else {
//     element.setAttribute("src", src1);
//   }
// }

// // const menuBtn = document.querySelector("#menuBtn");
// // menuBtn.addEventListener("click", function () {
// //   if (menuBtn.classList.contains("open")) {
// //     menuBtn.classList.remove("open");
// //   } else {
// //     menuBtn.classList.add("open");
// //   }
// // });

// // const linkLang = document.getElementById("linkLang");
// // const langBtn = document.getElementById("langBtn");
// // const languageMenu = document.getElementById("languageMenu");
// // const languageLinks = languageMenu.querySelectorAll("a");

// // linkLang.addEventListener("click", function (event) {
// //   event.preventDefault();

// //   const currentSrc = langBtn.getAttribute("src");
// //   if (
// //     (currentSrc === "/images/language.svg") &
// //     (languageMenu.style.display === "none")
// //   ) {
// //     languageMenu.style.display = "block";
// //     langBtn.setAttribute("src", "/images/language2.svg");
// //   } else {
// //     langBtn.setAttribute("src", "/images/language.svg");
// //     languageMenu.style.display = "none";
// //   }
// // });

// // const linkGlasses = document.getElementById("linkGlasses");
// // const glassesBtn = document.getElementById("glassesBtn");
// // linkGlasses.addEventListener("click", function (event) {
// //   event.preventDefault();
// //   const currentSrc = glassesBtn.getAttribute("src");
// //   if (currentSrc === "/images/glasses.svg") {
// //     glassesBtn.setAttribute("src", "/images/glasses2.svg");
// //   } else {
// //     glassesBtn.setAttribute("src", "/images/glasses.svg");
// //   }
// // });

// // const linkSearch = document.getElementById("linkSearch");
// // const searchBtn = document.getElementById("searchBtn");
// // linkSearch.addEventListener("click", function (event) {
// //   event.preventDefault();
// //   const currentSrc = searchBtn.getAttribute("src");
// //   if (currentSrc === "/images/search.svg") {
// //     searchBtn.setAttribute("src", "/images/search2.svg");
// //   } else {
// //     searchBtn.setAttribute("src", "/images/search.svg");
// //   }
// // });
