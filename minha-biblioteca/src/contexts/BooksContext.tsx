import { createContext, ReactNode, useEffect, useState } from "react";
import type { Book, BookStatus } from "../types/Book";

interface BooksContextData {
    books: Book[]
    addBook: (book: Book) => void;
    removeBook: (id: string) => void;
    updateProgress: (id: string, pagesRead: number) => void;
    updateStatus: (id: string, status: BookStatus) => void;
}

interface BooksProviderProp {
    children: ReactNode
}

export const BooksContext = createContext<BooksContextData>(
    {} as BooksContextData
)

export function BooksProvider({ children }: BooksProviderProp) {
    // const [books, setBooks] = useState<Book[]>([]);
    const [books, setBooks] = useState<Book[]>(() => {
        const data = localStorage.getItem('books');
        return data ? JSON.parse(data) : [];
    })

    const addBook = (book: Book) => {
        setBooks((prev) => [...prev, book]);
    }

    const removeBook = (id: string) => {
        setBooks((prev) => prev.filter((book) => book.id !== id))
    }

    const updateProgress = (id: string, pagesRead: number) => {
        setBooks((prev) => 
            prev.map((book) =>
                book.id === id
                    ? { ...book, pagesRead}
                    : book
            )
        )
    }

    const updateStatus = (id: string, status: BookStatus) => {
        setBooks((prev) => 
            prev.map((book) =>
                book.id === id
                    ? { ...book, status}
                    : book
            )
        )
    }

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])

    return (
        <BooksContext.Provider value={{ 
            books, 
            addBook, 
            removeBook, 
            updateProgress, 
            updateStatus 
            }}
        >
            {children}
        </BooksContext.Provider>
    )
}

