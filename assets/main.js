const subjects = [
    { name: "Industrial Automation", page: "subject1.html" },
    { name: "Web Development", page: "subject2.html" },
    { name: "Programming Languages", page: "subject3.html" },
    { name: "Database", page: "subject4.html" },
    { name: "Data Science", page: "subject5.html" }
];

const subjectsContainer = document.getElementById('subjectsContainer');
const contentContainer = document.getElementById('content');
const subjectHeader = document.querySelector('.pageIndex');

subjects.forEach((subject, index) => {
    const subjectTag = document.createElement('div');
    subjectTag.className = 'subjectTag';
    subjectTag.onclick = () => loadContent(subject);

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

function loadContent(selectedSubject) {
    fetch(`content/${selectedSubject.page}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            contentContainer.innerHTML = data;
            updateSubjectHeader(selectedSubject.name);
        })
        .catch(error => console.error('Error loading content:', error));
}

function updateSubjectHeader(subjectName) {
    if (subjectName === "Home") {
        subjectHeader.innerHTML = `
            <i class="fa-solid fa-house fa-lg" style="color: #ff6000;"></i>
            <h2>${subjectName}</h2>
        `;
    } else {
        subjectHeader.innerHTML = `
            <a href="../index.html" style="text-decoration: none;">
                <div class="pageIndex" onclick="returnHome()">
                    <i class="fa-solid fa-chevron-left fa-lg" style="color: #ff6000;"></i>
                    <h2>${subjectName}</h2>
                </div>
            </a>
        `;
    }
}

function returnHome() {
    contentContainer.innerHTML = '';
    updateSubjectHeader('Home');
}