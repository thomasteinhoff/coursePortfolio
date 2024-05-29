const subjects = [
    { name: "Industrial Automation", page: "subject1.html" },
    { name: "Web Development", page: "subject2.html" },
    { name: "Programming Languages", page: "subject3.html" },
    { name: "Database", page: "subject4.html" },
    { name: "Data Science", page: "subject5.html" }
];

const subjectsContainer = document.getElementById('subjectsContainer');
const contentContainer = document.getElementById('content');

subjects.forEach((subject, index) => {
    const subjectTag = document.createElement('div');
    subjectTag.className = 'subjectTag';
    subjectTag.onclick = () => loadContent(subject.page);

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

function loadContent(page) {
    fetch(`content/${page}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            contentContainer.innerHTML = data;
        })
        .catch(error => console.error('Error loading content:', error));
}
