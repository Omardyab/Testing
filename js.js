'use strict';
let container = document.getElementById('tableinfo');
let table=document.createElement('table');
container.appendChild(table);

let book = document.getElementById('book');
book.addEventListener('click',booknow);
function booknow(event){
  event.preventDefault();
  document.getElementById('bookingForm').style.display ='block';
}
let reserve = document.getElementById('bookingForm');
reserve.addEventListener('submit',handlesubmit);
function handlesubmit(event){
  event.preventDefault();
  const name1 = event.target.name1.value;
  const number1 = event.target.number1.value;
  new Continfo(name1,number1);
  console.log(Continfo.request);
}
function savToLs(){
  console.log('f is working');
  localStorage.setItem('requestconfirmed',Continfo.request);
  console.log(JSON.stringify(Continfo.request));
  let arrstr=JSON.stringify(Continfo.request);
  localStorage.setItem('requestconfirmed',arrstr);
  gettingrequest();
}
function gettingrequest(){

  let data = localStorage.getItem('requestconfirmed');
  console.log(data);
  let request = JSON.parse(data);
  if(request !== null){
    Continfo.request = request;
  }

  // alert('Thank you for booking wiht JOWonders, we have you request under process');
}
Continfo.request=[];

function Continfo(username,number1)
{
  this.username=username;
  this.number1=number1;
  Continfo.request.push(this);
  savToLs();
}
let tableContent= ['Site','Time','Max persons','Offer','More Details'];

function Booking (cityname,time,maxpersons,offer,link){
  this.cityname=cityname;
  this.maxpersons=maxpersons;
  this.time=time;
  this.offer=offer;
  this.link=link;
  console.log(this);
}

let petra=new Booking('Petra','6:30 am',7,'50 JD','link');
let WadiRum=new Booking('Wadi Rum','7:30 am',10,'40 JD','link');
let Aqaba=new Booking('Aqaba','7:00 am',12,'35 JD','link');
let WadiMujib=new Booking('Wadi Mujib','7:00 am',14,'35 JD','link');
let DeadSea=new Booking('DeadSea','7:00 am',15,'30 JD','link');


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

Booking.prototype.render = function(){
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
