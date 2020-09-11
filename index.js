// AccountValue = investment + investment * interest rate

function getAccountValue(principal, interestRate, afterYear) {
    return (principal * (Math.pow(1 + interestRate, afterYear))).toFixed(2);
}

function getTable() {
    let rate1 = document.getElementById('rate1').value * .01;
    let rate2 = document.getElementById('rate2').value * .01;
    let rate3 = document.getElementById('rate3').value * .01;
    let rate4 = document.getElementById('rate4').value * .01;

    let return1 = [...Array(5).keys()].map(x => {
        return getAccountValue(5000, rate1, x);
    });
    let return2 = [...Array(5).keys()].map(x => {
        return getAccountValue(5000, rate2, x);
    });
    let return3 = [...Array(5).keys()].map(x => {
        return getAccountValue(5000, rate3, x);
    });
    let return4 = [...Array(5).keys()].map(x => {
        return getAccountValue(5000, rate4, x);
    });

    let tableArea = document.getElementById("interestTable");

    let investTable = document.createElement("table");
    investTable.setAttribute("class", "table table-striped");

    let thead = document.createElement("thead");
    let theadTR = document.createElement("tr");
    let th1 = theadTR.appendChild(document.createElement("th"));
    let th2 = theadTR.appendChild(document.createElement("th"));
    let th3 = theadTR.appendChild(document.createElement("th"));
    let th4 = theadTR.appendChild(document.createElement("th"));
    let th5 = theadTR.appendChild(document.createElement("th"));

    th1.innerHTML = "Year";
    th2.innerHTML = Math.floor((rate1 * 100)) + "%";
    th3.innerHTML = Math.floor((rate2 * 100)) + "%";
    th4.innerHTML = Math.floor((rate3 * 100)) + "%";
    th5.innerHTML = Math.floor((rate4 * 100)) + "%";

    theadTR.prepend(th1, th2, th3, th4, th5);
    thead.appendChild(theadTR);

    let tbody = document.createElement("tbody");
    for (let i = 1; i < 5; i++) {
        let tbodyTR = document.createElement("tr");
        let tbodyTH1 = tbodyTR.appendChild(document.createElement("th"));
        let tbodyTH2 = tbodyTR.appendChild(document.createElement("th"));
        let tbodyTH3 = tbodyTR.appendChild(document.createElement("th"));
        let tbodyTH4 = tbodyTR.appendChild(document.createElement("th"));
        let tbodyTH5 = tbodyTR.appendChild(document.createElement("th"));

        tbodyTH1.innerHTML = i;
        tbodyTH2.innerHTML = return1[i];
        tbodyTH3.innerHTML = return2[i];
        tbodyTH4.innerHTML = return3[i];
        tbodyTH5.innerHTML = return4[i];

        tbodyTR.prepend(tbodyTH1, tbodyTH2, tbodyTH3, tbodyTH4, tbodyTH5);
        tbody.appendChild(tbodyTR);
    }
    investTable.appendChild(thead);
    investTable.appendChild(tbody);
    tableArea.appendChild(investTable);

}