export default function Stats({ items }) {
  // This will display if no items are packed, this also prevents
  // the code just below from running
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list🚀 </em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You've got everything! Ready to go ✈️"
          : `🧳You have ${numItems} items on your list, 
        and you already packed ${numPacked} (${percentage}%) `}
      </em>
    </footer>
  );
}
