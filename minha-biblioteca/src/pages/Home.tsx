import { useState, useContext } from "react";
import type { Book } from "../types/Book";
import { BookList } from "../components/BookList";
import { BookModal } from "../components/BookModal";
import { BooksContext } from "../contexts/BooksContext";
import { PageTitle } from "../components/PageTitle";


export function Home() {
    const {books} = useContext(BooksContext)
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);

    return (
        <div>
            <PageTitle title="Livros Salvos"/>
            <BookList books={books} onSelect={setSelectedBook}/>
            <BookModal book={selectedBook} onClose={() => setSelectedBook(null)}/>
        </div>
    )
}