  function showPage(id) {
    const pages = document.querySelectorAll(".page");

    pages.forEach((p) => {
      p.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
  }

const toggle = document.getElementById("themeToggle");

  toggle.addEventListener("change", function () {
    document.body.classList.toggle("dark");
});
