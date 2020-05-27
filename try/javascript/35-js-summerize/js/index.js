function appInit(containerId) {
    let appContainer = document.getElementById(containerId)

    if (appContainer) {
        let div1 =document.createElement('div')
        let inp1 =document.createElement('input')
        
        div1.append(inp1)
        let colorList = document.createElement('select')
        let colorOpt1 = document.createElement('option')
        colorOpt1.value = ''
        colorOpt1.innerText ="Choose Color"
        colorList.append(colorOpt1)
        
        let colorsArr = ["grayscale", "transparent", "red", "orange", "yellow", "green", "turquoise", "blue", "lilac", "pink", "white", "gray", "black", "brown"]
        colorsArr.forEach(element => {
            let colorOpt = document.createElement('option')
            colorOpt.value = element
            colorOpt.innerText = element
            colorList.append(colorOpt)
        });
        div1.append(colorList)
        let orientationList = document.createElement('select')
        let orientationOpt1 = document.createElement('option')
        orientationOpt1.value = ''
        orientationOpt1.innerText ="Choose the orientation"
        orientationList.append(orientationOpt1)
        
        let orientationArr = ["all", "horizontal", "vertical"]
        orientationArr.forEach(element => {
            let orientationOpt = document.createElement('option')
            orientationOpt.value = element
            orientationOpt.innerText = element
            orientationList.append(orientationOpt)
        });
        div1.append(orientationList)
        let categoryList = document.createElement('select')
        let categoryOpt1 = document.createElement('option')
        categoryOpt1.value = ''
        categoryOpt1.innerText ="category"
        categoryList.append(categoryOpt1)
        
        let categoryArr = ['backgrounds', 'fashion', 'nature', 'science', 'education', 'feelings', 'health', 'people', 'religion', 'places', 'animals', 'industry', 'computer', 'food', 'sports', 'transportation', 'travel', 'buildings', 'business', 'music']
        categoryArr.forEach(element => {
            let categoryOpt = document.createElement('option')
            categoryOpt.value = element
            categoryOpt.innerText = element
            categoryList.append(categoryOpt)
        });
        div1.append(categoryList)
        let minWidthinp = document.createElement('input')
        minWidthinp.type = 'number'
        minWidthinp.min = '0'
        minWidthinp.placeholder = 'min width'
        div1.append(minWidthinp)
        let minHieghtinp = document.createElement('input')
        minHieghtinp.type = 'number'
        minHieghtinp.min = '0'
        minHieghtinp.placeholder = 'min Hieght'
        div1.append(minHieghtinp)
        div1.classList.add('controls-container')
        appContainer.append(div1)
        let btn1 = document.createElement('button')
        btn1.innerText = 'Search'
        div1.append(btn1)
        let paggingDiv = document.createElement('div')
        div1.append(paggingDiv)

        let div2 = document.createElement('div')
        appContainer.append(div2)
        div2.classList.add('images-container')
        

       
        btn1.addEventListener('click',function () {
             //div2.innerHTML = ''
             getData(inp1.value,div2,paggingDiv,1,colorList,orientationList,categoryList, minWidthinp, minHieghtinp)

            // // for (let i = 0; i < 20; i++) {
            // //     let img = document.createElement('img')
            // //     img.setAttribute('src','./imgs/dummy.png')
            // //     div2.append(img)
                
            // }
        })
         appContainer.classList.add('container')
    }else{
        console.log('Element with Id"'+ containerId + '"  could not')
    }


}
window.onload = function () {
    appInit('container')
}

async function getData(keyword,imagesContainer,paggingContainer,pageNumber,colorlistElement,orientationlistElement,categorylistElement, minWidthElement, minHeightElement, key) {
    let selectedColor = colorlistElement.options[colorlistElement.selectedIndex].value
    let colorParameter = ''
    if (selectedColor) {
        colorParameter = '&colors' + selectedColor
    }
    let selectedorientation = orientationlistElement.options[orientationlistElement.selectedIndex].value
    let orientationParameter = ''
    if (selectedorientation) {
        orientationParameter = '&orientation' + selectedorientation
    }
    let selectedcategory = categorylistElement.options[categorylistElement.selectedIndex].value
    let categoryParameter = ''
    if (selectedcategory) {
        categoryParameter = '&orientation' + selectedcategory
    }
    let minWidthParameter = ''
    if(minWidthElement.value.trim()){
        minWidthParameter = '&min_width=' + minWidthElement.value.trim()
    }
    let minHeightParameter = ''
    if(minHeightElement.value.trim()){
        minHeightParameter = '&min_height=' + minHeightElement.value.trim()
    }
    let response = await fetch('https://pixabay.com/api/?key=12000491-41fc68d8c365df909e022ceb6&q='+keyword+ '&page=' + pageNumber+colorParameter+orientationParameter+ categoryParameter + minWidthParameter + minHeightParameter)
    if(response.status == 200){
        let data = await response.json()
        console.log(data);

        let num = data.totalHits / 20
        let btnNumbers = Math.ceil(num)
        paggingContainer.innerHTML = ''
        for (let i = 0; i < btnNumbers; i++) {
            let paggingBtn = document.createElement('button')
            paggingBtn.innerText = i+1
            paggingContainer.append(paggingBtn)
            if (pageNumber == i+1) {
                paggingBtn.disabled =true
            }
            paggingBtn.addEventListener('click',function () {
                getData(keyword,imagesContainer,paggingContainer,i+1,colorlistElement,orientationlistElement,categorylistElement, orientationlistElement, categorylistElement, minWidthElement, minHeightElement, key)
            })
            
        }
        data.hits.forEach(element => {
            let img = document.createElement('img')
            img.src =element.previewURL
            let imgLink = document.createElement('a')
            imgLink.setAttribute('target','_blank')
            imgLink.setAttribute('href',element.largeImageURL)
            imgLink.append(img)
            imagesContainer.append(imgLink)
        });
    }

    
}