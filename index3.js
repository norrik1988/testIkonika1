"use strict";
//callback
function getData(callback) {
    setTimeout(() => {
        const data = 'Some data';
        callback(data);
    }, 1000);
}
getData((data) => {
    console.log(data);
});
