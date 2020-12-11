/* Swordman Class */
function swordman(){

    var swordmastery = 0, twohandedswordmastery = 0, bash = 0, magnumbreak= 0, increasehprecover = 0, provoke = 0, endure = 0;
    var firstskillpoints = 0;
    document.getElementById("SwordMastery").addEventListener('click',function (e) {
      e.preventDefault();
      var num = Number(document.getElementById("SwordMasteryP").innerHTML);
      if(num >= 10) return false;
      swordmastery = num + 1 ;
      document.getElementById("SwordMasteryP").innerHTML = swordmastery;
      firstSPcal();
    });

    document.getElementById("SwordMastery").addEventListener('contextmenu',function (e) {
      e.preventDefault();
      var num = Number(document.getElementById("SwordMasteryP").innerHTML);
      if(num <= 1){
        if(twohandedswordmastery >= 1){
          twohandedswordmastery = 0;
          document.getElementById("TwoHandedSwordMasteryP").innerHTML = twohandedswordmastery;
        }
      }
      if(num <= 0)return false;
      swordmastery = num - 1 ;
      document.getElementById("SwordMasteryP").innerHTML = swordmastery;
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
        document.getElementById("TwoHandedSwordMasteryP").innerHTML = twohandedswordmastery;
      }else{
        if(num <= 0) return false;
        swordmastery = num - 1 ;
      }
      document.getElementById("SwordMasteryP").innerHTML = swordmastery;
      firstSPcal();
    });

    document.getElementById("TwoHandedSwordMastery").addEventListener('click',function (e) {
      e.preventDefault();
      if (swordmastery < 1){
        swordmastery = 1;
      }
      var num = Number(document.getElementById("TwoHandedSwordMasteryP").innerHTML);
      if(num >= 10) return false;
      twohandedswordmastery = num + 1 ;
      document.getElementById("TwoHandedSwordMasteryP").innerHTML = twohandedswordmastery;
      firstSPcal();
    });
    document.getElementById("TwoHandedSwordMastery").addEventListener('contextmenu',function (e) {
      e.preventDefault();
      var num = Number(document.getElementById("TwoHandedSwordMasteryP").innerHTML);
      if(num <=0) return false;
      twohandedswordmastery = num - 1 ;
      document.getElementById("TwoHandedSwordMasteryP").innerHTML = twohandedswordmastery;
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
      }
      document.getElementById("TwoHandedSwordMasteryP").innerHTML = twohandedswordmastery;
      firstSPcal();
    });

    document.getElementById("TwoHandedSwordMasteryBox").addEventListener('mouseover', function(e){
      document.getElementById("SwordMasteryBox").style.backgroundColor = "rgba(255, 121, 158, 0.3)";
      document.getElementById("SwordMasteryBox").style.borderRadius = "10px";
      document.getElementById("SwordMasteryP").innerHTML = "1";
      document.getElementById("SwordMasteryP").style.color = "red";

    });
    document.getElementById("TwoHandedSwordMasteryBox").addEventListener('mouseout', function(e){
      document.getElementById("SwordMasteryBox").style.backgroundColor = "rgba(255, 255, 255, 0)";
      document.getElementById("SwordMasteryP").innerHTML = swordmastery;
      document.getElementById("SwordMasteryP").style.color = "black";
    });

    document.getElementById("IncreaseHPRecover").addEventListener('click',function (e) {
      e.preventDefault();
      var num = Number(document.getElementById("IncreaseHPRecoverP").innerHTML);
      if(num >= 10) return false;
      increasehprecover = num + 1 ;
      document.getElementById("IncreaseHPRecoverP").innerHTML = increasehprecover;
      firstSPcal();
    });
    document.getElementById("IncreaseHPRecover").addEventListener('contextmenu',function (e) {
      e.preventDefault();
      var num = Number(document.getElementById("IncreaseHPRecoverP").innerHTML);
      if(num <= 0) return false;
      increasehprecover = num - 1 ;
      document.getElementById("IncreaseHPRecoverP").innerHTML = increasehprecover;
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
      }
      document.getElementById("IncreaseHPRecoverP").innerHTML = increasehprecover;
      firstSPcal();
    });

    document.getElementById("Bash").addEventListener('click',function (e) {
      e.preventDefault();
      var num = Number(document.getElementById("BashP").innerHTML);
      if(num >= 10) return false;
      bash = num + 1 ;
      document.getElementById("BashP").innerHTML = bash;
      firstSPcal();
    });
    document.getElementById("Bash").addEventListener('contextmenu',function (e) {
      e.preventDefault();
      var num = Number(document.getElementById("BashP").innerHTML);
      if(num <= 5){
        if(magnumbreak >= 1){
          magnumbreak = 0;
          document.getElementById("MagnumBreakP").innerHTML = magnumbreak;
        }
      }
      if(num <= 0)return false;
      bash = num - 1 ;
      document.getElementById("BashP").innerHTML = bash;
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
        document.getElementById("MagnumBreakP").innerHTML = magnumbreak;
      }else{
        if(num <= 0) return false;
        bash = num - 1 ;
      }
      document.getElementById("BashP").innerHTML = bash;
      firstSPcal();
    });

    document.getElementById("MagnumBreak").addEventListener('click',function (e) {
      e.preventDefault();
      if (bash < 5){
        bash = 5;
      }
      var num = Number(document.getElementById("MagnumBreakP").innerHTML);
      if(num >= 10) return false;
      magnumbreak = num + 1 ;
      document.getElementById("MagnumBreakP").innerHTML = magnumbreak;
      firstSPcal();
    });
    document.getElementById("MagnumBreak").addEventListener('contextmenu',function (e) {
      e.preventDefault();
      var num = Number(document.getElementById("MagnumBreakP").innerHTML);
      if(num <=0) return false;
      magnumbreak = num - 1 ;
      document.getElementById("MagnumBreakP").innerHTML = magnumbreak;
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
      }
      document.getElementById("MagnumBreakP").innerHTML = magnumbreak;
      firstSPcal();
    });

    document.getElementById("MagnumBreakBox").addEventListener('mouseover', function(e){
      document.getElementById("BashBox").style.backgroundColor = "rgba(255, 121, 158, 0.3)";
      document.getElementById("BashBox").style.borderRadius = "10px";
      document.getElementById("BashP").innerHTML = "5";
      document.getElementById("BashP").style.color = "red";

    });
    document.getElementById("MagnumBreakBox").addEventListener('mouseout', function(e){
      document.getElementById("BashBox").style.backgroundColor = "rgba(255, 255, 255, 0)";
      document.getElementById("BashP").innerHTML = bash;
      document.getElementById("BashP").style.color = "black";
    });

    document.getElementById("Provoke").addEventListener('click',function (e) {
      e.preventDefault();
      var num = Number(document.getElementById("ProvokeP").innerHTML);
      if(num >= 10) return false;
      provoke = num + 1 ;
      document.getElementById("ProvokeP").innerHTML = provoke;
      firstSPcal();
    });
    document.getElementById("Provoke").addEventListener('contextmenu',function (e) {
      e.preventDefault();
      var num = Number(document.getElementById("ProvokeP").innerHTML);
      if(num <= 5){
        if(endure >= 1){
          endure = 0;
          document.getElementById("EndureP").innerHTML = endure;
        }
      }
      if(num <= 0)return false;
      provoke = num - 1 ;
      document.getElementById("ProvokeP").innerHTML = provoke;
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
        document.getElementById("EndureP").innerHTML = endure;
      }else{
        if(num <= 0) return false;
        provoke = num - 1 ;
      }
      document.getElementById("ProvokeP").innerHTML = provoke;
      firstSPcal();
    });

    document.getElementById("Endure").addEventListener('click',function (e) {
      e.preventDefault();
      if (provoke < 5){
        provoke = 5;
      }
      var num = Number(document.getElementById("EndureP").innerHTML);
      if(num >= 10) return false;
      endure = num + 1 ;
      document.getElementById("EndureP").innerHTML = endure;
      firstSPcal();
    });
    document.getElementById("Endure").addEventListener('contextmenu',function (e) {
      e.preventDefault();
      var num = Number(document.getElementById("EndureP").innerHTML);
      if(num <=0) return false;
      endure = num - 1 ;
      document.getElementById("EndureP").innerHTML = endure;
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
      }
      document.getElementById("EndureP").innerHTML = endure;
      firstSPcal();
    });

    document.getElementById("EndureBox").addEventListener('mouseover', function(e){
      document.getElementById("ProvokeBox").style.backgroundColor = "rgba(255, 121, 158, 0.3)";
      document.getElementById("ProvokeBox").style.borderRadius = "10px";
      document.getElementById("ProvokeP").innerHTML = "5";
      document.getElementById("ProvokeP").style.color = "red";

    });
    document.getElementById("EndureBox").addEventListener('mouseout', function(e){
      document.getElementById("ProvokeBox").style.backgroundColor = "rgba(255, 255, 255, 0)";
      document.getElementById("ProvokeP").innerHTML = provoke;
      document.getElementById("ProvokeP").style.color = "black";
    });

    var remainSP = 49;
    function firstSPcal(){
      firstskillpoints = remainSP - swordmastery - twohandedswordmastery - increasehprecover - bash - magnumbreak - provoke - endure;
      document.getElementById("firstsp").innerHTML = firstskillpoints;

      if(firstskillpoints < 0){
        document.getElementById("firstsp").style.color = "red";
      }else {
        document.getElementById("firstsp").style.color = "black";
      }
    }

}
