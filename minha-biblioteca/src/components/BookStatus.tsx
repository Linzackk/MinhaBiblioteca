import { BookStatus } from "../types/Book";
import { EditBookStatus } from "./EditBookStatus";

interface BookStatusProp {
    status: BookStatus;
    id: string;
}

export function BookStatusComponent({status, id}: BookStatusProp) {
    return (
        <div style={{ minWidth: "100px", textAlign: "center" }}>
            <EditBookStatus id={id} status={status}/>
        </div>
    )
}