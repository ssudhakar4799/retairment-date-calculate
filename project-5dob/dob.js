
// var date= new Date();
// console.log(date);
// var dob=date.getDate();
// var dob1=date.getFullYear();
// console.log(dob);
// button = document.getElementById('btn');
// button.addEventListener('click', dates);

// function dates() {
//     for(i=dob;i<=365;i++){
//         var days=i;
//         console.log(days);
//         var daterow=document.createElement('tr');
//         var datedata=document.createElement('td');
//         datedata.innerText=days;
//         daterow.appendChild(datedata);
//         console.log(daterow);
//         var table=document.getElementById('table');
//         table.appendChild(datedata);
//     }
//     for(i=dob1;i<=2080;i++){
//         var years=i;
//         var yearrow=document.createElement('tr');
//         var yeardata=document.createElement('td');
//         yeardata.innerText=years;
//         yearrow.appendChild(yeardata);

//         var table1=document.getElementById('table');
//         table1.appendChild(yearrow);

//     }

// }

var dob = document.getElementById("date");

var age = document.getElementById("number");
var button = document.getElementById("btn");
button.addEventListener("click", retirement);
var months = [
    {
        "month": "January",
        "days": 31
    },
    {
        "month": "Febuary",
        "days": 29
    },
    {
        "month": "March",
        "days": 31
    },
    {
        "month": "April",
        "days": 30
    },
    {
        "month": "May",
        "days": 31
    },
    {
        "month": "June",
        "days": 30
    },
    {
        "month": "July",
        "days": 31
    },
    {
        "month": "August",
        "days": 31
    },
    {
        "month": "Septemper",
        "days": 30
    },
    {
        "month": "October",
        "days": 31
    },
    {
        "month": "November",
        "days": 30
    },
    {
        "month": "December",
        "days": 31
    },
];
//console.log(months);

function retirement() {
    var d = new Date(dob.value);
    var year = d.getFullYear();
    var ageyear = parseInt(year) + parseInt(age.value);//alert(ageyear);
    //alert(months.length);
    var tblmonths = '';
    var tbldays = '';
    var tblyears = '';

    for (i = 0; i < months.length; i++) {
        tblmonths += '<td colspan="' + months[i].days + '" >' + months[i].month + '</td>';
        for (k = 1; k <= months[i].days; k++) {
            tbldays += '<td >' + k + '</td>';
        }
    }

    //document.getElementById("table").innerHTML = monthrow+daysrow ;
    for (j = year; j <= ageyear; j++) {
        //console.log(j);

        tblyears += '<tr id="years"><td >' + j + '</td>' + tbldays + '</tr>';
    }
    var monthrow = '<tr ><td></td>' + tblmonths + '</tr>';
    document.getElementById("table").innerHTML = monthrow + tblyears;

}