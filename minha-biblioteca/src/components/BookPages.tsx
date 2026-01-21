import { EditPagesProgress } from "./EditPages";

interface BookPagesProp {
    paginasTotais: number;
    paginasLidas: number;
    id: string;
}

export function BookPages({paginasTotais, paginasLidas, id}: BookPagesProp) {
    return (
        <div>   
            <p>
                <EditPagesProgress id={id} paginasLidas={paginasLidas} paginasTotais={paginasTotais}/>
                <span>/</span>
                <span>{paginasTotais}</span>
            </p>
        </div>
    )
}