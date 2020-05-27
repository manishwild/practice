window.onload = function () {
    //get html elements
    let studentIdSpan = document.querySelector('#studentIdSpan')
    let studentNameInp = document.querySelector('#studentNameInp')
    let courselist = document.querySelector('#courselist')
    let studentGardeInp = document.querySelector("#studentGardeInp")
    let addGradeBtn = document.querySelector('#addGradeBtn')
    let gradeListElement = document.querySelector('#gradeListElement')
    let saveStudentBtn = document.querySelector('#saveStudentBtn')
    let body = document.querySelector('body')
    //declare empty array to save grade object
    let gradesArr = []
    //declare students array to save students
    let studentsArr = []
    addGradeBtn.addEventListener('click',function (e) {
        //console.log(courselist.selectedIndex);
        //console.log(courselist.options[courselist.selectedIndex].value);
        let selectedCourse = courselist.options[courselist.selectedIndex].value
        let grade = studentGardeInp.value
        if (selectedCourse !== '' && grade.trim() !== '') {
            let listItem = document.createElement('li')
            listItem.innerText = selectedCourse + ': ' + grade + '%'
            gradeListElement.append(listItem)
            studentGardeInp.value = ''
            //create a grade object to push it gradesArr
            let gradeObj ={}
            //if(selectedCourse == 'Math'){
                //gradeObj.Math = grade
           // }
           gradeObj[selectedCourse.replace(/ /g,"_")] = grade
           gradesArr.push(gradeObj)
           console.log(gradesArr);
           
        }        
    })
    saveStudentBtn.addEventListener('click',function (e) {
        if (studentNameInp.value.trim()) {
            let studentObj = {}
            studentObj.name = studentNameInp.value
            studentObj.grades = gradesArr
            studentsArr.push(studentObj)
            localStorage.setItem('Records',JSON.stringify(studentsArr))
            gradeListElement.innerHTML = ''
            studentGardeInp.value = ''
            studentNameInp.value = ''
            gradesArr = []
        }
    })
    //this code bring data from loacal storage and reander it
    let storageData = localStorage.getItem('Records')
    console.log(storageData);
    if (storageData) {
        let dataObj = JSON.parse(storageData)
        console.log(dataObj);
        //create container div add it to the body
        let containerDiv = document.createElement('div')
        body.append(containerDiv)
        dataObj.forEach(element => {
            console.log(element);
            let nameH3 = document.createElement('h3')
            nameH3.innerText = element.name
            containerDiv.append(nameH3)
            element.grades.forEach(grade => {
                console.log(grade);
                //create ul for the grade and append it to containerDiv
                let gradeUl = document.createElement('ul')
                containerDiv.append(gradeUl)
                Object.keys(grade).forEach(key => {
                   console.log(key)
                   console.log(grade[key]);
                   let gradeLi = document.createElement('li')
                   gradeLi.innerText = key +':' + grade[key] + '%'
                   gradeUl.append(gradeLi)
                });
            });
        });


        
    }
    


    
}