

// ====== NAVBAR TRANSITION =======
		const navbar = document.getElementById('navbar');
		const homeSection = document.getElementById('home');

		function updateNavbar() {
			const homeRect = homeSection.getBoundingClientRect();

			if (homeRect.bottom > window.innerHeight / 2) {
				navbar.classList.remove('w-full');
				navbar.classList.add('w-1/2');
			} else {
				navbar.classList.remove('w-1/2');
				navbar.classList.add('w-full');
			}
		}

		window.addEventListener('scroll', updateNavbar);
		window.addEventListener('load', updateNavbar);
// =================================

