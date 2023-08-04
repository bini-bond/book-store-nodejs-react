import app from "./app";

const port = process.env.PORT || 3000;
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(null, { swaggerOptions: { url: '../swagger.json' } }));


app.listen(port, () => {
  if (process.env.NODE_ENV !== "production") {
    console.log(`[SERVER] Running at port ${port}`);
  }
});
