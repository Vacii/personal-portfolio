//navbar shows actual position
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".header-menu nav ul li");
const year = document.getElementById("copyr-name");

// Keeping the year in copyright actual
year.innerHTML = " LUKAS VACLAVEK " + new Date().getFullYear();

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});

//smooth scroll
$("a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800
    );
  }
});

//Change image
function changeImg1() {
  document.getElementById("img").src = "media/rc_yt_miniatura.jpg";
  document.getElementById("link").href =
    "https://www.youtube.com/watch?v=Kv5Ke5DEqvo";
  document.getElementById("link").target = "_blank";
  return false;
}

function changeImg2() {
  document.getElementById("img").src = "media/ifix_construction.jpg";
  document.getElementById("link").href = "https://www.ifixiphone.cz";
  document.getElementById("link").target = "_blank";
  return false;
}

function changeImg3() {
  document.getElementById("img").src = "media/coding.jpg";
  document.getElementById("link").href = "#home";
  document.getElementById("link").target = "_self";
  return false;
}
