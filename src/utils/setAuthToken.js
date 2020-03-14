import axios from "axios";

const setAuthToken = token => {
  if (token) {
    // Set authorization header
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Remove token
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
