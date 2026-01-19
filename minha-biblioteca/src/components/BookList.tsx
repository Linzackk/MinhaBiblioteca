import type { Book } from "../types/Book";
import { BookCard } from "./BookCard";

interface BookListProp {
    books: Book[]
}

export function BookList({ books }: BookListProp) {
    return (
        <div>
            {books.map((book) => (
                <div key={book.id}><BookCard book={book}/></div>
            ))}
        </div>
    )
}