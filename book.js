const express = require ("express")
const bookList = require("./booklist")

const bookRoute = express.Router();

bookRoute.route("/book/:id?")
.get( (req, res) => {
    if(req.params && req.params.id){
        res.json(bookList.get(req.params.id));
    } else{
        res.json(bookList.getAll());
    } 
})
.post( (req, res) => {
    if(req.body) {
        passId = req.body.id;
        let book = {};
        book.name = req.body.name;
        book.author = req.body.author;
        book.genre = req.body.genre;
        book.pubyear = req.body.pubyear;

        if (passId) {
            bookList.update(passId, book)
        } else {
            bookList.add(book)
        }

    }
    res.redirect("/book");
})
.put( (req, res) => {
    if(req.params && req.params.id && req.body){
        bookList.update(req.params.id, req.body);
    }
    res.redirect("/book");
})
.delete( (req, res) => {
    if(req.params && req.params.id){
        bookList.remove(req.params.id);
    }
    res.redirect("/book");
})
module.exports = bookRoute;