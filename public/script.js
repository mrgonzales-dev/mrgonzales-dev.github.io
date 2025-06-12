
// ====== UNDERLINE NAV ITEM ========
const navbarLinks = document.querySelectorAll('#navbar ul li a');
const sections = Array.from(navbarLinks).map(link => {
  const id = link.getAttribute('href').substring(1);
  return document.getElementById(id);
});

function onScroll() {
  const scrollPos = window.scrollY + window.innerHeight / 2; // middle of viewport

  let currentSectionIndex = sections.findIndex(section => {
    if (!section) return false;
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    return scrollPos >= top && scrollPos < bottom;
  });

  if (currentSectionIndex === -1) currentSectionIndex = 0;

  navbarLinks.forEach((link, idx) => {
    if (idx === currentSectionIndex) {
      link.classList.add('text-black', 'font-semibold');
      link.classList.remove('text-gray-500');
    } else {
      link.classList.remove('text-black', 'font-semibold');
      link.classList.add('text-gray-500');
    }
  });
}
window.addEventListener('scroll', onScroll);
onScroll();


// Automate adding text for navbar banner line
  const container = document.getElementById('scrolling-text');
  const text = `<span class="mx-10 text-gray-400">&lt;<span class="text-gray-400">mr.gonzales-dev</span> /&gt;</span>`;
  const repeatCount = 15; // how many times you want to repeat

  container.innerHTML = text.repeat(repeatCount);

// =================================
