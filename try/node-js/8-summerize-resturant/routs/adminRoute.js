const express = require('express')

const fs = require('fs');
//const { json } = require('express');
//const data = fs.readFileSync('./meals.json')


function adminBurgerRouter(meals) {
    const adminRouter = express.Router()
adminRouter.get('/addmeal', (req, res) => {
    res.render('adminAddMeal',{meals:meals})
});
adminRouter.get('/deletmeal', (req, res) => {
    res.render('adminDeletMeal',{meals:meals})
});
adminRouter.post('/deletmeal', (req, res) => {
    //console.log(req.body.mealid);
    
    const idx = req.body.mealid
    meals.splice(idx,1)
    console.log(meals);
    fs.writeFileSync('./meals.json',JSON.stringify(meals))//we are deleting file and addig updatating to json file

    res.sendStatus(200)
    
    
});
adminRouter.get('/editmeal', (req, res) => {
    res.render('adminEditMeal',{meals:meals})
});
adminRouter.post('/editmeal', (req, res) => {
    console.log(req.body);
    meals[req.body.mealid].title = req.body.mealTitle
    meals[req.body.mealid].description = req.body.mealDescription
    meals[req.body.mealid].price = req.body.mealPrice
    meals[req.body.mealid].imgUrl = req.body.mealimg

    fs.writeFileSync('./meals.json',JSON.stringify(meals))
    res.sendStatus(200)
    
});
adminRouter.post('/addmeal', (req, res) => {

    const mealTitle = req.body.mealTitle
    const mealPrice = req.body.mealPrice
    const mealDescription = req.body.mealDescription
    //const mealImg = req.files.mealimg

   // chees burger 
        // chees_burger_1.jpeg
        // false cases
        // number 0
        // string empty string
        // object undefined
        // datatype null 
        if(mealTitle &&  mealPrice && mealDescription && req.files){
            const mealImg = req.files.mealimg
        //mealImg.name // blabla.jpeg
        // get image extenstion
        let ext = mealImg.name.substr(mealImg.name.lastIndexOf('.'))
        mealImg.mv('./public/uploaded/' + mealTitle.replace(/ /g , '_') + meals.length + ext).then(() => {
            let obj = {
                title: mealTitle,
                description: mealDescription,
                imgUrl: '/uploaded/' + mealTitle.replace(/ /g , '_') + meals.length + ext,
                price: mealPrice
            }
            meals.push(obj)
            fs.writeFileSync('./meals.json', JSON.stringify(meals))
            //res.render('adminAddMeal', {meals: meals})
            // you need to write the full path on res.redirect
            res.redirect('/admin/addmeal')
        }).catch(error => {
            res.send(error.message);
        })
    
    } else {
        res.send("meal data is not complete");
    }
    
    });
return adminRouter
}

module.exports = {adminBurgerRouter}