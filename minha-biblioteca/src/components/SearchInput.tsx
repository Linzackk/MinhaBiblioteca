type SearchInputType = {
    query: string,
    setQuery: (q: string) => void;
}

export function SearchInput({query, setQuery}: SearchInputType) {
    return (
        <div>
            <input 
                type="text" 
                placeholder="Digite o nome do Livro"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    )
}