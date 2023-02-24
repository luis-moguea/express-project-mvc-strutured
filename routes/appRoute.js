const express = require("express")
const router = express.Router()
const controller = require("../controllers/appController.js")

router.get("/api/citizens", controller.getAllCitizens);

router.get("/api/citizens/:id", controller.getCitizen);

router.post("/api/citizens", controller.addNewCitizen);

router.put("/api/citizens/:id", controller.updateCitizen);

router.delete("/api/citizens/:id", controller.deleteCitizen);

module.exports = router