import { Book } from "../types/Book";
import { ManageBookButton } from "./ManageBookButton";

interface BookCardProp {
    book: Book;
    onSelect: (book: Book) => void;
}

export function BookCard({ book, onSelect }: BookCardProp) {
    return (
        <div 
            style={{display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center"}}        
        >
            <div 
                onClick={() => onSelect(book)}
                style={{display: "flex", justifyContent: "center", alignItems: "center"}}   
            >
                <img src={book.capa} alt="" />
                <p>{book.titulo}</p>
                <p>{book.status}</p>
                <p>{book.nota}</p>
            </div>
            <ManageBookButton book={book} />
        </div>
    )
}