import { useState } from "react";
import { searchBooks } from "../services/googleBooksService";
import type { Book } from "../types/Book";
import { SearchBar } from "../components/SearchBar";
import { BookList } from "../components/BookList";

export function Search() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<Book[]>([]);

    const handleSearch = async () => {
        if (!query.trim()) return;

        const books = await searchBooks(query)
        setResults(books)
    }


    return (
        <div>
            <h1>Buscar Livros</h1>
            <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch}/>
            <BookList books={results}/>
        </div>
    )
}