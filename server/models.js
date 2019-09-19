const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/productManagerdb", { useNewUrlParser : true });

const ProductSchema = new mongoose.Schema({
    name : { type : String, required : [true, "Must provide a product name"], minlength : [5, "Name must be at least 5 characters long"], maxlength : [99, "Product name must be less than 100 characters"] },
    price : { type : Number, required : [true, "Must provede a product price"] },
    image : { type : String, required : [true, "Must provide a product image"] }
},
{
    timestamps : true
})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;