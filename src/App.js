
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [text, setText] = useState("")

  // const axios = require("axios");
  // useEffect(() => {
      // setInterval(() => {
       const handleSubmit=(e)=>{
        e.preventDefault();
        const getData = async () => {
          try {
            const res = await axios.get(
              `https://restcountries.com/v3.1/name/${text}`
              
            );
            console.log(res)
        setResults(res.data)
        setLoading(false)
          } catch (error) {
            console.log(error);
          }
        };
        getData()}
      // }, 5);
      
    //  var monObjet = {el.languages}
      // const monTableau = Object.keys(monObjet).map(function(cle) {
      //       monObjet[cle]
      //     });
    // }, );
  return (
    <div className="App">
      <div className='container'>
     <form  action="" onSubmit={handleSubmit} >
       <input type="text"
        value={text} 
        placeholder ="Enter name of counter here..."
        onChange={(e)=>setText(e.target.value)} />
        <button>Search</button>
        </form>
     {
      loading? <h2>loading...</h2>
      : results.map(el=>
      <div className='body'> 
      <img  width={"45%"} src={el.flags.png} alt=""/> 
      <h1>  {el.name.common} </h1>
      <div className='title'>
       <div className='mini-title'>
          <h3> Capital : </h3>
          <span>{el.capital} </span>
       </div>
       </div>
       <div className='title'>
       <div className='mini-title'>
        <h3> Region : </h3>
          <span>{el.region}</span>
          </div>
       </div>
          {/* <h2> currencies: </h2>
       { Object(el.currencies).map(el=>
          <h2>  {el}  </h2>
        )} */}
      
      <div className='title'>
       <div className='mini-title'>
        <h3> languages: </h3>
           {Object.values(el.languages).map(el=>
          <span>  {el}  </span>
          )}
          </div> 
       
       <a href={el.maps.openStreetMaps} target="_blank" > Open Maps    </a>
       
      </div> 
      </div>
      )
    }
    </div>
    </div>
  );

}

// console.log(monTableau);
 

export default App;