const ItemList = ({ title, markerColor, ordered, number, children }) => {
  const unorderedClass = `size-1 block shrink-0 rounded-full bg-${markerColor}-800`
  const orderedClass = `shrink-0 self-start font-bold text-${markerColor}-800`
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