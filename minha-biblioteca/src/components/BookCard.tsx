import { Book } from "../types/Book";
import { formatTitle } from "../util/formatTitle";
import { ManageBookButton } from "./ManageBookButton";

interface BookCardProp {
    book: Book;
    onSelect: (book: Book) => void;
}

export function BookCard({ book, onSelect }: BookCardProp) {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginBottom: "8px",
            }}
        >
            {/* Bloco 1: Imagem + Título */}
            <div 
                onClick={() => onSelect(book)}
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px", // espaço entre imagem e título
                    cursor: "pointer",
                    minWidth: "200px" // garante que não fique apertado
                }}
            >
                <img 
                    src={book.capa} 
                    alt={book.titulo} 
                    style={{ width: "50px", height: "70px", objectFit: "cover" }} 
                />
                <p
                    style={{ fontFamily: "monospace", whiteSpace: "pre" }}          
                >{formatTitle(book.titulo)}</p>
            </div>

            {/* Bloco 2: Status */}
            <div style={{ minWidth: "100px", textAlign: "center" }}>
                <p>{book.status}</p>
            </div>

            {/* Bloco 3: Nota */}
            <div style={{ minWidth: "50px", textAlign: "center" }}>
                <p>{book.nota}</p>
            </div>

            {/* Bloco 4: Botão */}
            <div>
                <ManageBookButton book={book} />
            </div>
        </div>
    )
}