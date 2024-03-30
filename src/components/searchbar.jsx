
const SearchBar = () => {

  return (
    <div className="search_box">
      <input 
        type="text"
        placeholder="Search your city..."
      />
      <div className="serach_icon">
       <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default SearchBar;