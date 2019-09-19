const controller = require("./controller");

module.exports = (app) => {
    app.get("/api/products", controller.Index);
    app.get("/api/products/:id", controller.SingleProduct);
    app.post("/api/products", controller.CreateProduct);
    app.put("/api/products/:id", controller.UpdateProduct);
    app.delete("/api/products/:id", controller.DeleteProduct);
    app.all("*", controller.All);
}