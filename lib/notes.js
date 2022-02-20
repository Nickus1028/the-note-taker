const fs = require("fs");
const path = require("path");

function createNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray}, null, 2)
    );
    return note;
}

function updateDatabase(notesArray) {
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray}, null, 2)
    );
}

module.exports = {
    createNote,
    updateDatabase
}