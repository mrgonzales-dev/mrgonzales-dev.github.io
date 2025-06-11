

// ====== NAVBAR TRANSITION =======
const navbar = document.getElementById('navbar');
const homeSection = document.getElementById('home');
const logo = document.getElementById('navbar-logo');

function updateNavbar() {
	const homeRect = homeSection.getBoundingClientRect();
	const isMobile = window.innerWidth < 640; // tailwind sm breakpoint

	if (isMobile) {
		// Mobile: always full width
		navbar.classList.remove('w-[30%]', 'bg-white/30', 'text-black', 'bg-zinc/30', 'text-white');
		navbar.classList.add('w-full');

		// Optional: style adjustment based on scroll position (optional)
		if (homeRect.bottom > window.innerHeight / 2) {
			navbar.classList.add('bg-white/30', 'text-black');
			logo.src = 'asset/SVG/mrg-logo-asset.svg';
			document.querySelectorAll('#navbar a').forEach(link => {
				link.classList.remove('text-white');
				link.classList.add('text-black');
			});
		} else {
			navbar.classList.add('bg-zinc/30', 'text-white');
			logo.src = 'asset/SVG/mrg-logo-asset-white.svg';
			document.querySelectorAll('#navbar a').forEach(link => {
				link.classList.remove('text-black');
				link.classList.add('text-white');
			});
		}
	} else {
		// Desktop: shrink or expand based on scroll
		if (homeRect.bottom > window.innerHeight / 2) {
			navbar.classList.remove('w-full', 'bg-zinc/30', 'text-white');
			navbar.classList.add('w-[30%]', 'bg-white/30', 'text-black');

			logo.src = 'asset/SVG/mrg-logo-asset.svg';
			document.querySelectorAll('#navbar a').forEach(link => {
				link.classList.remove('text-white');
				link.classList.add('text-black');
			});
		} else {
			navbar.classList.remove('w-[30%]', 'bg-white/30', 'text-black');
			navbar.classList.add('w-full', 'bg-zinc/30', 'text-white');

			logo.src = 'asset/SVG/mrg-logo-asset-white.svg';
			document.querySelectorAll('#navbar a').forEach(link => {
				link.classList.remove('text-black');
				link.classList.add('text-white');
			});
		}
	}
}

window.addEventListener('scroll', updateNavbar);
window.addEventListener('load', updateNavbar);
// =================================


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
      link.classList.add('text-black', 'font-semibold', 'underline');
      link.classList.remove('text-gray-700');
    } else {
      link.classList.remove('text-black', 'font-semibold', 'underline');
      link.classList.add('text-gray-700');
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
