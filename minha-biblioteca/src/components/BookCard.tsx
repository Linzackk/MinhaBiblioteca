import { Book } from "../types/Book";

interface BookCardProp {
    book: Book;
}

export function BookCard({ book }: BookCardProp) {
    return (
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <img src={book.capa} alt="" />
            <p>{book.titulo}</p>
            <p>{book.status}</p>
            <p>{book.nota}</p>
        </div>
    )
}