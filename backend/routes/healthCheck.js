// Express-Modul laden und in der Konstanten "express" speichern
const express = require("express");

// Router für die Express-Anwendung erstellen
const router = express.Router();

// Prüft, ob das Backend erreichbar ist
router.get("/health", function (req, res) {
    res.send("Backend ist erreichbar.");
});

// Router für andere Dateien bereitstellen
module.exports = router;

