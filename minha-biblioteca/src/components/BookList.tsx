import { useContext } from "react";
import type { Book } from "../types/Book";
import { BookCard } from "./BookCard";
import { BooksContext } from "../contexts/BooksContext";

interface BookListProp {
    books: Book[]
    onSelect: (book: Book) => void;
}

export function BookList({ books, onSelect }: BookListProp) {
    const {addBook} = useContext(BooksContext)
    return (
        <div>
            {books.map((book) => (
                    <BookCard 
                        key={book.id} 
                        book={book}
                        onSelect={onSelect}
                        addBook={addBook}
                    />
            ))}
        </div>
    )
}