const sql = require('./db.js');
const Food = function(food) {
    this.name = food.name;
    this.price = food.price;
}

Food.getFoodInfo = result => {
    
    sql.query("SELECT * from food", function (err, res, fields) {
        if (err) {
            result(null, err)
            return;
        }
        return result(null, res)
    });


}

Food.addVote = (id, result) => {
    var query = `SELECT numVotes from votes WHERE id=${id}`
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error fetching votes")
            result(null, err)
            return;
        }
        else {
            
            numVotes = JSON.parse(JSON.stringify(res[0])).numVotes;

            query = `UPDATE votes SET numVotes=${numVotes + 1} WHERE id=${id}`

            sql.query(query, (err, res) => {
                if (err) {
                    console.log("error incrementing vote");
                    result(null, err)
                    return;
                }
                else {
                    result(null, res)
                    return;
                }
            })

        }
    })

}

Food.getVotes = (id, result) => {
    var query = `SELECT numVotes from votes WHERE id=${id}`
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error fetching votes")
            result(null, err)
            return;
        }
        else {
            result(null, res)
            return;
        }
    })

}


module.exports = Food;