import APIRequest from "../utils/config/axios.config";

export async function getJoke() {
  await new Promise((r) => setTimeout(r, 1000));
  return APIRequest.get('/', {
    validateStatus: function(status) {
      return status < 500
    }
  }); 
}