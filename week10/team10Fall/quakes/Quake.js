import { getJSON } from './utilities.js';
// Quake Model
export default class Quake {
  constructor() {
    this.baseUrl =
      'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-01-01&endtime=2020-11-21';
    // this is where we will store the last batch of retrieved quakes in the model.  I don't always do this...
    // in this case the api doesn't have an endpoint to request one quake.
    this._quakes = [];
  }
  async getEarthQuakesByRadius(position, radius = 100) {
    // use the getJSON function and the position provided to build out the correct URL to get the data we need.  
    // Store it into this._quakes, then return it
    const query =
      this.baseUrl +
      `&latitude=${position.lat}&longitude=${position.lon}&maxradiuskm=${radius}`
      console.log(query);
    //getJSON(`${this.baseUrl}$latitude=${position.latitude}&longitude=${position.longitude}&maxradiuskm=${radius}`);
      this._quakes = await getJSON(query);
    return this._quakes;


    //https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02 &latitude=43.814540699999995&longitude=-111.7849102999999 maxradiuskm=100
  }
  getQuakeById(id) {
    // filter this._quakes for the record identified by id and return it
    return this._quakes.features.filter(item => item.id === id)[0];
  }
}