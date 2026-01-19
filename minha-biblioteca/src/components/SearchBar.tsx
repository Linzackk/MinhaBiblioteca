import { SearchButton } from "./SearchButton";
import { SearchInput } from "./SearchInput";

interface SearchBarProps {
    query: string,
    setQuery: (q: string) => void;
    onSearch: () => void;
}

export function SearchBar({ query, setQuery, onSearch }: SearchBarProps) {
    return (
        <div>
            <SearchInput query={query} setQuery={setQuery}/>
            <SearchButton onSearch={onSearch}/>
        </div>
    )
}