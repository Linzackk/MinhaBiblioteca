import { useContext, useState } from "react";
import { BooksContext  } from "../contexts/BooksContext";
import { BookStatusText, BookStatusValue } from "../types/Status";
import { BookStatus } from "../types/Book";

interface EditBookStatusProp {
    status: BookStatus;
    id: string;
}

export function EditBookStatus({ status, id }: EditBookStatusProp) {
    const statusText = BookStatusText[status]
    const {updateStatus} = useContext(BooksContext)

    const [editing, setEditing] = useState(false);
    const [tempStatus, setTempStatus] = useState<BookStatus>(status);

    function startEdit() {
        setTempStatus(status);
        setEditing(true);
    }

    function finishEdit() {
        setEditing(false);
        updateStatus(id, tempStatus);
    }

    return (
        <span>
            {editing ? (
                <>
                    <select 
                        value={tempStatus} 
                        onChange={(e) => { setTempStatus(e.target.value as BookStatus) }}
                        onBlur={finishEdit}
                    >
                        <option value={BookStatusValue.LIDO}>{BookStatusText.LIDO}</option>
                        <option value={BookStatusValue.LENDO}>{BookStatusText.LENDO}</option>
                        <option value={BookStatusValue.QUERO_LER}>{BookStatusText.QUERO_LER}</option>
                    </select>
                </>
            ) : (
                <p onClick={startEdit}>
                    {statusText}
                </p>
            )}
        </span>
    )
}