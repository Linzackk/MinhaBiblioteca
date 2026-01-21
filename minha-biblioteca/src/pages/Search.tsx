import { useContext, useState, useEffect } from "react";
import { searchBooks } from "../services/googleBooksService";
import type { Book } from "../types/Book";
import { useLocation } from "react-router-dom";
import { BookList } from "../components/BookList";
import { BookModal } from "../components/BookModal";
import { BooksContext } from "../contexts/BooksContext";

export function Search() {
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<Book[]>([]);
    const {books} = useContext(BooksContext);
    const location = useLocation();

    const handleSearch = async (searchQuery?: string) => {
        const q = searchQuery ?? query;
        if (!q.trim()) return;

        const booksResults = await searchBooks(q);

        const merged = booksResults.map(apiBook => {
        const userBook = books.find(user => user.id === apiBook.id);
        if (!userBook) return apiBook;
        return {
            ...apiBook,
            paginasLidas: userBook.paginasLidas,
            status: userBook.status,
            nota: userBook.nota,
        };
    });

        setResults(merged);
    }

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const q = params.get('q') || '';
        setQuery(q);
        if (q) handleSearch(q);
    }, [location.search, books]);

    useEffect(() => {
        if (results.length === 0) return;

        setResults(prev =>
            prev.map(result => {
                const userBook = books.find(b => b.id === result.id);

                if (!userBook) return result;

                return {
                    ...result,
                    paginasLidas: userBook.paginasLidas,
                    status: userBook.status,
                    nota: userBook.nota,
                };
            })
        );
    }, [books]);
    

    return (
        <div>
            <h1>Buscar Livros</h1>
            <BookList books={results} onSelect={setSelectedBook}/>
            <BookModal book={selectedBook} onClose={() => setSelectedBook(null)}/>
        </div>
    )
}