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

    const books: Book[] = data.items.map((item: any) => {
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
            status: "QUERO_LER",
            nota: 0,
        }
    })
}

