import { EditScore } from "./EditScore";

interface BookScoreProp {
    nota: number;
    id: string;
}

export function BookScore({nota, id}: BookScoreProp) {
    return ( 
        <div style={{ minWidth: "50px", textAlign: "center" }}>
            <EditScore 
                id={id}
                score={nota}
            />
        </div>
    )
}