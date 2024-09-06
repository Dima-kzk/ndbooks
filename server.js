const mongoos = require("mongoose");
const app = require("./app");

const DB_HOST =
  "mongodb+srv://Chet:ZhUhEJgiQ8jHfXCl@firstcluster.gcu0u.mongodb.net/books_reader?retryWrites=true&w=majority&appName=FirstCluster";

const port = process.env.PORT || 4000;

mongoos.set("strictQuery", true);
mongoos
  .connect(DB_HOST)
  .then(() => {
    app.listen(port, () => console.log("server is running"));
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
