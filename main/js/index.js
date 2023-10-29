// let x;
// var y;
// const z = 'z';

// function checkPositive(number) {
//     if (number > 0) {
//         return true;
//     }

//     return false;
// }

// checkPositive(10);


let getBooks = new Promise((resolve) => {
    resolve('Get books');
});

getBooks().then(data => console.log(data)).catch(err => console.log(err));