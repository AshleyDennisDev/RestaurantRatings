import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import BasicRating from "./Ratings";

export default function GetRestaurants() {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    fetch("https://bocacode-intranet-api.web.app/restaurants")
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch(alert);
  }, []);
  return (
    <div>
      {!restaurants ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <ul>
          {restaurants.map((restaurant) => {
            return <>
            <Card className="card" variant="outlined">
                <h2>{restaurant.name}</h2>
                <img src={restaurant.photoUrl} />
                <BasicRating 
                rating={restaurant.rating} 
                id={restaurant.id}
                setRestaurants={setRestaurants}/>
                </Card>
            </>
          })}
          </ul>
        </div>
      )}
    </div>
  );
}
