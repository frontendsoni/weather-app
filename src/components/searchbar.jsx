
const SearchBar = ({city, setCity, handleSearch}) => {

  return (
    <div className="search_box">
      <input 
        type="text"
        value={city}
        placeholder="Search your city..."
        onChange={(e) => setCity(e.target.value)}
      />
      <div className="serach_icon" onClick={handleSearch}>
       <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default SearchBar;