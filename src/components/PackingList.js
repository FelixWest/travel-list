import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  // sets the action btn to the text on "input"
  //  per default "Sort by input order"
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  // default settings
  if (sortBy === "input") sortedItems = items;

  // sort by description
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  // sort will have a boolean value where false = 0 true = 1
  // We sort according to number in order to get not packed
  // items = false , first followed by packed items
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>

      {/* The action btn which per default says "Sort by input order*/}
      <div className="actions">
        {/* Sort by current value input / description /  packed */}
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}
