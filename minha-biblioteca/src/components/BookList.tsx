import type { Book } from "../types/Book";

interface BookListProp {
    books: Book[]
}

export function BookList({ books }: BookListProp) {
    return (
        <div>
            {books.map((book) => (
                <div key={book.id}>{book.titulo}</div>
            ))}
        </div>
    )
}