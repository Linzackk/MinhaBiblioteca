import { ManageBookButton } from "./ManageBookButton";
import type { Book } from "../types/Book";
import styles from "./BookModal.module.css"

interface BookModalProp {
    book: Book | null;
    onClose: () => void;
}

export function BookModal({ book, onClose}: BookModalProp) {
    if (!book) return null;

    return (
        <div
            className={styles.BookModalContainer}
            onClick={onClose}
        >
            <div
                className={styles.CloseBookModal}
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} style={{ float: 'right'}}>X</button>
                <img src={book.capa} alt={book.titulo} style={{ width: '150px', height: '225px' }} />
                <h2>{book.titulo}</h2>
                <p><strong>Autor(es):</strong> {book.autor.join(', ')}</p>
                <p><strong>Gênero(s):</strong> {book.generos.join(', ')}</p>
                <p><strong>Status:</strong> {book.status}</p>
                <p><strong>Páginas:</strong> {book.paginasLidas}/{book.paginasTotais}</p>
                <p><strong>Nota:</strong> {book.nota}/5</p>
                <p><strong>Descrição:</strong> {book.sinopse}</p>
                <ManageBookButton book={book} />
            </div>
        </div>
    )
}