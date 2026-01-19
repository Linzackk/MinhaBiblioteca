type SearchButtonType = {
    onSearch: () => void;
}

export function SearchButton({ onSearch }: SearchButtonType) {
    return (
        <div>
            <button onClick={onSearch}>Buscar</button>
        </div>
    )
}