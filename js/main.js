const ulDOM = document.querySelector('ul');

const data = fetch('')
    .then((response) => {
    return response.js();
})
.then((data) => {
    for(const user of data) {
        console.log(user);
    }
});