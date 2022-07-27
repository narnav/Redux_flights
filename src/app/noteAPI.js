import axios from "axios";
const MY_SERVER = "http://127.0.0.1:8000/api/notes/";

export function getnotes() {
  let token = localStorage.getItem("token");
  return new Promise((resolve) =>
    axios(MY_SERVER, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => resolve({ data: res.data }))
  );
}

export function addFlight(newFlight) {
  return new Promise((resolve) =>
    axios.post(MY_SERVER, newFlight).then((res) => resolve({ data: res.data }))
  );
}

export function deleteFlight(id) {
  return new Promise((resolve) =>
    axios.delete(MY_SERVER + id).then((res) => resolve({ data: res.data }))
  );
}

export function updFlight(newFlight, id) {
  return new Promise((resolve) =>
    axios
      .put(MY_SERVER + id, newFlight)
      .then((res) => resolve({ data: res.data }))
  );
}
