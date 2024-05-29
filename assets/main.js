document.addEventListener("DOMContentLoaded", () => {
    const subjects = [
        { name: "Industrial Automation", content: "content/subject1.html" },
        { name: "Web Development", content: "content/subject2.html" },
        { name: "Programming Languages", content: "content/subject3.html" },
        { name: "Database", content: "content/subject4.html" },
        { name: "Data Science", content: "content/subject5.html" }
    ];

    let currentIndex = 0;
    const contentDiv = document.getElementById('content');
    const initialCardsContainer = document.getElementById('initialCardsContainer');

    function loadContent(index) {
        fetch(subjects[index].content)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                contentDiv.innerHTML = data;
                initialCardsContainer.style.display = 'none';
            })
            .catch(error => console.error('Error loading content:', error));
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

    // Load initial content
    loadContent(currentIndex);
});
