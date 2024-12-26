function handleSubmit(event){
    event.preventDefault();
    const form=event.target;
    const name= document.getElementById('name').value;
    const education= document.getElementById('education').value;
    const email= document.getElementById('email').value;
    const mobileNumber= document.getElementById('mnumber').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const courses =[];
    document.querySelectorAll('input[name="course"]:checked').forEach(checkbox => {
        courses.push(checkbox.value);
    })
    if(!name || !education || !email || !mobileNumber || !gender || courses.length === 0){
        alert('Please fill in all fields.')
        return;
    }
    const userData = {
        name, education, email, mobileNumber, gender, courses: courses.join(', ')
    }
    const existingData = JSON.parse(localStorage.getItem('users')) || [];
    existingData.push(userData);
    localStorage.setItem('users',JSON.stringify(existingData));
    updateTable();
    form.reset();
}

function updateTable() {
 const users = JSON.parse(localStorage.getItem('users')) || [];
 const tableBody = document.querySelector('#table-form tbody');
 tableBody.innerHTML = '';
 users.forEach(user => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = user.name;
    row.appendChild(nameCell);
    const educationCell = document.createElement('td');
    educationCell.textContent = user.education;
    row.appendChild(educationCell);
    const emailCell = document.createElement('td');
    emailCell.textContent = user.email;
    row.appendChild(emailCell);
    const genderCell = document.createElement('td');
    genderCell.textContent = user.gender;
    row.appendChild(genderCell);
    const courseCell = document.createElement('td');
    courseCell.textContent = user.courses;
    row.appendChild(courseCell);
    const mobileNumberCell = document.createElement('td');
    mobileNumberCell.textContent = user.mobileNumber;
    row.appendChild(mobileNumberCell);

    tableBody.appendChild(row);
 })
}

window.onload = updateTable;