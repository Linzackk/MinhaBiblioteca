import { Book } from "../types/Book";
import { ManageBookButton } from "./ManageBookButton";
import { BookImg } from "./BookImg";
import { BookTitle } from "./BookTitle";
import { BookPages } from "./BookPages";
import { BookUserInfo } from "./BookUserInfo";
import styles from "./BookCard.module.css"

interface BookCardProp {
    book: Book;
    onSelect: (book: Book) => void;
}

export function BookCard({ book, onSelect }: BookCardProp) {
    // paginas lidas tem um valor pego da lista do usuário
    return (
        <div className={styles.BookContainer}>
            <div 
                onClick={() => onSelect(book)}
                className={styles.OpenBookInfo}
            >
                <BookImg capa={book.capa} titulo={book.titulo} />
                <BookTitle titulo={book.titulo} />
            </div>
            <BookPages paginasLidas={book.paginasLidas} paginasTotais={book.paginasTotais} />
            <BookUserInfo id={book.id} nota={book.nota} status={book.status}/>
            <ManageBookButton book={book} />
        </div>
    )
}