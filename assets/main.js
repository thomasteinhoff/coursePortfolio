document.addEventListener("DOMContentLoaded", () => {
    const subjects = [
        { name: "Industrial Automation", content: "content/subject1.html" },
        { name: "Web Development", content: "content/subject2.html" },
        { name: "Programming Languages", content: "content/subject3.html" },
        { name: "Database", content: "content/subject4.html" },
        { name: "Data Science", content: "content/subject5.html" }
    ];

    let currentIndex = null; // Initially no subject is selected
    const contentDiv = document.getElementById('content');
    const pageIndexDiv = document.querySelector('.pageIndex');
    const initialCardsContainer = document.getElementById('initialCardsContainer');

    function loadContent(index) {
        if (index === null) {
            // If no subject is selected, show the initial cards container
            initialCardsContainer.style.display = 'block';
            // Load the content of the page
            contentDiv.innerHTML = '<h2>Bem-vindo à Página Inicial!</h2>'; // Adjust as needed
            pageIndexDiv.innerHTML = '<i class="fa-solid fa-house fa-lg" style="color: #ff6000;"></i><h2>Home</h2>';
        } else {
            // If a subject is selected, hide the initial cards container
            initialCardsContainer.style.display = 'none';
            // Load the content of the selected subject
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

    // Load initial content (initial cards container)
    loadContent(currentIndex);
});