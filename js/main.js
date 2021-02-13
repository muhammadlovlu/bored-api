fetch("http://www.boredapi.com/api/activity/")
.then(response => response.json())
.then(data => {
  console.log(data);
})


///////////////////////////////////////////////
function executeAutomate() {
    fetch("http://www.boredapi.com/api/activity/")
        .then(response => response.json())
        .then(data => {
            document.getElementById('headerAutomate').innerText = "Activity:" + " " + data.activity;
        })
}
executeAutomate();
setInterval(() => {
    executeAutomate();
}, 10000);



// Type  data collection
function typeAutomate(){
    fetch("http://www.boredapi.com/api/activity/")
.then(res => res.json())
.then(data => {
   const newType = document.getElementById('data-type');
    newType.innerText = data.type; 
})
}
typeAutomate();
setInterval(() => {
    typeAutomate()
}, 1000);