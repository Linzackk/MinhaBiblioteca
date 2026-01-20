import { BookStatus } from "../types/Book";

interface BookStatusProp {
    status: BookStatus;
}

export function BookStatusComponent({status}: BookStatusProp) {
    return (
        <div style={{ minWidth: "100px", textAlign: "center" }}>
            <p>{status}</p>
        </div>
    )
}