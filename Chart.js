src = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js";
var date = new Date();
var before = new Date(date - 30 * 1000 * 60 * 60 * 24);
var day = ("0" + before.getDate()).slice(-2);
var month = ("0" + (before.getMonth() + 1)).slice(-2);
before = before.getFullYear() + "-" + (month) + "-" + (day);
var url = "https://api.coindesk.com/v1/bpi/historical/close.json?start=" + before + "&end=" + today;
console.log(before);
//console.log(url);
fetch(url)
    .then((response) => {
        console.log(response)
        return response.json() //return response.text()
    }).then((myJson) => {
        var record = myJson.bpi;
        var yValues = Object.values(record);
        var xValues = Object.keys(record);
        console.log(yValues);
        console.log(xValues);
        //Chart-------------------
        var ctx = document.getElementById('myChart');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: xValues,
                color: '#666',
                datasets: [{
                    label: '近30日歷史匯率',
                    data: yValues,
                    fill: false,
                    borderColor: 'rgb(65,80,127)',
                    backgroundColor: 'rgb(167, 183, 233)',
                }],
            }
        });
        ///Chart--------------------
    }).catch(function(err) {
        return;
    });;