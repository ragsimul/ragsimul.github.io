var twohandquicken = 0, counterattack = 0, pecopecoride = 0, spearmastery = 0, bowlingbash = 0, cavaliermastery = 0, pierce = 0, spearboomerang = 0, spearstab = 0, brandishspear = 0;
var secondskillpoints = 0;

document.getElementById("TwoHandQuicken").addEventListener('click',function (e) {
  e.preventDefault();
  if (swordmastery < 1 && twohandedswordmastery < 1){
    swordmastery = 1;
    twohandedswordmastery = 1;
    firstSPcal();
  }
  var num = Number(document.getElementById("TwoHandQuickenP").innerHTML);
  if(num >= 10) return false;
  twohandquicken = num + 1 ;
  secondSPcal();
});

document.getElementById("TwoHandQuicken").addEventListener('contextmenu',function (e) {
  e.preventDefault();
  var num = Number(document.getElementById("TwoHandQuickenP").innerHTML);
  if(num <= 1){
    if(twohandedswordmastery >= 1){
      twohandedswordmastery = 0;
    }
  }
  if(num <= 0)return false;
  twohandquicken = num - 1 ;
  secondSPcal();
});
document.getElementById("TwoHandQuicken").addEventListener('mousewheel',function (e) {
  e.preventDefault();
  var num = Number(document.getElementById("TwoHandQuickenP").innerHTML);
  if(e.wheelDeltaY > 0){
    if(num >= 10) return false;
    twohandquicken = num + 1 ;
  }else if(num <= 1){
    if(num <= 0) return false;
    twohandquicken = num - 1 ;
    twohandedswordmastery = 0;
  }else{
    if(num <= 0) return false;
    twohandquicken = num - 1 ;
  }secondSPcal();
});



var remainSP = 49;
function secondSPcal(){
  secondskillpoints = remainSP - twohandquicken;
  document.getElementById("secondskillpoints").innerHTML = secondskillpoints;
  document.getElementById("TwoHandQuickenP").innerHTML = twohandquicken;


  if(secondskillpoints < 0){
    document.getElementById("secondskillpoints").style.color = "red";
  }else {
    document.getElementById("secondskillpoints").style.color = "black";
  }
}
