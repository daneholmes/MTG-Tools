document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".mtg-tools-container").forEach((e=>{const t=e.querySelector(".mtg-tools-image-column .mtg-tools-image");let a=!1,o=null;const r=e=>{const t=e.parentNode.querySelector(".mtg-tools-gradient-overlay");t&&t.remove()},n=e=>{r(e);const t=document.createElement("div");t.className="mtg-tools-gradient-overlay",e.parentNode.style.position="relative",e.parentNode.appendChild(t)};e.querySelectorAll(".mtg-tools-card").forEach((e=>{const c={frontImage:e.getAttribute("data-card-front-image-uri"),backImage:e.getAttribute("data-card-back-image-uri"),name:e.getAttribute("data-card-name")||"Magic: The Gathering Card",scryfallURI:e.querySelector(".mtg-tools-card-name").getAttribute("href"),foil:"Yes"===e.getAttribute("data-card-foil")},l=e.querySelector(".mtg-tools-flip-button button");l&&l.addEventListener("click",(e=>{e.stopPropagation(),a=!a,(e=>{t&&(t.src=a?e.backImage:e.frontImage)})(c)})),e.addEventListener("mouseenter",(()=>{o=c,a=!1,t.src=c.frontImage,c.foil?n(t):r(t)}))})),"Yes"===t.dataset.foil?n(t):r(t),document.addEventListener("mouseleave",(()=>{o&&(t.src=a?o.backImage:o.frontImage)}))}))}));