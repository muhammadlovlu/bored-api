// function generatePassword() {
//     fetch("https://randomuser.me/api/?password=special,32")
//         .then(res => res.json())
//         .then(data => {
//             const password = document.getElementById('password');
//             password.innerText = data.info.seed;
//         })
// }
// generatePassword();
// setInterval(() => {
//     generatePassword();
// }, 1000);




fetch("https://randomuser.me/api")
.then (res => res.json())
.then(data => {
    console.log(data)
})

function userNameCall() {
    fetch("https://randomuser.me/api")
        .then(res => res.json())
        .then(data => {
            const firstName = document.getElementById("first-name");
            firstName.innerText = data.results[0].name.first;
            const lastName =document.getElementById("last-name");
            lastName.innerText = data.results[0].name.last;
            const city = document.getElementById("city");
            city.innerText = data.results[0].location.city;

        })
    }
    userNameCall();