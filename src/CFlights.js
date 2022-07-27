import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFlights, getFlightsAsync,addFlightAsync,updFlightAsync } from "./app/flightSlice";

const CFlights = () => {
  const myFlights = useSelector(selectFlights);
  const dispatch = useDispatch();
  const [companyName, setCompanyName] = useState("");
  const [destination, setDestination] = useState("");
  useEffect(() => {
    dispatch(getFlightsAsync());
  }, []);

  return (
    <div>
      <div style={{ backgroundColor: "cyan" }}>
        admin area.... Company
        <input onChange={(e) => setCompanyName(e.target.value)} />
        Destination
        <input onChange={(e) => setDestination(e.target.value)} />
        <button onClick={()=>dispatch(addFlightAsync({companyName:companyName,destination:destination }))}>Add flight</button>
      </div>
      <h1> ELALA - terminal </h1>
      {myFlights.length}
      {myFlights.map((flight, i) => (
        <div key={i}>
          {flight.destination}, {flight.companyName} , {flight.id}<button onClick={()=>dispatch(updFlightAsync({
              destination:destination,
              companyName:companyName,
              id:flight.id
          }))}>Update</button>
        </div>
      ))}
    </div>
  );
};

export default CFlights;
