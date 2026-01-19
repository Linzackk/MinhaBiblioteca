export type BookStatus = 'LENDO' | 'LIDO' | 'QUERO_LER';

export interface Book {
    id: string,
    capa: string,
    titulo: string,
    autor: string[],
    generos: string[],
    sinopse: string,
    paginasLidas: number,
    paginasTotais: number,
    status: BookStatus,
    nota: number
}