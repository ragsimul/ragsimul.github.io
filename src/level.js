/*eslint-env browser*/
// base level //
var basemax = 99;
function statLVAdj(){
  if (noviceClasses.includes(className.innerHTML) || firstClasses.includes(className.innerHTML)||firstEXClasses.includes(className.innerHTML) || secondClasses.includes(className.innerHTML)){
    statcost = stat_none[baseLV.value-1];
    basemax = maxLV_first;
    basemin = 1;
  }else if(noviceEXClasses.includes(className.innerHTML)){
    statcost = stat_none[baseLV.value-1];
    basemax = maxLV_first;
    basemin = 45;
  }else if (secondtrClasses.includes(className.innerHTML)){
    statcost = stat_transcendence[baseLV.value-1];
    basemax = maxLV_first;
    basemin = 1;
  }else if(thirdClasses.includes(className.innerHTML)){
    statcost = stat_transcendence[baseLV.value-1];
    basemax = maxLV_third;
    basemin = maxLV_first;
  }else if(thirdEXClasses.includes(className.innerHTML)){
    statcost = stat_none[baseLV.value-1];
    basemax = maxLV_third;
    basemin = maxLV_first;
  }else if(fourthClasses.includes(className.innerHTML)){
    statcost = stat_transcendence[baseLV.value-1];
    tstatcost = tstat_obtain[baseLV.value-200];
    basemax = maxLV_fourth;
    basemin = maxLV_third;
  }else if(doramClasses.includes(className.innerHTML)){
    statcost = stat_none[baseLV.value-1];
    basemax = 200;
    basemin = 1;
  }
  else{
    statcost = stat_none[baseLV.value-1];
  }
  if(baseLV.value >= basemax){
    baseLV.value = basemax;
  }else if(baseLV.value <= basemin){
    baseLV.value = basemin;
  }
}

baseLV.addEventListener('keypress', (e) => {
  if (e.which === 13) {
    e.preventDefault();
    if(noviceClasses.includes(className.innerHTML) || firstClasses.includes(className.innerHTML)||firstEXClasses.includes(className.innerHTML) || secondClasses.includes(className.innerHTML)){
      if(baseLV.value >= 99){
        baseLV.value = 99;
      }else if(baseLV.value <= 1){
        baseLV.value = 1;
      }
    }else if(doramClasses.includes(className.innerHTML)){
      if(baseLV.value >= 200){
        baseLV.value = 200;
      }else if(baseLV.value <= 1){
        baseLV.value = 1;
      }
    }else if(thirdClasses.includes(className.innerHTML) || thirdEXClasses.includes(className.innerHTML)){
      if(baseLV.value >= 200){
        baseLV.value = 200;
      }else if(baseLV.value <= 99){
        baseLV.value = 99;
      }
    }else{
      if(baseLV.value >= 250){
        baseLV.value = 250;
      }else if(baseLV.value <= 200){
        baseLV.value = 200;
      }
    }
    baseAdj();
  }


  if (isNaN(String.fromCharCode(e.which))) {
    e.preventDefault();
  }
});

baseLV.addEventListener('mousewheel',function (e) {
  e.preventDefault();
  var num = Number(this.value);
  baseAdj();
  if(e.wheelDeltaY > 0){
    if(num >= basemax) return false;
    this.value = num + 1;
    baseAdj();
  }else{
    if(num <= basemin) return false;
    this.value = num - 1;
    baseAdj();
  }
});


// job level //



function jobLVAdj(){
  if (noviceClasses.includes(className.innerHTML)){
    jobmax = 10;
    jobmin = 1;
  }else if(firstClasses.includes(className.innerHTML) || secondClasses.includes(className.innerHTML)){
    jobmax = 50;
    jobmin = 1;
  }else if(secondtrClasses.includes(className.innerHTML) || thirdClasses.includes(className.innerHTML) || thirdEXClasses.includes(className.innerHTML)){
    jobmax = 70;
    jobmin = 1;
  }else if(fourthClasses.includes(className.innerHTML)){
    jobmax = 50;
    jobmin = 1;
  }else if(doramClasses.includes(className.innerHTML)){
    jobmax = 60;
    jobmin = 1;
  }else{
    statcost = stat_none[baseLV.value-1];
  }
  if(jobLV.value >= jobmax){
    jobLV.value = jobmax;
  }
  if(jobLV.value <= jobmin){
    jobLV.value = jobmin;
  }
}

jobLV.addEventListener('keypress', (e) => {
  if (e.which === 13) {
    e.preventDefault();
    jobAdj();
  }
  if (isNaN(String.fromCharCode(e.which))) {
    e.preventDefault();
  }
});

jobLV.addEventListener('mousewheel',function (e) {
  e.preventDefault();
  jobAdj();
  var num = Number(this.value);
  if(e.wheelDeltaY > 0){
    if(num >= jobmax) return false;
    this.value = num + 1 ;
    jobAdj();
  }else{
    if(num <= jobmin) return false;
    this.value = num - 1 ;
    jobAdj();
  }


});

function baseAdj(){
  statLVAdj();
  statdisplay();

}
function jobAdj(){
  jobLVAdj();
  statBonusAdj();
  tstatBonusAdj();
}
