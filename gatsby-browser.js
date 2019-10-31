// const scrollToElement = require("scroll-to-element");

// exports.onRouteUpdate = ({ location }) => {
//   checkHash(location);
// };

// const checkHash = location => {
//   let { hash } = location;
//   if (hash) {
//     scrollToElement(hash, {
//       offset: -95,
//       duration: 1000
//     });
//   }
// };

// if (typeof window !== "undefined") {
//   // Make scroll behavior of internal links smooth
//   require("smooth-scroll")('a[href*="#"]');
// }

/* global window, document */
// const scrollTo = id => () => {
//   const el = document.querySelector(id);
//   if (el) return window.scrollTo(0, el.offsetTop - 20);
//   return false;
// };

// export const onRouteUpdate = ({ location: { hash } }) => {
//   console.log(location);
//   if (hash) {
//     window.setTimeout(scrollTo(hash), 10);
//   }
// };
