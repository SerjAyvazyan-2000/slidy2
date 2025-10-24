 const macy = Macy({
    container: '.reviews-items',
    margin: 12,
    columns: 3,
    breakAt: {
      1100: 2,
      768: 1,
    }
  });



const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  const headerTop = document.querySelector("header");
  if (window.scrollY > 0) {
    headerTop.classList.add("moved");
  } else {
    headerTop.classList.remove("moved");
  }
});


const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("theme");

const currentTheme = savedTheme || (prefersDark ? "dark" : "light");
document.documentElement.setAttribute("data-theme", currentTheme);
updateImages(currentTheme);

function updateImages(theme) {
  const images = document.querySelectorAll("img[data-light][data-dark]");
  images.forEach(img => {
    img.src = theme === "dark" ? img.dataset.dark : img.dataset.light;
  });
}

const lightBtn = document.querySelector(".icon-light-switch");
const darkBtn = document.querySelector(".icon-dark-switch");

darkBtn.addEventListener("click", () => {
  document.documentElement.setAttribute("data-theme", "dark");
  updateImages("dark");
});

lightBtn.addEventListener("click", () => {
  document.documentElement.setAttribute("data-theme", "light");
  updateImages("light");
});













function toggleActiveState(item) {
    const allItems = document.querySelectorAll('.often-asks-item');

    allItems.forEach(otherItem => {
        if (otherItem !== item) {
            otherItem.classList.remove('active');
        }
    });

    item.classList.toggle('active');
}

document.querySelectorAll('.often-asks-item').forEach(item => {
    item.addEventListener('click', () => toggleActiveState(item));
    const icon = item.querySelector('.asks-list-icon');
    icon.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleActiveState(item);
    });
});


document.addEventListener("DOMContentLoaded", () => {
  const animatedItems = document.querySelectorAll(
    ".fade-left, .fade-right, .fade-top, .fade-bottom"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
        
        }
      });
    },
    {
      threshold: 0.15, 
    }
  );

  animatedItems.forEach((item) => observer.observe(item));
});