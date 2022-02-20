const router = require("express").Router();
const { createNote, updateDatabase } = require("../../lib/notes");
const { notes } = require("../../db/db");



router.get("/notes", (req, res) => {
    let results = notes;
    res.json(results);
})

router.post("/notes", (req, res) => {
    req.body.id = Math.floor(Math.random() * 10000000000);
    const note = createNote(req.body, notes);
    res.json(note);
})

router.delete("/notes/:id", (req, res) => {
    const deleteID = req.params.id;
    console.log("Delete Button HIT at ID:" + deleteID);

    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id = deleteID) {
            notes.splice(i, 1);
            console.log("Successful deletion");
            updateDatabase(notes);
            res.sendFile(path.join(__dirname, '../../public/notes.html'))
                     
        };
    };   
});


module.exports = router;