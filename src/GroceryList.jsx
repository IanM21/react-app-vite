import { GroceryItem } from "./GroceryItem"

export function GroceryList({ grocery, toggleGrocery, deleteGrocery }) {
    return (
        <ul className="list">
        {grocery.length === 0 && <li className="empty">No grocerys</li>}
        {grocery.map(grocery => {
            return <GroceryItem {...grocery} key={grocery.id} 
            toggleGrocery={toggleGrocery} deleteGrocery={deleteGrocery}/>
        })}
    </ul>
)}