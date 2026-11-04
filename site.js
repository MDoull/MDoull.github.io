// If a linked document isn't in the files/ folder yet, point the link at the old Wix copy.
document.querySelectorAll("a[data-fallback]").forEach(function (a) {
  fetch(a.getAttribute("href"), { method: "HEAD" })
    .then(function (r) { if (!r.ok) a.href = a.dataset.fallback; })
    .catch(function () { a.href = a.dataset.fallback; });
});

// Click a gallery image to view it full size.
(function () {
  var box = document.getElementById("lightbox");
  if (!box) return;
  var big = box.querySelector("img");
  function close() { box.hidden = true; big.src = ""; }
  document.querySelectorAll(".gallery img").forEach(function (img) {
    img.addEventListener("click", function () {
      big.src = img.currentSrc || img.src;
      big.alt = img.alt;
      box.hidden = false;
    });
  });
  box.addEventListener("click", close);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
})();
