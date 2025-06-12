// Load projects.json and inject cards
fetch('projects/projects.json')
  .then(response => response.json())
  .then(projects => {
    const grid = document.getElementById('projects-grid');

    projects.forEach(project => {
      const card = document.createElement('div');
      card.className = 'bg-zinc-800 border border-gray-700 rounded-2xl shadow-md p-6 flex flex-col justify-between transition-transform hover:scale-[1.02]';

      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="rounded-xl mb-4 object-cover h-40 w-full">
        <div>
          <h2 class="text-2xl font-semibold mb-2">${project.title}</h2>
          <p class="text-gray-300 text-sm mb-4">${project.description}</p>
        </div>
        <div class="mt-auto">
          <a href="${project.codeLink}" target="_blank" class="inline-block mt-4 px-4 py-2 bg-white text-black rounded-xl hover:bg-gray-300 transition-colors text-sm font-medium">
            View Code
          </a>
        </div>
      `;

      grid.appendChild(card);
    });
  })
  .catch(error => console.error('Error loading project data:', error));
