var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
    var filters =data.reduce((sum,total)=>
    {
        let res = sum+total.population;
        return res;
    },0);
    console.log(filters);
}