const List = ({ ordered, children }) => {
  return (
    ordered ? (
      <ol className="flex flex-col gap-2 text-stone-600">
        {children}
      </ol>
    ) : (
      <ul className="flex flex-col gap-2 text-stone-600">
        {children}
      </ul>
    )
  );
}

export default List