import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RestaurantCard from "../components/RestaurantCard";

export default function HomePage() {
   const navigate = useNavigate();
   const [places, setPlaces] = useState([]);

   useEffect(() => {
      async function getData() {
         const response = await fetch("./data/da_places.json");
         const data = await response.json();
         setPlaces(data);
      }
      getData();
   }, []);
   console.log(places);

   function handleClick(){
      navigate("/udforsk")
   }
   
      
 


   return (
      <div className="homepage">
         <h1>Velkommen til</h1>
         <img src="" alt="Aarhus Street Food" />
         <div>
            <p>
               Lyst til at prøve noget nyt? Prøv vores nye <span onClick={handleClick}>discover</span> funktion og find din nye yndlingsret
            </p>
            <button onClick={handleClick}>Prøv den her</button>
         </div>
         <div>
            <h2>Ugens udvalgte boder</h2>
         </div>
         
            {places.map(place => (
              <RestaurantCard key={place.id} place={place}/>
              
            ))}
         </div>
    
   );
}