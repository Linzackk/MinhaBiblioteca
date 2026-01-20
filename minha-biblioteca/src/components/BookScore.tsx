interface BookScoreProp {
    nota: number;
}

export function BookScore({nota}: BookScoreProp) {
    return ( 
        <div style={{ minWidth: "50px", textAlign: "center" }}>
            <p>{nota}</p>
        </div>
    )
}