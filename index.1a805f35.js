document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#thumbs"),t=document.querySelector("#largeImg");e.addEventListener("click",function(e){e.preventDefault();var n=e.target;if("IMG"===n.tagName&&"A"===n.parentElement.tagName&&t){var r=n.parentElement.getAttribute("href");t.setAttribute("src",r)}})});
//# sourceMappingURL=index.1a805f35.js.map
