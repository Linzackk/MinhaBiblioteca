import { useContext } from "react"
import { Book } from "../types/Book"
import { BooksContext } from "../contexts/BooksContext"

interface ManageBookButtonProp {
    book: Book
}

export function ManageBookButton({ book }: ManageBookButtonProp) {
    const {addBook, removeBook, books} = useContext(BooksContext)
    const booksAlredyInLibrary = books.some((bookFilter) => bookFilter.id === book.id)
    return (
        <div>
            {booksAlredyInLibrary ? 
            (
                <button onClick={() => removeBook(book.id)}>Remover</button>
            ) : 
            (
                <button onClick={() => addBook(book)}>Adicionar</button>
            ) }         
        </div>
    )
}