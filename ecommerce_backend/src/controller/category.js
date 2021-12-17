const Categoty = require('../model/category');
const slugify = require('slugify');
const category = require('../model/category');

exports.addCategory =  (req, res) => {
    const categoryObject = {
        name: req.body.name,
        slug: slugify(req.body.name)
    }
    if(req.body.perentId){
        categoryObject.perentId = req.body.perentId
    }
    const cat = new Categoty(categoryObject);
    cat.save((error, category) => {
        if(error) return res.status(400).json({ error });
        if(category){
         return res.status(201).json({ category });
        }
    })
}

exports.getCategories = (req, res) => {
    Category.find({})
    .exec((error, categories) => {
        if(error) return res.status(400).json(error)
        if(categories){
            res.status(200).json({ categories })
        }
    })
}