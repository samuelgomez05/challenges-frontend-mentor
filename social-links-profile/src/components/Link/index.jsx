const Link = ({ text }) => {
  return (
    <a className="bg-grey-700 hover:bg-green hover:text-grey-700 rounded-lg p-3 text-sm font-bold transition-colors duration-300" href="#">{text}</a>
  )
}

export default Link