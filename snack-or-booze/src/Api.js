import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {

  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }

  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }

  // add item to drinks or snacks depending on which is selected in form
  static async addItem(data){
    const {name, serve, recipe, description, id, select} = data;
    let newItem = {name, serve, recipe, description, id};
    await axios.post(`${BASE_API_URL}/${select}s`, newItem)
  }

}

export default SnackOrBoozeApi;
