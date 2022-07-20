import { useState } from "react"
import { AddCategory, GifGrid } from "../components";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Dragon Ball']);
  const [existCategorie, setExistCategorie] = useState('');

  const onAddCategory = (newCategory) => {
    setExistCategorie('')
    categories.find((category) => category === newCategory)
      ? setExistCategorie('Ya existe está categoria.')
      : setCategories([newCategory, ...categories])
    // setCategories(cat => ['Super Dragon', ...cat])
  }

  return (
    <>
      <h1 style={{textAlign: 'center'}}>Gif's App</h1>
      <h4>{existCategorie}</h4>
      <AddCategory
        onNewCategory={onAddCategory}
      />
      {categories.map((category) => (
        <GifGrid 
          key={category} 
          category={category} 
        />
      ))}
    </>
  )
}

export { GifExpertApp }