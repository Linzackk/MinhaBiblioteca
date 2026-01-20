interface BookImgProp {
    capa: string,
    titulo: string,
}

export function BookImg({capa, titulo}: BookImgProp) {
    return (
        <img 
            src={capa} 
            alt={titulo} 
            style={{ width: "50px", height: "70px", objectFit: "cover" }} 
        />
    )
}