import type { Book } from "../types/Book";
import { BookCard } from "./BookCard";

interface BookListProp {
    books: Book[]
    onSelect: (book: Book) => void;
}

export function BookList({ books, onSelect }: BookListProp) {
    return (
        <div>
            {books.map((book) => (
                    <BookCard 
                        key={book.id} 
                        book={book}
                        onSelect={onSelect}
                    />
            ))}
        </div>
    )
}