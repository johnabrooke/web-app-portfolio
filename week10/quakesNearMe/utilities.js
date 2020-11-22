export function getJSON(url) {
   return fetch(url)
        .then(res => {
            if (!res.ok) {
                throw Error(res.statusText);
            } else {
                return res.json();
            }
        })
        .catch(error => console.log(error))
        .then(data => console.log(data));
}

export const getLocation = function(options) {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};

//export const getLocation = location();
console.log(getLocation());