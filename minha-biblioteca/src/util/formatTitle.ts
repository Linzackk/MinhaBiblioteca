export function formatTitle(titulo: string) {
    const MAX = 109;

    if (titulo.length > MAX) {
        return titulo.slice(0, MAX - 1) + "…";
    }

    if (titulo.length < MAX) {
        return titulo.padEnd(MAX, "\u00A0");
    }

    return titulo;
}