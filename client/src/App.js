import { useState, useEffect } from "react";
import Map from "./Map";
import MapInfo from "./MapInfo";
import  buttonArrow from './icon-arrow.svg'
function App() {
  const [searchValue, setSearchValue] = useState(localStorage.getItem("lastLocationSearched")??  "");
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const[error, setError] = useState(null)
   async function handleClick(){
    localStorage.setItem("lastLocationSearched", searchValue);
    setData(null);
    setIsPending(true);
    setError(null);
    try{
const value = await fetch(`http://localhost:8000/api?&ipAddress=${searchValue}`).then((response)=>{
  if (!response.ok){
        throw Error("Could not fetch the data for that resource");
                    }
  return response.json();
});
console.log(value);
setData(value);

    console.log(localStorage.getItem("lastLocationSearched"));
    } catch(error){
      setError(error.message);
    }

setIsPending(false);
  };

  useEffect(()=>{
        if ((localStorage.getItem("lastLocationSearched")===null)|| (localStorage.getItem("lastLocationSearched")==="")){
          console.log(localStorage.getItem("lastLocationSearched"));
        setSearchValue("");
        handleClick("");
        }else{
          
          setSearchValue(localStorage.getItem("lastLocationSearched"));
          handleClick();
        }
    }, []);

  return (
    <div className="App">
       <div className="main-page-div">
            <div className="title-and-searchbar">
                <h2 className='app-name'>IP Adress Tracker</h2>
                <div className="searchbar-and-button">
                    <input type="text" id="ip-search" name="ip-search" placeholder='Search for any IP address or domain'  value={searchValue} onKeyDown={(e)=>{if (e.key=== "Enter"){handleClick(searchValue)}}} onChange={(e)=>{setSearchValue(e.target.value)}}/>
                    <button className='search-button' onClick={()=>{handleClick(searchValue)
                    }}>
                        <img src={buttonArrow} alt="button arrow" className='button-arrow'/>
                    </button>
                </div>
                
            </div>
            

        </div>

     {data && <MapInfo mapData={data}/>}
             {isPending &&  <div className="map-info-deux"><i>Loading...</i></div>}
             {error && <div className="map-info-deux">{error}</div>}
 {data && <Map mapData={data}/>}
    </div>
  );
}

export default App;
