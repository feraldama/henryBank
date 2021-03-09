const server = require("express").Router();
const statisticsController = require('../../controllers/statistics.controller');


server.get('/', (req, res) => {
  const { cvu } = req.body;
  
  statisticsController.getMonth(cvu)
    .then(result => {
      if (result) {
        console.log(result);
        res.status(200).send(result)
      } else {
        res.status(400).send({msg: 'No data founded'})
      }
    })
    .catch(err => {
      console.log(err)
      res.status(400).send(err)
    })

})


module.exports = server;
