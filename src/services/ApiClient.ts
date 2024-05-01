import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "ea88c1587d1c4f3992a5c7938c74bda5",
  },
});
