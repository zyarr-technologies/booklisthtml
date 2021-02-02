var bookList = {
    1: {"name": "Head First C", "author": "David Griffiths", "genre": "fiction", "pubyear": "1990"},
    2: {"name": "C Programing Guide", "author": "Greg Perry", "genre": "Poem", "pubyear": "1995"},
    3: {"name": "C Primer", "author": "Stanley", "genre": "Story", "pubyear": "1993"},
    4: {"name": "C++ Programmer Reference", "author": "Rossum", "genre": "Reference", "pubyear": "1996"}
}

function getAll () {
    return bookList;
}
function get (id) {
    return bookList[id];
}
function add (book) {
    let maxKey = 0;
    for(var key in bookList) {
        if (maxKey < key) {
            maxKey = +key;
        }
    }
    bookList[maxKey + 1] = book
}
function update (id, book) {
    if(bookList[id]) {
        bookList[id] = book;
    }
}
function remove (id, book) {
    if (bookList[id]) {
        delete bookList[id];
    }
}

module.exports = {getAll, get, add, update, remove}         