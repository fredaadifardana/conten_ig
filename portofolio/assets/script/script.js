const tog = document.getElementById("toggle");
const icon = document.getElementById("icon_toggle");
const navbar = document.getElementById("navbar");

// remove class when browser size is changed
const body = document.querySelector("body");
body.onresize = function () {
  const wrapp = document.querySelectorAll(".wrapp-wisata");
  let win = window.innerWidth;
  if (win >= 600) {
    icon.classList.remove("active");
    navbar.classList.remove("active");
  }
  if (win > 900) {
    wrapp.forEach(function (dis) {
      dis.classList.remove("disable");
    });
  } else {
    wrapp.forEach(function (dis) {
      dis.classList.add("disable");
    });
  }
};

//click overlay
document.onclick = function (eventClick) {
  if (
    eventClick.target.id !== "navbar" &&
    eventClick.target.id !== "toggle" &&
    eventClick.target.id !== "icon_toggle"
  ) {
    icon.classList.remove("active");
    navbar.classList.remove("active");
  }
};

// scroll to add and remove class bg nav
const nav = document.querySelector("nav");
let width = window.innerWidth;
window.addEventListener("scroll", function () {
  let scrl = window.scrollY;
  let arr = [16, 16, 16, 0];
  if (width > 600) {
    arr[3] = scrl / 150;
    nav.style.backgroundColor = "rgba(" + arr.join(",") + ")";
  } else {
    arr[3] = scrl / 200;
    nav.style.backgroundColor = "rgba(" + arr.join(",") + ")";
  }
});

// click toggle
tog.onclick = function () {
  icon.classList.toggle("active");
  navbar.classList.toggle("active");
  nav.classList.toggle("active");
};

// add active class when browser is scrolled
const link = document.querySelectorAll(".links");
const art = document.querySelectorAll("article");

function activeNav() {
  let len = art.length;
  if (width <= 600) {
    while (--len && window.scrollY + 50 < art[len].offsetTop) {}
    link.forEach(function (ltx) {
      ltx.classList.remove("active");
    });
    link[len].classList.add("active");
  } else {
    while (--len && window.scrollY + 60 < art[len].offsetTop) {}
    link.forEach(function (ltx) {
      ltx.classList.remove("active");
    });
    link[len].classList.add("active");
  }
}

activeNav();
window.addEventListener("scroll", activeNav);

// scroll to add sejarah
let sejarah = document.getElementById("sejarah");
window.addEventListener("scroll", function () {
  let screenSejarah = window.scrollY;
  const contentSejarah = sejarah.getBoundingClientRect().top;
  let h2Sejarah = document.querySelector(".h2-sejarah");
  let p1Sejarah = document.querySelector(".p1-sejarah");
  let imgSejarah = document.querySelector(".sejarah-img");
  if (width > 768) {
    if (contentSejarah + 100 < screenSejarah) {
      h2Sejarah.classList.add("active");
      p1Sejarah.classList.add("active");
      imgSejarah.classList.add("active");
    }
  } else {
    if (contentSejarah - 50 < screenSejarah) {
      imgSejarah.classList.add("active");
    }

    if (contentSejarah + 350 < screenSejarah) {
      h2Sejarah.classList.add("active");
      p1Sejarah.classList.add("active");
    }
  }
});

// scroll to add geografis
let geografis = document.getElementById("geografis");
window.addEventListener("scroll", function () {
  const contentGeografis = geografis.getBoundingClientRect().top;
  let screenGeografis = window.scrollY;
  // console.log("Content = " + contentGeografis);
  // console.log("Screen = " + screenGeografis);
  let h2Geografis = document.querySelector(".h2-geografis");
  let p1Geografis = document.querySelector(".p1-geografis");
  let imgGeografis = document.querySelector(".geografis-img");
  if (width > 768) {
    if (contentGeografis + 700 < screenGeografis) {
      h2Geografis.classList.add("active");
      p1Geografis.classList.add("active");
      imgGeografis.classList.add("active");
    }
  } else {
    if (contentGeografis + 315 < screenGeografis) {
      imgGeografis.classList.add("active");
    }

    if (contentGeografis + 850 < screenGeografis) {
      h2Geografis.classList.add("active");
      p1Geografis.classList.add("active");
    }
  }
});

// scroll to add wisata
let wisata = document.getElementById("wisata");
window.addEventListener("scroll", function () {
  const contentWisata = wisata.getBoundingClientRect().top;
  let screenWisata = window.scrollY;
  // console.log("Content = " + contentWisata);
  // console.log("Screen = " + screenWisata);
  let h2Wisata = document.querySelector(".h2-wisata");
  let containerWisata = document.querySelector(".container-wisata");
  if (width > 768) {
    if (contentWisata + 950 < screenWisata) {
      h2Wisata.classList.add("active");
    }

    if (contentWisata + 1300 < screenWisata) {
      containerWisata.classList.add("active");
    }
  } else {
    if (contentWisata + 790 < screenWisata) {
      h2Wisata.classList.add("active");
    }

    if (contentWisata + 850 < screenWisata) {
      containerWisata.classList.add("active");
    }
  }
});

// scroll to add aside
let aside = document.getElementById("profile");
window.addEventListener("scroll", function () {
  const contentAside = aside.getBoundingClientRect().top;
  let y = contentAside + 1650;
  let screenAside = window.scrollY;
  console.log("Content = " + contentAside);
  console.log("Screen = " + screenAside);
  let h2Aside = document.querySelector(".h2-aside");
  let containerProfile = document.querySelector(".container-profile");
  let figureAside = document.querySelector(".figure-aside");
  let deskripsiAside = document.querySelector(".deskripsi");
  let sosialMedia = document.querySelector(".sosial-media");
  if (width > 768) {
    if (contentAside + 1415 < screenAside) {
      h2Aside.classList.add("active");
    }

    if (contentAside + 1860 < screenAside) {
      figureAside.classList.add("active");
      deskripsiAside.classList.add("active");
      sosialMedia.classList.add("active");
    }
  } else if (width > 600) {
    if (contentAside + 1565 < screenAside) {
      h2Aside.classList.add("active");
    }

    if (contentAside + 1800 < screenAside) {
      figureAside.classList.add("active");
    }

    if (contentAside + 2420 < screenAside) {
      deskripsiAside.classList.add("active");
    }

    if (contentAside + 2620 < screenAside) {
      sosialMedia.classList.add("active");
    }
  } else {
    if (contentAside + 2140 < screenAside) {
      h2Aside.classList.add("active");
    }

    if (contentAside + 2375 < screenAside) {
      figureAside.classList.add("active");
    }

    if (contentAside + 2880 < screenAside) {
      deskripsiAside.classList.add("active");
    }

    if (contentAside + 3080 < screenAside) {
      sosialMedia.classList.add("active");
    }
  }
});
