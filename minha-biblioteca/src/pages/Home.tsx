import { useState, useContext } from "react";
import type { Book } from "../types/Book";
import { BookList } from "../components/BookList";
import { BookModal } from "../components/BookModal";
import { BooksContext } from "../contexts/BooksContext";


export function Home() {
    const {books} = useContext(BooksContext)
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);

    return (
        <div>
            <h1>Livros Salvos</h1>
            <BookList books={books} onSelect={setSelectedBook}/>
            <BookModal book={selectedBook} onClose={() => setSelectedBook(null)}/>
        </div>
    )
}