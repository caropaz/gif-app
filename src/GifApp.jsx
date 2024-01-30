import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifApp = () => {
  const [categories, setCategories] = useState(['Game of Thrones', 'The Lord of the Rings']);

  const onAddCategory = (newCategory) =>{
    setCategories([newCategory, ...categories])
  }

  return (
    <>
    <h1 className="titulo">GIF APP</h1>
    <AddCategory
    onNewCategory ={onAddCategory}
    />
    {
      categories.map((category) =>(
        <GifGrid key={category} category={category}/>
      ))
    }
    
    </>
  )
}
