"use strict";
function getData2(callback) {
    setTimeout(() => {
        const data = 'Some data';
        callback(data);
    }, 10000);
}
getData2((data) => {
    console.log(data);
});
