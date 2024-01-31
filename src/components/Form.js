import { useState } from "react";

export default function Form({ onAddItems }) {
  /* 
  if we just after useState either hit enter or click on the suggestion
   "usestate" from autocomplete then the first line will be modified
   in order to fetch the useState and will look
   like this:import { useState } from "react"; */
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    // resets the "item" and "number" state back to default after adding an item
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      {/*Creates a form where we can pick a number from 1-20 */}
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          console.log(e.target.value);
          /* logs whatever we type into the search bar */

          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}
