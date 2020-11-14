/*eslint-env browser*/
var className = document.getElementById("className");
var char = document.getElementById("charlist");

var baseLV = document.getElementById('baseLV');
var jobLV = document.getElementById('jobLV');
var statpoint = document.getElementById('StatPoint');

var tstat = document.getElementById('tstat');
var tstatToggle = document.getElementById('tstatTog');
var tstatpoint = document.getElementById('TStatPoint');


var minLV_fisrt = 1;
var maxLV_first = 99;
var maxLV_third = 200;
var maxLV_fourth = 250;
var statcost = 48;

function changeClass(mainchar) {
  if (char.style.display ==="none"){
    char.style.display = "block";
  }else{
    char.style.display = "none";
    nv.style.display = "none";
    sw.style.display = "none";
    ma.style.display = "none";
    me.style.display = "none";
    ac.style.display = "none";
    th.style.display = "none";
    ar.style.display = "none";
    ta.style.display = "none";
    ni.style.display = "none";
    gu.style.display = "none";
  }

  document.getElementById("classChar").src = mainchar;

  for(var i=0; i< classImgNum.length; i++){
    if (mainchar === classImgNum[i]){
      className.innerHTML = classNameEN[i];
      if(fourthClasses.includes(className.innerHTML)){
        baseLV.value = maxLV_third;
        jobLV.value = '1';
        tstatcost = tstat_obtain[baseLV.value-maxLV_third];
        document.getElementById('tstat').style.display = "block";
        tstatToggle.classList.remove("fa-angle-double-down");
        tstatToggle.classList.add("fa-angle-double-up");
        defaultstat();
      }else if(thirdClasses.includes(className.innerHTML)){
        baseLV.value = maxLV_first;
        jobLV.value = '1';
        document.getElementById('tstat').style.display = "none";
        defaultstat();
      }else if(thirdEXClasses.includes(className.innerHTML)){
        baseLV.value = maxLV_first;
        jobLV.value = '1';
        document.getElementById('tstat').style.display = "none";
        defaultstat();
      }else if(secondtrClasses.includes(className.innerHTML)){
        baseLV.value = '1';
        jobLV.value = '1';
        document.getElementById('tstat').style.display = "none";
        defaultstat();
      }else if(noviceEXClasses.includes(className.innerHTML)){
        baseLV.value = '45';
        jobLV.value = '1';
        document.getElementById('tstat').style.display = "none";
        defaultstat();
      }else{
        baseLV.value = '1';
        jobLV.value = '1';
        document.getElementById('tstat').style.display = "none";
        statBonusAdj();
        statLVAdj();
        defaultstat();
      }
      break;
    }else{
      className.innerHTML = "끄아앙";
    }
  }
}




function classClick() {
  char.style.display = "block";
}

function nvOver() {
  if (char.style.display ==="block"){
    nv.style.display = "block";
  }else{
    char.style.display = "none";
  }
}
function nvOut() {
  nv.style.display = "none";
}
function swOver() {
  if (char.style.display ==="block"){
    sw.style.display = "block";
  }else{
    char.style.display = "none";
  }
}
function swOut() {
  sw.style.display = "none";
}
function maOver() {
  if (char.style.display ==="block"){
    ma.style.display = "block";
  }else{
    char.style.display = "none";
  }
}
function maOut() {
  ma.style.display = "none";
}

function meOver() {
  if (char.style.display ==="block"){
    me.style.display = "block";
  }else{
    char.style.display = "none";
  }
}
function meOut() {
  me.style.display = "none";
}

function acOver() {
  if (char.style.display ==="block"){
    ac.style.display = "block";
  }else{
    char.style.display = "none";
  }
}
function acOut() {
  ac.style.display = "none";
}
function thOver() {
  if (char.style.display ==="block"){
    th.style.display = "block";
  }else{
    char.style.display = "none";
  }
}
function thOut() {
  th.style.display = "none";
}
function arOver() {
  if (char.style.display ==="block"){
    ar.style.display = "block";
  }else{
    char.style.display = "none";
  }
}
function arOut() {
  ar.style.display = "none";
}
function taOver() {
  if (char.style.display ==="block"){
    ta.style.display = "block";
  }else{
    char.style.display = "none";
  }
}
function taOut() {
  ta.style.display = "none";
}
function niOver() {
  if (char.style.display ==="block"){
    ni.style.display = "block";
  }else{
    char.style.display = "none";
  }
}
function niOut() {
  ni.style.display = "none";
}

function guOver() {
  if (char.style.display ==="block"){
    gu.style.display = "block";
  }else{
    char.style.display = "none";
  }
}
function guOut() {
  gu.style.display = "none";
}



function displayTstat() {
    if(tstat.style.display === "none") {
        tstat.style.display = "block";
        tstatToggle.classList.remove("fa-angle-double-down");
        tstatToggle.classList.add("fa-angle-double-up");


  }else{
    tstat.style.display = "none";

    tstatToggle.classList.remove("fa-angle-double-up");
    tstatToggle.classList.add("fa-angle-double-down");
  }
}


function defaultstat(){
  statBonusAdj();
  statLVAdj();
  statreset();
  tstatreset();
  if(fourthClasses.includes(className.innerHTML)){
    tstatBonusAdj();
  }
}
