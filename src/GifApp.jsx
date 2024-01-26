import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifApp = () => {
  const [categories, setCategories] = useState(['Game of Thrones', 'The Lord of the Rings']);

  const onAddCategory = (newCategory) =>{
    setCategories([newCategory, ...categories])
  }

  return (
    <>
    <h1>GIF APP</h1>
    <AddCategory
    onNewCategory ={onAddCategory}
    />
    <ol>
    {
      categories.map((category) =>(
        <li key={category}>{category}</li>
      ))
    }
    </ol>
    
    </>
  )
}
