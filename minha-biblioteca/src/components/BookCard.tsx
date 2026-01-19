import { Book } from "../types/Book";

interface BookCardProp {
    book: Book;
    onSelect: (book: Book) => void;
    addBook: (book: Book) => void;
}

export function BookCard({ book, onSelect, addBook }: BookCardProp) {
    return (
        <div 
            style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}
            onClick={() => onSelect(book)}
        >
            <img src={book.capa} alt="" />
            <p>{book.titulo}</p>
            <p>{book.status}</p>
            <p>{book.nota}</p>
            <button onClick={() => addBook(book)}></button>
        </div>
    )
}