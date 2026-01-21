import { BookStatus } from "../types/Book";
import { BookStatusText } from "../types/Status";

interface BookStatusProp {
    status: BookStatus;
}

export function BookStatusComponent({status}: BookStatusProp) {
    const statusText = BookStatusText[status]
    return (
        <div style={{ minWidth: "100px", textAlign: "center" }}>
            <p>{statusText}</p>
        </div>
    )
}