import React, { useState } from "react"

export function NewGroceryForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("")
    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return
        onSubmit(newItem)

        setNewItem("")
    }

    return <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row"></div>
    <label htmlFor="item">New Item</label>
    <input 
    value={newItem} 
    onChange={e => setNewItem(e.target.value)}
    type="text" 
    id="item"/>
    <button className="btn" type="submit">Add</button>
  </form>
}