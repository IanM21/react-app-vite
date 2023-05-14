import { useEffect, useState } from 'react'
import './styles.css'
import { NewGroceryForm } from './NewGroceryForm'
import { GroceryList } from './GroceryList'

export default function App() {
  const [grocery, setGrocerys] = useState(() => {
    const localValue = localStorage.getItem('ITEMS')
    if (localValue == null) return []
    
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(grocery))
  }, [grocery])
  
  function addGrocery(title) {
    setGrocerys(currentGrocerys => {
      return [
        ...currentGrocerys,
        {id: crypto.randomUUID(), title,completed: false}
      ]
    })
  }

  function toggleGrocery(id, completed) {
    setGrocerys(currentGrocerys => {
      return currentGrocerys.map(grocery => {
        if (grocery.id === id) {
          return {
            ...grocery, completed
          }
        }
        return grocery
      })
    })
  }

  function deleteGrocery(id) {
    setGrocerys(currentGrocerys => {
      return currentGrocerys.filter(grocery => grocery.id !== id)
    })
  }

  return <>
  <NewGroceryForm onSubmit={addGrocery} />
  <h1 className='header'>Grocery List</h1>
  <GroceryList grocery={grocery} toggleGrocery={toggleGrocery} deleteGrocery={deleteGrocery}/>
  </>
}