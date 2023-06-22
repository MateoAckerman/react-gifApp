import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifMasterApp = () => {

    const [categories, setCategories] = useState(['Sword Art Online']);
    const [newCategory, setNewCategory] = useState('');
    const [deletedCategory, setDeletedCategory] = useState('');

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) {
            return;
        }
        setCategories(prevCategories => [newCategory, ...prevCategories]);
        setNewCategory('');

    };

    const onDeleteCategory = (deletedCategory) => {
        console.info("categoria fuera", deletedCategory)
        const filteredCategories = categories.filter((item) => item !== deletedCategory)
        setCategories(filteredCategories)
    };

    console.log(categories);

    return (
        <>
            <h1>Gif Master App</h1>

            <AddCategory
                onNewCategory={onAddCategory}  // SAME >>> event => onAddCategory(event)
            />

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                        categories={categories}
                        onDeleteCategory={onDeleteCategory} />
                )
                )
            }

        </>
    )
}
