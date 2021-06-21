function convert() {
    var BTC2USD = 0;
    var date = document.getElementById("date").value;
    var BTC = parseFloat(document.getElementById("BTC").value);

    if (!BTC && typeof BTC != "undefined" && BTC != 0) { alert("請輸入金額！"); return; };
    BTC = BTC.toFixed(8);
    if (BTC < 0) { alert("輸入金額請大於零！"); return; }
    console.log(date);
    console.log(BTC);
    var url = "https://api.coindesk.com/v1/bpi/historical/close.json?start=" + before + "&end=" + date;
    console.log(url);
    fetch(url)
        .then((response) => {
            console.log(response)
            return response.json() //return response.text()
        }).then((myJson) => {
            //console.log(myJson);
            BTC2USD = myJson.bpi[date];
            BTC2USD = BTC2USD.toFixed(4);
            console.log(BTC2USD);
            var convert_money = BTC * BTC2USD;
            convert_money = convert_money.toFixed(4);
            var result_1 = BTC + "\t\t比特幣(BTC)\t≒\t\t" + convert_money + "\t\t美元(USD)";
            var result_2 = "1\t\t\tBTC = " + BTC2USD + "\t\t\tUSD";
            document.getElementById('result_1').textContent = result_1;
            document.getElementById('result_2').textContent = result_2;
        }).catch(function(err) {
            if ((Date.parse(date)).valueOf() < (Date.parse(today)).valueOf()) {
                alert(date + " 無紀錄！");
                return;
            }
            if ((Date.parse(date)).valueOf() >= (Date.parse(today)).valueOf()) {
                alert(date + " 匯率尚未更新！");
                return;
            }
        });;
}