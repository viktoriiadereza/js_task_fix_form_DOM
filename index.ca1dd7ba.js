document.querySelectorAll(".field").forEach(function(e){var t,r,l,a=e.querySelector("input");a&&(t=document.createElement("label"),l=(r=a.name.replace(/([A-Z])/g," $1").trim()).charAt(0).toUpperCase()+r.slice(1),t.classList.add("field-label"),t.textContent=l,t.setAttribute("for",a.id),a.placeholder=l,a.parentNode.insertBefore(t,a))});
//# sourceMappingURL=index.ca1dd7ba.js.map
