// Function to find student by roll number
function findStudentByRollNumber(rollNumber) {
    return fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const student = data['student-data'].find(student => student.id === rollNumber);
            return student;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Function to handle the button click event
function showStudentData() {
    const rollNumber = document.querySelector('#rollNumberInput').value;
    findStudentByRollNumber(parseInt(rollNumber))
        .then(studentData => {
            const studentDataContainer = document.querySelector('#studentDataContainer');
            if (studentData) {
                studentDataContainer.innerHTML = `
                    <h2>${studentData['full-name']}</h2>
                    <p><strong>Father's Name:</strong> ${studentData['father-name']}</p>
                    <p><strong>Maths:</strong> ${studentData['maths']}</p>
                    <p><strong>Physics:</strong> ${studentData['physics']}</p>
                    <p><strong>English:</strong> ${studentData['english']}</p>
                    <p><strong>Computer Science:</strong> ${studentData['computer-science']}</p>
                    <p><strong>Geography:</strong> ${studentData['geography']}</p>
                    <img src="${studentData['imageurl']}" alt="${studentData['full-name']}">
                `;
            } else {
                studentDataContainer.innerHTML = "<p>Student data not found!</p>";
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Attach event listener to the button
document.querySelector('#showStudentDataBtn').addEventListener('click', showStudentData);
