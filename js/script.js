import { animate, scroll } from "motion"

// scroll(animate(".progress", { scaleX: [0, 1] }));

document.querySelectorAll("section").forEach((section) => {
//   const header = section.querySelector("h2");
  scroll(animate(header, { y: [-400, 400] }), {
    target: header
  });
});