const legendaryModel = require('../models/LegendaryModel');
const { v4} = require('uuid');

const createLegendaryService = {
    createLegendary: (
       name, 
       description, 
       type
    ) => {
        const newLegendary = new legendaryModel(
        v4(),
        name,
        description, 
        type   
        );

        return newLegendary;
       
    }  
}

module.exports = createLegendaryService; 