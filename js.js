'use strict'

let container = document.getElementById('tableinfo');
let table=document.createElement('table');
container.appendChild(table);

let tableContent= ['Site','Time','Max persons','Offer','More Details'];
let contArr=[];
function booking (cityname,time,maxpersons,offer,link){
    this.cityname=cityname;
    this.maxpersons=maxpersons;
    this.time=time;
    this.offer=offer;
    this.link=link;
    console.log(this);
    contArr.push(this);
    console.log(contArr);
}

let petra=new booking('Petra','6:30 am',7,'50 JD','link');
let WadiRum=new booking('Wadi Rum','7:30 am',10,'40 JD','link');
let Aqaba=new booking('Aqaba','7:00 am',12,'35 JD','link');
let WadiMujib=new booking('Wadi Mujib','7:00 am',14,'35 JD','link');
let DeadSea=new booking('DeadSea','7:00 am',15,'30 JD','link');


function headerrow(){
    let frow=document.createElement('tr');
    table.appendChild(frow);
     let th=null;
    for(let i=0;i<5;i++)
    {
      th=document.createElement('th');
      frow.appendChild(th);
      th.textContent=tableContent[i];
    }
  }
  headerrow();

booking.prototype.render = function(){
    let rdata=document.createElement('tr');
    table.appendChild(rdata);
    let th=null;
    th=document.createElement('th');
    rdata.appendChild(th);
    th.textContent=this.cityname;
    let td=null;
    td=document.createElement('td');
    rdata.appendChild(td);
    td.textContent=this.time;
    td=document.createElement('td');
    rdata.appendChild(td);
    td.textContent=this.maxpersons;
    td=document.createElement('td');
    rdata.appendChild(td);
    td.textContent=this.offer;
    td=document.createElement('td');
    rdata.appendChild(td);
    td.textContent=this.link;

};
petra.render();
WadiRum.render();
WadiMujib.render();
Aqaba.render();
DeadSea.render();
