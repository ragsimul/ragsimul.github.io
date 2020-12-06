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

  /*
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
  }*/

  document.getElementById("classChar").src = mainchar;

  for(var i=0; i< classImgNum.length; i++){
    if (mainchar === classImgNum[i]){
      className.innerHTML = classNameEN[i];
      document.getElementById("classtree").dataset.skillsrc = classSkilltree[i];
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

function includeHTML(callback) {
  var z, i, elmnt, file, xhr;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("data-skillsrc");
    //console.log(file);
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "아직 업데이트 되지 않았습니다!";
          }
          /*remove the attribute, and call this function once more:*/
          /*elmnt.removeAttribute("data-skillsrc");*/
          includeHTML();
          break;
        }
      };
      xhr.open("GET", file, true);
      xhr.send();
      /*exit the function:*/
      return;
    }
  }
}
