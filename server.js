const mongoos = require("mongoose");
const app = require("./app");

const DB_HOST =
  "mongodb+srv://Chet:ZhUhEJgiQ8jHfXCl@firstcluster.gcu0u.mongodb.net/books_reader?retryWrites=true&w=majority&appName=FirstCluster";

mongoos.set("strictQuery", true);
mongoos
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => console.log("server is running"));
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
