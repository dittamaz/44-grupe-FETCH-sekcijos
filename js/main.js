const ulDOM = document.querySelector('ul');

const data = fetch('https://raw.githubusercontent.com/front-end-by-rimantas/44-grupe-portfolio/master/data/servicesData.js')
    .then((response) => {
    return response.text();
})
.then((data) => {
    for(const user of data) {
        console.log(user);
    }
});