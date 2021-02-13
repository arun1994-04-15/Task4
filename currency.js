var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
    var currency = data.filter((item)=>
    {
        if(item.currencies[0].code=='USD')
        {
            return item.name;
        }
    })
    console.log(currency);
}