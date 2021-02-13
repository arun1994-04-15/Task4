var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
    var filters =data.filter((item)=>
    {
        if(item.population<200000)
        {
            return item.name;
        }
    });
    console.log(filters);
}