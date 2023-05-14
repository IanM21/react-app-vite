export function GroceryItem({ completed, id, title, toggleGrocery, deleteGrocery }) {
    return (
        <li>
        <label>
            <input type="checkbox" 
            value={completed}
            onChange={e => {toggleGrocery(id, e.target.checked)}}
            />
            {title}
        </label>
        <button onClick={() => deleteGrocery(id)} className="btn btn-danger">Delete</button>
        </li>
    )
}