var swordmastery = 0, twohandedswordmastery = 0, bash = 0, magnumbreak= 0, increasehprecover = 0, provoke = 0, endure = 0;
var firstskillpoints = 0;


  document.getElementById("SwordMastery").addEventListener('click',function (e) {
    e.preventDefault();
    var num = Number(document.getElementById("SwordMasteryP").innerHTML);
    if(num >= 10) return false;
    swordmastery = num + 1 ;
    firstSPcal();
  });

  document.getElementById("SwordMastery").addEventListener('contextmenu',function (e) {
    e.preventDefault();
    var num = Number(document.getElementById("SwordMasteryP").innerHTML);
    if(num <= 1){
      if(twohandedswordmastery >= 1){
        twohandedswordmastery = 0;
      }
    }
    if(num <= 0)return false;
    swordmastery = num - 1 ;
    firstSPcal();
  });
  document.getElementById("SwordMastery").addEventListener('mousewheel',function (e) {
    e.preventDefault();
    var num = Number(document.getElementById("SwordMasteryP").innerHTML);
    if(e.wheelDeltaY > 0){
      if(num >= 10) return false;
      swordmastery = num + 1 ;
    }else if(num <= 1){
      if(num <= 0) return false;
      swordmastery = num - 1 ;
      twohandedswordmastery = 0;
    }else{
      if(num <= 0) return false;
      swordmastery = num - 1 ;
    }firstSPcal();
  });


  document.getElementById("TwoHandedSwordMastery").addEventListener('click',function (e) {
    e.preventDefault();
    if (swordmastery < 1){
      swordmastery = 1;
    }
    var num = Number(document.getElementById("TwoHandedSwordMasteryP").innerHTML);
    if(num >= 10) return false;
    twohandedswordmastery = num + 1 ;
    firstSPcal();
  });
  document.getElementById("TwoHandedSwordMastery").addEventListener('contextmenu',function (e) {
    e.preventDefault();
    var num = Number(document.getElementById("TwoHandedSwordMasteryP").innerHTML);
    if(num <=0) return false;
    twohandedswordmastery = num - 1 ;
    firstSPcal();
  });
  document.getElementById("TwoHandedSwordMastery").addEventListener('mousewheel',function (e) {
    e.preventDefault();
    var num = Number(document.getElementById("TwoHandedSwordMasteryP").innerHTML);
    if (swordmastery < 1){
      swordmastery = 1;
    }
    if(e.wheelDeltaY > 0){
      if(num >= 10) return false;
      twohandedswordmastery = num + 1;
    }else{
      if(num <= 0) return false;
      twohandedswordmastery = num - 1;
    }firstSPcal();
  });


  document.getElementById("IncreaseHPRecover").addEventListener('click',function (e) {
    e.preventDefault();
    var num = Number(document.getElementById("IncreaseHPRecoverP").innerHTML);
    if(num >= 10) return false;
    increasehprecover = num + 1 ;
    firstSPcal();
  });
  document.getElementById("IncreaseHPRecover").addEventListener('contextmenu',function (e) {
    e.preventDefault();
    var num = Number(document.getElementById("IncreaseHPRecoverP").innerHTML);
    if(num <= 0) return false;
    increasehprecover = num - 1 ;
    firstSPcal();
  });
  document.getElementById("IncreaseHPRecover").addEventListener('mousewheel',function (e) {
    e.preventDefault();
    var num = Number(document.getElementById("IncreaseHPRecoverP").innerHTML);
    if(e.wheelDeltaY > 0){
      if(num >= 10) return false;
      increasehprecover = num + 1;
    }else{
      if(num <= 0) return false;
      increasehprecover = num - 1;
    }firstSPcal();
  });




  document.getElementById("Bash").addEventListener('click',function (e) {
    e.preventDefault();
    var num = Number(document.getElementById("BashP").innerHTML);
    if(num >= 10) return false;
    bash = num + 1 ;
    firstSPcal();
  });
  document.getElementById("Bash").addEventListener('contextmenu',function (e) {
    e.preventDefault();
    var num = Number(document.getElementById("BashP").innerHTML);
    if(num <= 5){
      if(magnumbreak >= 1){
        magnumbreak = 0;
      }
    }
    if(num <= 0)return false;
    bash = num - 1 ;
    firstSPcal();
  });
  document.getElementById("Bash").addEventListener('mousewheel',function (e) {
    e.preventDefault();
    var num = Number(document.getElementById("BashP").innerHTML);
    if(e.wheelDeltaY > 0){
      if(num >= 10) return false;
      bash = num + 1 ;
    }else if(num <= 5){
      if(num <= 0) return false;
      bash = num - 1 ;
      magnumbreak = 0;
    }else{
      if(num <= 0) return false;
      bash = num - 1 ;
    }firstSPcal();
  });

  document.getElementById("MagnumBreak").addEventListener('click',function (e) {
    e.preventDefault();
    if (bash < 5){
      bash = 5;
    }
    var num = Number(document.getElementById("MagnumBreakP").innerHTML);
    if(num >= 10) return false;
    magnumbreak = num + 1 ;
    firstSPcal();
  });
  document.getElementById("MagnumBreak").addEventListener('contextmenu',function (e) {
    e.preventDefault();
    var num = Number(document.getElementById("MagnumBreakP").innerHTML);
    if(num <=0) return false;
    magnumbreak = num - 1 ;
    firstSPcal();
  });
  document.getElementById("MagnumBreak").addEventListener('mousewheel',function (e) {
    e.preventDefault();
    var num = Number(document.getElementById("MagnumBreakP").innerHTML);
    if (bash < 5){
      bash = 5;
    }
    if(e.wheelDeltaY > 0){
      if(num >= 10) return false;
      magnumbreak = num + 1;
    }else{
      if(num <= 0) return false;
      magnumbreak = num - 1;
    }firstSPcal();

  });


  document.getElementById("Provoke").addEventListener('click',function (e) {
    e.preventDefault();
    var num = Number(document.getElementById("ProvokeP").innerHTML);
    if(num >= 10) return false;
    provoke = num + 1 ;
    firstSPcal();
  });
  document.getElementById("Provoke").addEventListener('contextmenu',function (e) {
    e.preventDefault();
    var num = Number(document.getElementById("ProvokeP").innerHTML);
    if(num <= 5){
      if(endure >= 1){
        endure = 0;
      }
    }
    if(num <= 0)return false;
    provoke = num - 1 ;
    firstSPcal();
  });
  document.getElementById("Provoke").addEventListener('mousewheel',function (e) {
    e.preventDefault();
    var num = Number(document.getElementById("ProvokeP").innerHTML);
    if(e.wheelDeltaY > 0){
      if(num >= 10) return false;
      provoke = num + 1 ;
    }else if(num <= 5){
      if(num <= 0) return false;
      provoke = num - 1 ;
      endure= 0;
    }else{
      if(num <= 0) return false;
      provoke = num - 1 ;
    }firstSPcal();
  });

  document.getElementById("Endure").addEventListener('click',function (e) {
    e.preventDefault();
    if (provoke < 5){
      provoke = 5;
    }
    var num = Number(document.getElementById("EndureP").innerHTML);
    if(num >= 10) return false;
    endure = num + 1 ;
    firstSPcal();
  });
  document.getElementById("Endure").addEventListener('contextmenu',function (e) {
    e.preventDefault();
    var num = Number(document.getElementById("EndureP").innerHTML);
    if(num <=0) return false;
    endure = num - 1 ;
    firstSPcal();
  });
  document.getElementById("Endure").addEventListener('mousewheel',function (e) {
    e.preventDefault();
    var num = Number(document.getElementById("EndureP").innerHTML);
    if (provoke < 5){
      provoke = 5;
    }
    if(e.wheelDeltaY > 0){
      if(num >= 10) return false;
      endure = num + 1;
    }else{
      if(num <= 0) return false;
      endure = num - 1;
    }firstSPcal();
  });

  var remainSP = 49;
  function firstSPcal(){
    firstskillpoints = remainSP - swordmastery - twohandedswordmastery - increasehprecover - bash - magnumbreak - provoke - endure;
    document.getElementById("firstsp").innerHTML = firstskillpoints;
    document.getElementById("SwordMasteryP").innerHTML = swordmastery;
    document.getElementById("TwoHandedSwordMasteryP").innerHTML = twohandedswordmastery;
    document.getElementById("IncreaseHPRecoverP").innerHTML = increasehprecover;
    document.getElementById("BashP").innerHTML = bash;
    document.getElementById("MagnumBreakP").innerHTML = magnumbreak;
    document.getElementById("ProvokeP").innerHTML = provoke;
    document.getElementById("EndureP").innerHTML = endure;

    if(firstskillpoints < 0){
      document.getElementById("firstsp").style.color = "red";
    }else {
      document.getElementById("firstsp").style.color = "black";
    }
  }



