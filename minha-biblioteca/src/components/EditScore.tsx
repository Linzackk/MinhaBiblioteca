import { useContext, useState } from "react";
import { BooksContext } from "../contexts/BooksContext";
import { maxScore } from "../util/utilNumbers";

interface EditScoreProp {
    score: number;
    id: string;
}

export function EditScore({score, id}: EditScoreProp) {
    const { updateScore } = useContext(BooksContext);

    const [editing, setEditing] = useState(false);
    const [tempScore, setTempScore] = useState(score);

    function startEdit() {
        setTempScore(score);
        setEditing(true);
    }

    function finishEdit() {
        let value = tempScore;

        if (value < 0) value = 0;
        if (value > maxScore) value = maxScore;

        setEditing(false)
        updateScore(id, value);
    }

    return (
        <>
            {editing ? (
                <input 
                    type="number"
                    value={tempScore}
                    autoFocus
                    onChange={(e) => setTempScore(Number(e.target.value))}
                    onBlur={finishEdit}
                    onKeyDown={(e) => e.key === "Enter" && finishEdit()}
                />
            ) : (
                <p onClick={startEdit}>
                    {score}
                </p>
            )}
        </>
    )
}