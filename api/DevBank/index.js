const server = require("./src/app");
const { conn } = require("./src/database/db");
const { Users } = require("./src/database/db");

<<<<<<< HEAD

conn.authenticate()
    .then(() => { 
        return conn.sync({force:false})
    })
    .then(() => {
        return server.listen(3000, () => {

            console.log('Connection has been established successfully at port 3000')
        })
    })
    .catch((err) => {
        console.log(err)
    })
=======
conn
  .authenticate()
  .then(() => {
    return conn.sync({ force: true });
  })
  .then(() => {
    return server.listen(3000, () => {
      console.log("Connection has been established successfully at port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
>>>>>>> 0d57dee53f3b7a5b3e5381ac2a83e917d1c39927
