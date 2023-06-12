const userRoutes = require("./users.router");
const productRoutes = require("./products.router");

const apiRoutes = (app) => {
  app.use(userRoutes);
  app.use(productRoutes);
};

module.exports = apiRoutes;
