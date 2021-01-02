// Dependencies
// =============================================================
const fs = require('fs');
const express = require('express');
var path = require("path");

// Sets up the Express App
// =============================================================
const PORT = 3550;
const app = express();

// =============================================================


// =============================================================
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/Develop/public/notes.html"));
});

app.get("/api/notes", function (req, res) {
    fs.readFile('./Develop/db/db.json', 'utf8', (error, data) =>
        error ? console.error(error) : res.sendFile(path.join(__dirname, "/Develop/db/db.json"))
    );

});

app.post("/api/notes", function (req, res) {
    const newNote = req.body;

    newNote.routeName = newNote.title.replace(/\s+/g, "").toLowerCase();
    // fs.writeFile('./Develop/db/db.json', newNote, (err) =>
    //     err ? console.error(err) : res.sendFile(path.join(__dirname, "/Develop/db/db.json"))
    // );
    console.log(newCharacter);
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "/Develop/public/index.html"));
});

// =============================================================


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
