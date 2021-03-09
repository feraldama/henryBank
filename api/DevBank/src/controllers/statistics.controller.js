const { Transfer } = require('../database/db');
const { Op } = require('sequelize');
const moment = require('moment');

module.exports = {
  getMonth(cvu) {
    return Transfer.findAll({
      where: {
        [Op.or]: [
          {origin: cvu},
          {destination: cvu}
        ],
        createdAt: {
          [Op.gte]: moment().subtract(1, 'months').toDate()
        }
      }
    })
  }
}
