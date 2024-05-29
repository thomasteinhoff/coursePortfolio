document.addEventListener("DOMContentLoaded", () => {
    const subjects = [
        { name: "Industrial Automation", content: "content/subject1.html" },
        { name: "Web Development", content: "content/subject2.html" },
        { name: "Programming Languages", content: "content/subject3.html" },
        { name: "Database", content: "content/subject4.html" },
        { name: "Data Science", content: "content/subject5.html" }
    ];

    let currentIndex = null; // Inicialmente não há matéria selecionada
    const contentDiv = document.getElementById('content');
    const pageIndexDiv = document.querySelector('.pageIndex');

    function loadContent(index) {
        if (index === null) {
            // Se não houver matéria selecionada, exibe o conteúdo da página inicial
            contentDiv.innerHTML = '<h2>Bem-vindo à Página Inicial!</h2>'; // Adapte conforme necessário
            pageIndexDiv.innerHTML = '<i class="fa-solid fa-house fa-lg" style="color: #ff6000;"></i><h2>Home</h2>';
        } else {
            // Se houver uma matéria selecionada, carrega o conteúdo da matéria
            fetch(subjects[index].content)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(data => {
                    contentDiv.innerHTML = data;
                    pageIndexDiv.innerHTML = `<a href="../index.html" style="text-decoration: none;">
                                                  <div class="pageIndex" onclick="returnHome()">
                                                      <i class="fa-solid fa-chevron-left fa-lg" style="color: #ff6000;"></i>
                                                      <h2>${subjects[index].name}</h2>
                                                  </div>
                                              </a>`;
                })
                .catch(error => console.error('Error loading content:', error));
        }
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % subjects.length;
        loadContent(currentIndex);
    }

    function showPrevious() {
        currentIndex = (currentIndex - 1 + subjects.length) % subjects.length;
        loadContent(currentIndex);
    }

    const subjectsContainer = document.getElementById('subjectsContainer');
    subjects.forEach((subject, index) => {
        const subjectTag = document.createElement('div');
        subjectTag.className = 'subjectTag';
        subjectTag.textContent = subject.name;
        subjectTag.onclick = () => loadContent(index);
        subjectsContainer.appendChild(subjectTag);
    });

    loadContent(currentIndex);
});
