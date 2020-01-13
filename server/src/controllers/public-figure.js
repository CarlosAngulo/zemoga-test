const Figure = require('../models/public-figure');
const Category = require('../models/category');

module.exports = {
    
    index: async (req, res, next) => {
        const figures = await Figure.find({}).populate('category');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json(figures);
    },

    newFigure: async (req, res, next) => {
        const newFigure = new Figure(req.body);
        const figure = await newFigure.save();
        res.status(200).json(figure);
    },

    getFigure: async (req, res, next) => {
        const { figureId } = req.params;
        const figure = await Figure.findById(figureId);
        res.status(200).json(figure);
    },

    addVote: async (req, res, next) => {
        const { figureId } = req.params;
        console.log(req.body);
        const vote = req.body;
        const oldUser = await Figure.findByIdAndUpdate(figureId, { $inc: {["votes." + req.body['vote']] : 1} });
        const updatedUser = await Figure.findById(figureId);
        res.status(200).json({success: true, updatedUser});
    }

};