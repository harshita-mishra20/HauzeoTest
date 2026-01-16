document.querySelectorAll(".property-card").forEach((card) => {
  const track = card.querySelector(".track");
  const images = track.children;
  const dotsWrap = card.querySelector(".dots");
  const prev = card.querySelector(".prev");
  const next = card.querySelector(".next");
  const like = card.querySelector(".like");

  let index = 0;

  // dots
  [...images].forEach((_, i) => {
    const dot = document.createElement("span");
    if (i === 0) dot.classList.add("active");
    dotsWrap.appendChild(dot);
  });

  const dots = dotsWrap.children;

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
    [...dots].forEach((d) => d.classList.remove("active"));
    dots[index].classList.add("active");
  }

  next.onclick = () => {
    index = (index + 1) % images.length;
    update();
  };

  prev.onclick = () => {
    index = (index - 1 + images.length) % images.length;
    update();
  };

  // like toggle
  like.onclick = () => {
    like.classList.toggle("fa-solid");
    like.classList.toggle("fa-regular");
    like.style.color = like.classList.contains("fa-solid") ? "#ff4d4f" : "#fff";
  };
});
const dropdowns = document.querySelectorAll(".hasDropdown");

dropdowns.forEach((dropdown) => {
  const toggle = dropdown.querySelector(".filterToggle");
  const label = dropdown.querySelector(".btnTxt");
  const options = dropdown.querySelectorAll(".option");

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();

    // close others
    dropdowns.forEach((d) => d !== dropdown && d.classList.remove("open"));

    dropdown.classList.toggle("open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      label.textContent = option.textContent;
      dropdown.classList.remove("open");
    });
  });
});

document.addEventListener("click", () => {
  dropdowns.forEach((d) => d.classList.remove("open"));
});
const menuBtn = document.querySelector(".menuBtn");
const closeBtn = document.querySelector(".closeMenu");
const overlay = document.querySelector(".mobileNavOverlay");

menuBtn?.addEventListener("click", () => {
  document.body.classList.add("mobileMenuOpen");
});

closeBtn?.addEventListener("click", () => {
  document.body.classList.remove("mobileMenuOpen");
});

overlay?.addEventListener("click", () => {
  document.body.classList.remove("mobileMenuOpen");
});
