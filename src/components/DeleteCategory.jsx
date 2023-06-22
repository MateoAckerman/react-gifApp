import { useState } from "react"

export const DeleteCategory = ({ category, onDeleteCategory }) => {

    console.info("props button", category)

    // const onClick = (event) => {
    //     event.preventDefault();
    // }

    return (
        <button onClick={() => onDeleteCategory(category)}> Eliminar Categoria </button>
    )
}