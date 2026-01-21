import { formatTitle } from "../util/formatTitle";

interface BookTitleProp {
    titulo: string;
}

export function BookTitle({titulo}: BookTitleProp) {
    return (
        <p
            style={{ fontFamily: "monospace", whiteSpace: "pre" }}          
        >
            {formatTitle(titulo)}
        </p>
    )
}