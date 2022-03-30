let pe = 0.0;
let ev = 0.0;
let ebitda = 0.0;
let evebitda = 0.0;
let tkrEl = document.getElementById("tkr")
let peEl = document.getElementById("pe")
let evEl = document.getElementById("ev")
let ebitdaEl = document.getElementById("ebitda")
let evebitdaEl = document.getElementById("ev/ebitda")
let betaAnalEl = document.getElementById("beta-anal")
let peAnalEl = document.getElementById("pe-anal")
let evAnalEl = document.getElementById("ev-anal")
let epsAnalEl = document.getElementById("eps-anal")
let concEl = document.getElementById("conc")

function enterValues() {
    var str1 = document.getElementById("ticker").value;
    var str2 = parseInt(document.getElementById("bid").value);
    var str3 = parseInt(document.getElementById("market-cap").value);
    var str4 = parseInt(document.getElementById("beta").value);
    var str5 = parseInt(document.getElementById("eps").value);
    var str6 = parseInt(document.getElementById("net-incomes").value);
    var str7 = parseInt(document.getElementById("interest").value);
    var str8 = parseInt(document.getElementById("taxes").value);
    var str9 = parseInt(document.getElementById("depreciation").value);
    var str10 = parseInt(document.getElementById("amortization").value);
    var str11 = parseInt(document.getElementById("net-debt").value);
    var str12 = parseInt(document.getElementById("cash-and-equivalents").value);
    pe = str2 / str5;
    ebitda = str7 + str8 + str9 + str10;
    ev = str3 + str11 - str12;
    evebitda = ev / ebitda;

    tkrEl.textContent = "Stock: " + str1;
    peEl.textContent = "PE Ratio: " + pe;
    ebitdaEl.textContent = "EBITDA: " + ebitda;
    evEl.textContent = "EV: " + ev;
    evebitdaEl.textContent = "EV/EBITDA: " + evebitda;

    if (str4 >= 1.5) {
        betaAnalEl.textContent = "There is high correlation with the market AND high volatility, indicating that " + str1 + " is a riskier stock."
    } else if (str4 < 1.5 && str4 >= 1) {
        betaAnalEl.textContent = "There is high correlation with the market but a similar volatility, indicating that " + str1 + " is an ideal stock risk-wise.";
    } else if (str4 < 1 && str4 > 0) {
        betaAnalEl.textContent = "There is high correlation with the market AND a similar volatility to the market, indicating that " + str1 + " is a less risky stock.";
    } else if (str4 == 0) {
        betaAnalEl.textContent = "There is no true correlation between " + str1 + " and the market.";
    } else if (str4 < 0 && str4 >= 1) {
        betaAnalEl.textContent = "There is an inverse correlation between the market and " + str1 + ", but lower risk associated with " + str1 + "."
    } else if (str4 <= -1) {
        betaAnalEl.textContent = "There is a strong inverse correlation with the market AND high volatility, indicating that " + str1 + " is a riskier stock."
    }

    if (pe <= 25 && pe >= 20) {
        peAnalEl.textContent = str1 + " is in the range for the average PE Ratio";
    } else if (pe > 25) {
        peAnalEl.textContent = str1 + " has a P/E ratio that is too large to be considered good. This indicates that you are paying much more for each share.";
    } else if (pe < 20) {
        peAnalEl.textContent = str1 + " has a low P/E ratio, indicating that it is good for buyers.";
    }

    if (evebitda <= 10) {
        evAnalEl.textContent = str1 + " has a good EV/EBITDA ratio. This indicates that " + str1 + " is potentially undervalued.";
    } else if (evebitda > 10) {
        evAnalEl.textContent = str1 + " is potentially overpriced. This indicates that " + str1 + " may be overvalued."
    }


    if (str5 >= 13) {
        epsAnalEl.textContent = str1 + " trades at " + str5 + " times earnings. This is above the S&P average which ranges from 13 to 15. This indicates that " + str1 + " may be a good buy.";
    } else if (str5 < 13) {
        epsAnalEl.textContent = str1 + " trades at " + str5 + " times earnings. This is less than the S&P average which ranges from 13 to 15. This indicates that " + str1 + " may not be a good buy since you will receive less earnings per share.";
    }

    if (evebitda <= 10 && pe < 20 && str4 <= 1.5 && str4 > 0 && str5 >= 13) {
        concEl.textContent = "After taking into account EV/EBITDA, Price to Earnings Ratio, Beta, and Earning per Share, " + str1 + " appears to be a really good buy as determined from its beta, P/E ratio, and EV/EBITDA.";
    } else if (evebitda <= 10 || pe < 20 || str4 <= 1.5 && str4 > 0 || str5 >= 13) {
        concEl.textContent = "After taking into account EV/EBITDA, Price to Earnings Ratio, Beta, and Earning per Share, " + str1 + " needs to be examined through current events to see if this is a good purchase. It appears that " + str1 + " has a good beta, P/E ratio, or EV/EBITDA.";
    } else {
        concEl.textContent = "After taking into account EV/EBITDA, Price to Earnings Ratio, Beta, and Earning per Share, " + str1 + " does not appear to be a good buy. It is necessary to review current events about the stock to determine if it will be a good investment or not.";

    }






}