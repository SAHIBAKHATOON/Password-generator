import { useState } from "react";

export function useForm(initialValue){
    const [values, setValues] = useState(initialValue);

    return [
        values,
        (e) => {
            setValues({
                ...values,
                [e.target.name] : 
                e.target.type === "checkbox" ? e.target.checked :
                e.target.value
            })
        }
    ]
}