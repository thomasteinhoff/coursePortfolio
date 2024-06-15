document.addEventListener("DOMContentLoaded", () => {
    // Subjects name and file titles
    const subjects = [
        { name: "Industrial Automation",    page: "subject1.html" },
        { name: "Web Development",          page: "subject2.html" },
        { name: "Programming Languages",    page: "subject3.html" },
        { name: "Database",                 page: "subject4.html" },
        { name: "Data Science",             page: "subject5.html" }
    ];

    const homeHeader = document.getElementById('homeHeader');
    const subjectHeader = document.getElementById('subjectHeader');
    const subjectsContainer = document.getElementById('subjectsContainer');
    const contentContainer = document.getElementById('content');

    subjects.forEach((subject) => {
        // Creating each subject div with it`s class
        const subjectTag = document.createElement('div');
        subjectTag.className = 'subjectTag';
        subjectTag.onclick = () => loadContent(subject);

        // Pulls the name from the matrix
        const subjectName = document.createElement('h2');
        subjectName.style.color = '#FFE6C7';
        subjectName.textContent = subject.name;

        const icon = document.createElement('i');
        icon.className = 'fa-solid fa-chevron-right fa-lg';
        icon.style.color = '#fa6000';

        // Display in the html
        subjectTag.appendChild(subjectName);
        subjectTag.appendChild(icon);
        subjectsContainer.appendChild(subjectTag);
    });

    // Loads the html from the subject html pulling the file title from the matrix
    function loadContent(selectedSubject) {
        fetch(`content/${selectedSubject.page}`)
            // Handling possible errors
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            // Switch the html from the tags to the content
            .then(data => {
                contentContainer.innerHTML = data;          // Append the div
                subjectsContainer.style.display = 'none';   // Hides the tags
                homeHeader.style.display = 'none';          // Hides the sub header
                updateSubjectHeader(selectedSubject.name);  // Updates the div
            })
            .catch(error => console.error('Error loading content:', error));
    }

    // Updates the sub header, common in every subject
    function updateSubjectHeader(subjectName) {
        subjectHeader.innerHTML = `
            <div class="pageIndex" onclick="returnHome()" style="cursor: pointer">
                <i class="fa-solid fa-chevron-left fa-lg" style="color: #ff6000;"></i>
                <h2>${subjectName}</h2>
            </div>
        `;
        subjectHeader.style.display = 'block';
    }
});

// Returns the html to the original state
function returnHome() {
    const contentContainer = document.getElementById('content');
    if (contentContainer) {
        contentContainer.innerHTML = '';
        subjectsContainer.style.display = 'block';
        homeHeader.style.display = 'flex';          // Securing an correct display of the header
        subjectHeader.innerHTML = '';
        subjectHeader.style.display = 'none';
    } else
        console.error("Elemento 'content' não encontrado.");
}

// Calls the home when the site is loaded
returnHome();