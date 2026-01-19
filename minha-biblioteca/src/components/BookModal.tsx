import { BooksContext } from "../contexts/BooksContext";
import { ManageBookButton } from "./ManageBookButton";
import type { Book } from "../types/Book";
import React, { useContext } from "react";

interface BookModalProp {
    book: Book | null;
    onClose: () => void;
}

export function BookModal({ book, onClose}: BookModalProp) {
    if (!book) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000
                } as React.CSSProperties
            }
            onClick={onClose}
        >
            <div
                style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '10px',
                width: '400px',
                maxHeight: '80%',
                overflowY: 'auto'
                } as React.CSSProperties
                }
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