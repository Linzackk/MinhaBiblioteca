import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './Nav.css';
import bookIcon from '../images/book-icon.png';

export function Nav() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (query.trim() === '') return;
        navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    };

    return (
        <nav className="nav-container">
            <Link to="/" className="nav-books-link">
                <img 
                    src={bookIcon}
                    alt="Meus Livros"
                    className="nav-books-img"
                />
            </Link>

            <form className="nav-search-form" onSubmit={handleSearch}>
                <input 
                    type="text" 
                    placeholder="Pesquisar livros..."    
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Pesquisar</button>
            </form>
        </nav>
    )
}