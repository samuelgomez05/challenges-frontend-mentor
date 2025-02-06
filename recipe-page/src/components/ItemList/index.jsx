const ItemList = ({ title, markerColor, ordered, number, children }) => {
  let markerColorUnordered = ""
  let markerColorOrdered = ""

  switch (markerColor) {
    case "rose":
      markerColorUnordered = "bg-rose-800"
      markerColorOrdered = "text-rose-800"
      break
    case "brown":
      markerColorUnordered = "bg-brown-800"
      markerColorOrdered = "text-brown-800"
      break
    default:
      markerColorUnordered = "bg-stone-600"
      markerColorOrdered = "text-stone-600"
      break
  }
  
  const unorderedClass = `size-1 block shrink-0 rounded-full ${markerColorUnordered}`
  const orderedClass = `shrink-0 self-start font-bold ${markerColorOrdered}`
  const classItemList = ordered ? orderedClass : unorderedClass

  return (
    <li className="flex items-center gap-6 px-2">
      <span className={classItemList}>
        { number !== undefined ? number + "." : "" }
      </span>
      <p>
        <span className="font-bold">{title}</span> {children}
      </p>
    </li>
  )
}

export default ItemList