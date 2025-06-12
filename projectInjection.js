// Load projects.json and inject cards
fetch('./public/projects/projects.json')
  .then(response => response.json())
  .then(projects => {
    const grid = document.getElementById('projects-grid');

    projects.forEach(project => {
      const card = document.createElement('div');
      card.className = 'border border-white rounded-2xl shadow-md p-6 flex flex-col justify-between transition-transform hover:scale-[1.02]';

      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="rounded-xl mb-4 object-cover h-40 w-full">
        <div>
          <h2 class="text-2xl font-semibold mb-2">${project.title}</h2>
          <p class="text-gray-300 text-sm mb-4">${project.description}</p>
        </div>
        <div class="mt-auto">
          <a href="${project.codelink}" target="_blank"
            class="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-700 text-white rounded-xl hover:from-purple-600 hover:to-indigo-700 transition-all text-sm font-medium shadow-lg">
            <i class="fas fa-code"></i>
            View Code
          </a>
        </div>
      `;

      grid.appendChild(card);
    });
  })
  .catch(error => console.error('Error loading project data:', error));
