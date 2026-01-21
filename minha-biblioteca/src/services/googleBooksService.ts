import type { Book } from "../types/Book"

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes'

export async function searchBooks(query: string) {
    const url = `${BASE_URL}?q=${encodeURIComponent(query)}&maxResults=20`

    const response = await fetch(url)

    if (!response.ok) {
        throw new Error("Erro ao buscar livros")
    }

    const data = await response.json();

    if (!data.items) return [];

    const getUserBooks = () => {
        const data = localStorage.getItem('books');
        return data ? JSON.parse(data) : [];
    }
    const userBooks: Book[] = getUserBooks()

    function getBookUserStatus(id: string) {
        const book = userBooks.find((book) => book.id === id)
        return book ? book.status : null;
    }


    const booksSearch: Book[] = data.items.map((item: any) => {
        
        const info = item.volumeInfo
        return {
            id: item.id,
            capa: info.imageLinks?.thumbnail ?? '',
            titulo: info.title ?? "Sem Título",
            autor: info.authors ?? [],
            generos: info.categories ?? [],
            sinopse: info.description ?? '',
            paginasLidas: 0,
            paginasTotais: info.pageCount ?? 0,
            status: getBookUserStatus(item.id) || "QUERO_LER",
            nota: 0,
        }
    })
    return booksSearch;
}

