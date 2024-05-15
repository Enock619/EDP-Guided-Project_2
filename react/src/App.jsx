
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home'
import Films from './components/Films'
import { useState,useEffect } from 'react'
import {Routes,Route,Link} from "react-router-dom"


function App() {
  const [characters, setCharacters] = useState([]);
  const [films, setFilms] = useState([])
  useEffect(() => {
    const fetchCharacters = async () => {
        try {
            
            const response = await fetch('http://localhost:3000/api/characters');
            if (!response.ok) {
                throw new Error('Data could not be fetched!');
            }
            const json_response = await response.json();
            setCharacters(json_response); // assign JSON response to the data variable.
        } catch (error) {
            console.error('Error fetching socks:', error);
        }
    };
      const fetchFilms = async () =>{
        try {
            
          const response = await fetch('http://localhost:3000/api/Films');
          if (!response.ok) {
              throw new Error('Data could not be fetched!');
          }
          const json_response = await response.json();
          setFilms(json_response); // assign JSON response to the data variable.
      } catch (error) {
          console.error('Error fetching socks:', error);
      }
      }

    fetchCharacters();
    fetchFilms();
}, []);

  return (
    <>
        
           <Link to='/films'>
           < Home  characters={characters}/>
           </Link>
           <Route></Route>
           
          

           
    
    </>
  )
}

export default App
