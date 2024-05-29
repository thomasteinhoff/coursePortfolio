const subjects = [
    { name: "Industrial Automation", content: "content/subject1.html" },
    { name: "Web Development", content: "content/subject2.html" },
    { name: "Programming Languages", content: "content/subject3.html" },
    { name: "Database", content: "content/subject4.html" },
    { name: "Data Science", content: "content/subject5.html" }
];

document.addEventListener("DOMContentLoaded", () => {
    const subjectsContainer = document.getElementById('subjectsContainer');

    subjects.forEach((subject) => {
        const subjectTag = document.createElement('div');
        subjectTag.className = 'subjectTag';
        subjectTag.onclick = () => loadContent(subject.content);

        const subjectName = document.createElement('h2');
        subjectName.style.color = '#FFE6C7';
        subjectName.textContent = subject.name;

        const icon = document.createElement('i');
        icon.className = 'fa-solid fa-chevron-right fa-lg';
        icon.style.color = '#fa6000';

        subjectTag.appendChild(subjectName);
        subjectTag.appendChild(icon);
        subjectsContainer.appendChild(subjectTag);
    });

    function loadContent(contentUrl) {
        fetch(contentUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                document.getElementById('content').innerHTML = data;
            })
            .catch(error => console.error('Error loading content:', error));
    }
});