const citizens = require("../models/data.js")
const validateCitizen = require("../utils/validator.js")

module.exports = {

    getAllCitizens: (req, res) => {
        res.send(citizens)
    },

    getCitizen: (req, res) => {
        const citizensFilter = citizens.find(el => el.id === parseInt(req.params.id));
        if(!citizensFilter){
            return res.status(404).send("Citizen does not exist");
        };
        res.send(citizensFilter)
    },

    addNewCitizen: (req, res) => {

        const result = validateCitizen(req.body);
        if(result.error){
            return res.status(404).send(result.error.details[0].message);
        };
    
        const newCitizen = {
            id: citizens.length + 1,
            name: req.body.name,
            nationality: req.body.nationality
        };
    
        citizens.push(newCitizen);
        res.send(newCitizen);
    },

    updateCitizen: (req, res) => {
        const citizensFilter = citizens.find(el => el.id === parseInt(req.params.id));
        if(!citizensFilter){
            return res.status(400).send("Citizen does not exist");
        };
    
        const { error } = validateCitizen(req.body);
        if(error){
            return res.status(404).send(error.details[0].message);
        };
    
        citizensFilter.name = req.body.name;
        citizensFilter.nationality = req.body.nationality;
    
        res.send(citizensFilter);
    },

    deleteCitizen: (req, res) => {
        const citizensFilter = citizens.find(el => el.id === parseInt(req.params.id));
        if(!citizensFilter){
            return res.status(400).send("Citizen does not exist");
        };
    
        const index = citizens.indexOf(citizensFilter);
        citizens.splice(index, 1);
    
        res.send(citizensFilter);
    }
}