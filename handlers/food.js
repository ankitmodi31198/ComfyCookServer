const db = require('../models')

exports.makeFood = async (req, res, next) => {
    try {
        
        const newFood = new db.Food(req.body)

        await newFood.save()

        res.json(newFood)        

    } catch (err) {
        err.status = 400
        console.log(err)
    }
}

exports.getCusines = async (req, res, next) => {
    try {
        const cusines = await db.Cusine.find()

        res.json({success: true, msg: 'Cusines found', cusines})
    } catch (err) {
        err.status = 400
        console.log(err)
    }
}

exports.getIngredients = async (req, res, next) => {
    try {
        const ingredients = await db.Ingredient.find()

        res.json({success: true, msg: 'Ingredients found', ingredients})
    } catch (err) {
        err.status = 400
        console.log(err)
    }
}

exports.insertFood = async (req, res, next) => {
    try{

        const newFood = new db.Food(req.body)

        await newFood.save()

        var userId = req.params.uid

        const user = await db.User.findById(userId)

        if (user) {
            user.food.push(newFood._id)
            
            await user.save()
            res.json({success: true, msg: 'done', user, newFood})
        } else {
            res.json({success: false, msg: 'user not found'})
        }
        
    } catch (err) {
        err.status = 400
        console.log(err)
    }
}

exports.getUserFood = async (req, res, next) => {
    try {
        const userId = req.params.uid
        const foods = await db.Food.find({
            user: userId
        }).populate('user')
        
        res.json({foods, success: true, msg: 'foods found'})
    } catch (err) {
        err.status = 400
        console.log(err);
    }
}