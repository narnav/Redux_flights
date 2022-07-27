import axios from "axios";
const MY_SERVER = " http://localhost:3005/flights/";

export function getFlights() {
  return new Promise((resolve) =>
    axios(MY_SERVER).then((res) => resolve({ data: res.data }))
  );
}

export function addFlight(newFlight) {
  return new Promise((resolve) =>
    axios.post(MY_SERVER, newFlight).then((res) => resolve({ data: res.data }))
  );
}

export function deleteFlight(newFlight) {
  return new Promise((resolve) =>
    axios.post(MY_SERVER, newFlight).then((res) => resolve({ data: res.data }))
  );
}

export function updFlight(newFlight, id) {
  return new Promise((resolve) =>
    axios
      .put(MY_SERVER + id, newFlight)
      .then((res) => resolve({ data: res.data }))
  );
}
