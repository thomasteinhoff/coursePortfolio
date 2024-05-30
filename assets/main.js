// Declaração das variáveis globais
const subjects = [
    { name: "Industrial Automation", page: "subject1.html" },
    { name: "Web Development", page: "subject2.html" },
    { name: "Programming Languages", page: "subject3.html" },
    { name: "Database", page: "subject4.html" },
    { name: "Data Science", page: "subject5.html" }
];

let subjectHeader;
let subjectsContainer;
let contentContainer;

// Função para carregar o conteúdo da matéria selecionada
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

// Função para atualizar o cabeçalho da matéria
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

// Função para voltar para a página inicial
function returnHome() {
    try {
        contentContainer.innerHTML = '';
        updateSubjectHeader('Home');
    } catch (error) {
        console.error('An error occurred while returning home:', error);
    }
}

// Evento DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    // Inicialização das variáveis
    subjectHeader = document.getElementById('subjectHeader');
    subjectsContainer = document.getElementById('subjectsContainer');
    contentContainer = document.getElementById('content');

    // Loop para criar os cards das matérias
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
});