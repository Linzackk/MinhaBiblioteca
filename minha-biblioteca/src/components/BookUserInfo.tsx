import { BookStatus } from "../types/Book";
import { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";
import { BookStatusComponent } from "./BookStatus";
import { BookScore } from "./BookScore";

interface BookUserInfoProp {
    status: BookStatus;
    nota: number;
    id: string,
}

export function BookUserInfo({status, nota, id}: BookUserInfoProp) {
    const {books} = useContext(BooksContext);
    const bookInUserList = books.some((bookFilter) => bookFilter.id === id)

    return (
        <>
            {bookInUserList ? (
                <>
                    <BookStatusComponent status={status} id={id} />
                    <BookScore nota={nota} id={id}/>
                </>
            ) : (
                <>
                </>
            )}
        </>
    )
}