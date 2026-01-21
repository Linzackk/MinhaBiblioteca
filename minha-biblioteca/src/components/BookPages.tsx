import { useContext, useState } from "react";
import { BooksContext } from "../contexts/BooksContext";

interface BookPagesProp {
    paginasTotais: number;
    paginasLidas: number;
    id: string;
}

export function BookPages({paginasTotais, paginasLidas, id}: BookPagesProp) {
    const { updateProgress } = useContext(BooksContext);

    const [editing, setEditing] = useState(false);
    const [tempPages, setTempPages] = useState(paginasLidas);

    function startEdit() {
        setTempPages(paginasLidas);
        setEditing(true);
    }

    function finishEdit() {
        let value = tempPages;

        if (value < 0) value = 0;
        if (value > paginasTotais) value = paginasTotais;

        setEditing(false);
        updateProgress(id, value);
    }

    return (
        <div>   
            <p>
                {editing ? (
                    <input 
                        type="number"
                        value={tempPages}
                        autoFocus
                        onChange={(e) => setTempPages(Number(e.target.value))}
                        onBlur={finishEdit}
                        onKeyDown={(e) => e.key === "Enter" && finishEdit()}
                    />
                ) : (
                    <span onClick={startEdit}>
                        {paginasLidas}
                    </span>
                )}
                <span>/</span>
                <span>{paginasTotais}</span>
            </p>
        </div>
    )
}