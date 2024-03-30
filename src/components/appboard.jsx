import Forcast from "./forcast";
import SearchBar from "./searchbar";
import Weather from "./weather";

const AppBoard = () => {

  return (
    <div className="container">
      <div className="app_wrap">
        <SearchBar />
        <Weather />
        <Forcast/>
      </div>
    </div>
  )
}

export default AppBoard;