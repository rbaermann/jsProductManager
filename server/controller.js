const Product = require("./models");
const path = require("path");

module.exports = {
    Index : (req, res) => {
        Product.find()
            .then(data => res.json({ Product : data }))
            .catch(err => res.json(err))
    },
    SingleProduct : (req, res) => {
        Product.findOne({ _id : req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    CreateProduct : (req, res) => {
        Product.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    UpdateProduct : (req, res) => {
        Product.updateOne({ _id : req.params.id }, req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    DeleteProduct : (req, res) => {
        Product.remove({ _id : req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    All : (req, res, next) => {
        res.sendFile(path.resolve(__dirname, "../public/dist/public/index.html"))
    }
}