module.exports = app => {

    const foods = require('../controllers/food.controller.js')

    app.get('/foods', foods.getFoodInfo);
    app.get('/votes/:id', foods.getNumVotes);
    app.get('/addvote/:id', foods.incrementNumVotes);
    //app.post
    // app.get
    //app.put
    //app.delete
};

