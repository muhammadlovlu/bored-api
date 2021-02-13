fetch("http://www.boredapi.com/api/activity/")
.then(response => response.json())
.then(data =>{
   document.getElementById('headerAutomate').innerText = data.activity;
   setInterval(() => {
       
   }, 10000);
})
