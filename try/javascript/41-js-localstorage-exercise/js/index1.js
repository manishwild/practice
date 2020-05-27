window.onload = function(){

    // selectors
    // inputs
    let studentName = document.querySelector('#studentNameInp');
    let courseList = document.querySelector('#courseList');
    let studentGrade = document.querySelector('#studentGrade');
    // buttons
    let addGradeBtn = document.querySelector('#addGradeBtn');
    let saveStudentBtn = document.querySelector('#saveStudentBtn');
    // gradeList
    let gradeList = document.querySelector('#gradeList');
    // containerDiv
    let containerDiv = document.querySelector('#containerDiv');

    // arrays
    let gradesArr = [];
    let studentsArr = [];
    
    // addEventListener for add grade button
    addGradeBtn.addEventListener('click', function(){
        let selectedCourse = courseList.options[courseList.selectedIndex].value;
        let grade = studentGrade.value;
        if (selectedCourse !== '' && grade.trim() !== '') {
            // renders gradeList after the add grade button
            let listItem = document.createElement('li');
            listItem.innerText = selectedCourse + ': ' + grade + '%';
            gradeList.append(listItem);
            studentGrade.value = '';
            // creates grade objects and pushes them into grades array
            let gradeObj = {};
            gradeObj[selectedCourse.replace(/ /g, "_")] = grade; // replaces all whitespaces with _
            gradesArr.push(gradeObj);
        }
    });

    // addEventListener for save student button
    saveStudentBtn.addEventListener('click', function(){
        if (studentName.value.trim()) {
            // creates a studentObj with name and grades from gradesArr
            let studentObj = {};
            studentObj.name = studentName.value;
            studentObj.grades = gradesArr;
            // pushes studentObj to studentsArr
            studentsArr.push(studentObj);
            // saves studentsArr to localStorage
            localStorage.setItem('students', JSON.stringify(studentsArr));
            // clears the content
            studentName.value = '';
            studentGrade.value = '';
            gradeList.innerHTML = '';
            gradesArr = [];
            containerDiv.innerHTML = '';
            createStudentList();
        }
    })

    // creates a complete list of students, after loading the page and again after clicking on saveStudentBtn
    function createStudentList() {
        let storageData = localStorage.getItem('students');
        if (storageData) {
            let dataObj = JSON.parse(storageData);
            // console.log(dataObj);
            // clears studentsArr before filling again with data from localStorage
            studentsArr = [];
            // for each student object
            dataObj.forEach(student => {
                studentsArr.push(student);
                let nameH3 = document.createElement('h3');
                nameH3.innerText = student.name;
                containerDiv.append(nameH3);
                // for each grade object
                student.grades.forEach(grade => {
                    // console.log(grade);
                    // console.log(Object.keys(grade));
                    let gradeUl = document.createElement('ul');
                    containerDiv.append(gradeUl);
                    // get the names(keys) of the school subjects and their grades and print them 
                    Object.keys(grade).forEach(key => {
                        // console.log(key);
                        // console.log(grade[key]);
                        let gradeLi = document.createElement('li');
                        gradeLi.innerText = key + ": " + grade[key] + "%";
                        gradeUl.append(gradeLi);
                    });
                });
            });
        }
    }
    createStudentList();

}


// example for a students array:
// let students = [
//     {
//         "name": "ahmad",
//         "grades": [
//             {"math": "90"},
//             {"english": "80"},
//             {"computer science": "30"},
//         ]
//     },
//     {
//         "name": "manish",
//         "grades": [
//             {"math": "0"},
//             {"english": "0"},
//             {"computer science": "0"},
//         ]
//     },
// ]


// old version for --> gradeObj[selectedCourse.replace(/ /g, "_")] = grade
// if (selectedCourse == 'math') {
//     gradeObj.math = grade;
// }
// if (selectedCourse == 'english') {
//     gradeObj.english = grade;
// }
// if (selectedCourse == 'computer_science') {
//     gradeObj.computer_science = grade;
// }
// if (selectedCourse == 'java') {
//     gradeObj.java = grade;
// }
