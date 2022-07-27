import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFlights,
  getFlightsAsync,
  addFlightAsync,
  updFlightAsync,
  deleteFlightAsync,
} from "./app/flightSlice";
import { selectlogin, selectToken, selectUsername } from "./app/loginSlice";

const CFlights = () => {
  const myFlights = useSelector(selectFlights);
  const myToken = useSelector(selectToken);
  const loginStatus = useSelector(selectlogin);
  const userName = useSelector(selectUsername);
  const dispatch = useDispatch();
  const [companyName, setCompanyName] = useState("");
  const [destination, setDestination] = useState("");
  const [search, setSearch] = useState("");
  const [srcCompany, setsrcCompany] = useState("");
  useEffect(() => {
    dispatch(getFlightsAsync());
  }, []);

  return (
    <div>
      <h1> {userName}</h1>
      {loginStatus ? "u r logged" : "need 2 log"}
      {/* {myToken} */}
      <div style={{ backgroundColor: "cyan" }}>
        admin area.... Company
        <input onChange={(e) => setCompanyName(e.target.value)} />
        Destination
        <input onChange={(e) => setDestination(e.target.value)} />
        <button
          onClick={() =>
            dispatch(
              addFlightAsync({
                companyName: companyName,
                destination: destination,
              })
            )
          }
        >
          Add flight
        </button>
      </div>
      <h1> ELALA - terminal </h1>
      Search : <input onChange={(e) => setSearch(e.target.value)} />
      srcCompany : <input onChange={(e) => setsrcCompany(e.target.value)} />
      {myFlights.length}
      {myFlights
        .filter(
          (x) =>
            x.destination.includes(search) && x.companyName.includes(srcCompany)
        )
        .map((flight, i) => (
          <div key={i}>
            {flight.destination}, {flight.companyName} , {flight.id}
            <button
              onClick={() =>
                dispatch(
                  updFlightAsync({
                    destination: destination,
                    companyName: companyName,
                    id: flight.id,
                  })
                )
              }
            >
              Update
            </button>
            <button
              onClick={() => dispatch(deleteFlightAsync({ id: flight.id }))}
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default CFlights;
