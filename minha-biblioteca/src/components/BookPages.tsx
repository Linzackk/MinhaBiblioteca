interface BookPagesProp {
    paginasTotais: number;
    paginasLidas: number;
}

export function BookPages({paginasTotais, paginasLidas}: BookPagesProp) {
    return (
        <div>
            <p>{paginasLidas} / {paginasTotais}</p>
        </div>
    )
}