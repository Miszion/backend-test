
const Food = require("../models/food.config.js");

exports.getFoodInfo = (req, res) => {
    Food.getFoodInfo((err, data) => {
        if(err) {
            if (err.kind == 'not_found') {
                res.status(404).send({
                message: 'Could not find all foods'})
            }
            else {
                res.status(500).send({
                    message: 'Could not find...'
                })
            }
        }
        else {
            res.send(data)
        }
    })
}

exports.incrementNumVotes = (req, res) => {
    Food.addVote(req.params.id, (err, data) => {
        if (err) {
            if (err.kind == 'not_found') {
                res.status(404).send({
                    message: 'Could not access votes'
                })
            }
            else {
                res.status(500).send({
                    message: 'Could not find...'
                })
            }
        }
        else {
            res.send(data)
        }
    })
}

exports.getNumVotes = (req, res) => {
    Food.getVotes(req.params.id, (err, data) => {
        if (err) {
            if (err.kind == 'not_found') {
                res.status(404).send({
                    message: 'Could not access votes'
                })
            }
            else {
                res.status(500).send({
                    message: 'Could not find...'
                })
            }
        }
        else {
            res.send(data)
        }
    });
}