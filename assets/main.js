const subjects = [
    { name: "Industrial Automation", page: "subject1.html" },
    { name: "Web Development", page: "subject2.html" },
    { name: "Programming Languages", page: "subject3.html" },
    { name: "Database", page: "subject4.html" },
    { name: "Data Science", page: "subject5.html" }
];

const subjectsContainer = document.getElementById('subjectsContainer');

subjects.forEach((subject, index) => {
    const subjectTag = document.createElement('div');
    subjectTag.className = 'subjectTag';
    subjectTag.onclick = () => redirect(index + 1);

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

function redirect(page) {
    const subject = subjects[page - 1];
    if (subject)
        window.location.href = `pages/${subject.page}`;
    else
        console.error('Invalid page:', page);
}