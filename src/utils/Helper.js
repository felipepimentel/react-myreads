export const aggregateMyBooks = (myBooks) => {
    const shelfs = new Map();
    shelfs.set('read', { title: 'Lido', books: [] })
    shelfs.set('currentlyReading', { title: 'Lendo', books: [] })
    shelfs.set('wantToRead', { title: 'Gostaria de Ler', books: [] })

    for (let book of myBooks) {
        const shelf = shelfs.get(book.shelf)
        shelf.books.push(book)
    }
    return shelfs
}  