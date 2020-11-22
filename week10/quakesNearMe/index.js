import {getJSON, getLocation} from './utilities.js';

const baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';
const position = await getLocation();
console.log(getLocation);

function success(getLocation) {
    const latitude = getLocation.Promise.GeolocationPosition.coords.latitude;
    console.log(latitude);
    const longitude = getLocation.GeolocationPosition.coords.longitude;
    const location = `${baseUrl}&latitude=${latitude}&longitude=${longitude}&maxradiuskm=100`;
    return location;
}

console.log(success());