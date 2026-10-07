// Express-Modul laden und in der Konstanten "express" speichern
const express = require("express");

// Health-Check-Router aus der Routendatei laden
const healthCheckRouter = require("./routes/healthCheck");

const faqsRouter = require("./routes/faqs");

// Express-Anwendung erstellen und in der Konstanten "app" speichern
const app = express();

// Port festlegen, auf dem der Backend-Server später erreichbar ist
const PORT = 3000;

// Definiert die Root-Route "/" für eingehende GET-Anfragen, Sendet eine Textantwort an den Client zurück
app.get("/", function (req, res) {
    res.send("Walther Media Chatbot Backend läuft.");
});

// HealthCheckRouter in die Express-Anwendung einbinden
app.use(healthCheckRouter);

// FaqsRouter in die Express-Anwendung einbinden
app.use(faqsRouter);

// Startet den Server auf dem festgelegten Port und gibt nach dem Start eine Meldung in der Konsole aus
app.listen(PORT, function() {
    console.log("Server läuft auf PORT 3000.");
});


