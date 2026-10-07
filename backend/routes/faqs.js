// Express-Modul laden und in der Konstanten "express" speichern
const express = require("express");

// Router für die Express-Anwendung erstellen
const router = express.Router();

// FAQ-Daten als Array mit einzelnen FAQ-Objekten speichern
const faqs = [
    {
        question: "Wie lange dauert der Versand?",
        answer: "Die Lieferzeit beträgt in der Regel 2 bis 5 Werktage."
    },
    {
        question: "Welche Zahlungsmethoden werden angeboten?",
        answer: "Die verfügbaren Zahlungsmethoden werden im Bestellprozess angezeigt."
    }
];

// Gibt alle FAQ-Einträge als JSON zurück
router.get("/faqs", function(req, res) {
    res.json(faqs);
});

// Router für andere Dateien bereitstellen
module.exports = router;

