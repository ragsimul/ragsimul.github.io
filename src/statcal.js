/*eslint-env browser*/
var str = 1, agi = 1, vit = 1, int = 1, dex = 1, luk = 1;
var stra = 2, agia = 2, vita = 2, inta = 2, dexa = 2, luka = 2;

var pow = 0, sta = 0, wis = 0, spl = 0, con = 0, crt = 0;
var powa = 0, staa = 0, wisa = 0, spla = 0, cona = 0, crta = 0;

var strb = 0; agib = 0; vitb = 0; intb = 0; dexb = 0; lukb = 0;
var powb = 0; stab = 0; wisb = 0; splb = 0; conb = 0; crtb = 0;

var strcost = 0; agicost = 0; vitcost = 0; intcost = 0; dexcost = 0; lukcost = 0;
var powcost = 0; stacost = 0; wiscost = 0; splcost = 0; concost = 0; crtcost = 0; tstatcost = 7;

var aspd = 156;
var tstatmax = 100;

var atk = 1; def = 1; matk = 1; mdef = 1; hit = 177; flee = 102; crit = 1; cast = 0;
var patk = 0; res = 0, smatk = 0; mres = 0; hplus = 0; crate = 0;

var remaincost = 0;
var remaintcost = 0;

function statreset(){
  str = 1; agi = 1; vit = 1; int = 1; dex = 1; luk = 1;
  stra = 2; agia = 2; vita = 2; inta = 2; dexa = 2; luka = 2;
  strcost = 0; agicost = 0; vitcost = 0; intcost = 0; dexcost = 0; lukcost = 0;

  pow = 0; sta = 0; wis = 0; spl = 0; con = 0; crt = 0;
  powa = 1; staa = 1; wisa = 1; spla = 1; cona = 1; crta = 1;
  powcost = 0;  stacost = 0;  wiscost = 0;  splcost = 0;  concost = 0;  crtcost = 0;


  if(fourthClasses.includes(className.innerHTML) || thirdClasses.includes(className.innerHTML) || secondtrClasses.includes(className.innerHTML)){
    remaincost = stat_transcendence[baseLV.value-1];
    statdisplay();
  }else{
    remaincost = stat_none[baseLV.value-1];
    statdisplay();
  }
}

function incSTR(){
  var num = Number(document.getElementById("STR").innerHTML);
  if (noviceClasses.includes(className.innerHTML) ||firstClasses.includes(className.innerHTML) || firstEXClasses.includes(className.innerHTML) || secondClasses.includes(className.innerHTML) || secondtrClasses.includes(className.innerHTML)){
    maxstat = 99;
  }else{
    maxstat = 130;
  }
  if(num >= maxstat) return false;
  str = num + 1;
  stra = stat_cost[str-1];
  strcost += stat_cost[str-2];
  if(str === maxstat){
    stra = 0;
  }
  statdisplay();
}

function incAGI(){
  var num = Number(document.getElementById("AGI").innerHTML);
  if (noviceClasses.includes(className.innerHTML) ||firstClasses.includes(className.innerHTML) ||firstEXClasses.includes(className.innerHTML)  || secondClasses.includes(className.innerHTML) || secondtrClasses.includes(className.innerHTML)){
    maxstat = 99;
  }else{
    maxstat = 130;
  }
  if(num >= maxstat) return false;
  agi = num + 1;
  agia = stat_cost[agi-1];
  agicost += stat_cost[agi-2];
  if(agi === maxstat){
    agia = 0;
  }
  statdisplay();
}

function incVIT(){
  var num = Number(document.getElementById("VIT").innerHTML);
  if (noviceClasses.includes(className.innerHTML) ||firstClasses.includes(className.innerHTML) ||firstEXClasses.includes(className.innerHTML)|| secondClasses.includes(className.innerHTML) || secondtrClasses.includes(className.innerHTML)){
    maxstat = 99;
  }else{
    maxstat = 130;
  }
  if(num >= maxstat) return false;
  vit = num + 1 ;
  vita = stat_cost[vit-1];
  vitcost += stat_cost[vit-2];
  if(vit === maxstat){
    vita = 0;
  }
  statdisplay();
}

function incINT(){
  var num = Number(document.getElementById("INT").innerHTML);
  if (noviceClasses.includes(className.innerHTML) ||firstClasses.includes(className.innerHTML) ||firstEXClasses.includes(className.innerHTML)|| secondClasses.includes(className.innerHTML) || secondtrClasses.includes(className.innerHTML)){
    maxstat = 99;
  }else{
    maxstat = 130;
  }
  if(num >= maxstat) return false;
  int = num + 1 ;
  inta = stat_cost[int-1];
  intcost += stat_cost[int-2];
  if(int === maxstat){
    inta = 0;
  }
  statdisplay();
}

function incDEX(){
  var num = Number(document.getElementById("DEX").innerHTML);
  if (noviceClasses.includes(className.innerHTML) ||firstClasses.includes(className.innerHTML) ||firstEXClasses.includes(className.innerHTML)|| secondClasses.includes(className.innerHTML) || secondtrClasses.includes(className.innerHTML)){
    maxstat = 99;
  }else{
    maxstat = 130;
  }
  if(num >= maxstat) return false;
  dex = num + 1 ;
  dexa = stat_cost[dex-1];
  dexcost += stat_cost[dex-2];
  if(dex === maxstat){
    dexa = 0;
  }
  statdisplay();
}

function incLUK(){
  var num = Number(document.getElementById("LUK").innerHTML);
  if (noviceClasses.includes(className.innerHTML) ||firstClasses.includes(className.innerHTML) ||firstEXClasses.includes(className.innerHTML)|| secondClasses.includes(className.innerHTML) || secondtrClasses.includes(className.innerHTML)){
    maxstat = 99;
  }else{
    maxstat = 130;
  }
  if(num >= maxstat) return false;
  luk = num + 1 ;
  luka = stat_cost[luk-1];
  lukcost += stat_cost[luk-2];
  if(luk === maxstat){
    luka = 0;
  }
  statdisplay();
}

function incPOW(){
  var num = Number(document.getElementById("POW").innerHTML);
  if (fourthClasses.includes(className.innerHTML)){
    if(num >= tstatmax) return false;
    pow = num + 1 ;
    powa = tstat_cost[pow];
    powcost += tstat_cost[pow];
    if(pow === tstatmax){
      powa = 0;
    }
  }else{
  }
  statdisplay();
}

function incSTA(){
  var num = Number(document.getElementById("STA").innerHTML);
  if (fourthClasses.includes(className.innerHTML)){
    if(num >= tstatmax) return false;
    sta = num + 1 ;
    staa = tstat_cost[sta];
    stacost += tstat_cost[sta];
    if(sta === tstatmax){
      staa = 0;
    }
  }else{
  }
  statdisplay();
}

function incWIS(){
  var num = Number(document.getElementById("WIS").innerHTML);
  if (fourthClasses.includes(className.innerHTML)){
    if(num >= tstatmax) return false;
    wis = num + 1 ;
    wisa = tstat_cost[wis];
    wiscost += tstat_cost[wis];
    if(wis === tstatmax){
      wisa = 0;
    }
  }else{
  }
  statdisplay();
}

function incSPL(){
  var num = Number(document.getElementById("SPL").innerHTML);
  if (fourthClasses.includes(className.innerHTML)){
    if(num >= tstatmax) return false;
    spl = num + 1 ;
    spla = tstat_cost[spl];
    splcost += tstat_cost[spl];
    if(spl === tstatmax){
      spla = 0;
    }
  }else{
  }
  statdisplay();
}

function incCON(){
  var num = Number(document.getElementById("CON").innerHTML);
  if (fourthClasses.includes(className.innerHTML)){
    if(num >= tstatmax) return false;
    con = num + 1 ;
    cona = tstat_cost[con];
    concost += tstat_cost[con];
    if(con === tstatmax){
      cona = 0;
    }
  }else{
  }statdisplay();
}


function incCRT(){
  var num = Number(document.getElementById("CRT").innerHTML);
  if (fourthClasses.includes(className.innerHTML)){

    if(num >= tstatmax) return false;
    crt = num + 1 ;
    crta = tstat_cost[crt];
    crtcost += tstat_cost[crt];
    if(crt === tstatmax){
      crta = 0;
    }
  }else{
  }
  statdisplay();
}

/* stats */
document.getElementById("STR").addEventListener('keypress', (e) => {
  if (e.which === 13) {
    if (noviceClasses.includes(className.innerHTML) ||firstClasses.includes(className.innerHTML) || secondClasses.includes(className.innerHTML) || secondtrClasses.includes(className.innerHTML)){
      maxstat = 99;
    }else{
      maxstat = 130;
    }
    str = parseInt(document.getElementById("STR").innerHTML);
    var strcost_new = 0;
    if(str >= maxstat){
      str = maxstat;
    }else if(str <= 1){
      str = 1;
    }
    for(var i=0; i< str-1; i++){
      strcost_new += stat_cost[i];
      stra = stat_cost[str-1];
    }
    if(str === maxstat){
      stra = 0;
    }
    strcost = strcost_new;
    statdisplay();
    e.preventDefault();
  }
  if (isNaN(String.fromCharCode(e.which))) {
    e.preventDefault();
  }
});


document.getElementById("strblock").addEventListener('mousewheel',function (e) {
  e.preventDefault();
  var num = Number(document.getElementById("STR").innerHTML);
  if(e.wheelDeltaY > 0){
    if (noviceClasses.includes(className.innerHTML) ||firstClasses.includes(className.innerHTML) || secondClasses.includes(className.innerHTML) || secondtrClasses.includes(className.innerHTML)){
      maxstat = 99;
    }else{
      maxstat = 130;
    }
    if(num >= maxstat) return false;
    str = num + 1 ;
    stra = stat_cost[str-1];
    strcost += stat_cost[str-2];
    if(str === maxstat){
      stra = 0;
    }
  }else{
    if(num <= 1) return false;
    str = num - 1 ;
    stra = stat_cost[str-1];
    strcost -= stat_cost[str-1];
  }
  statdisplay();
});

document.getElementById("AGI").addEventListener('keypress', (e) => {
  if (e.which === 13) {
    if (noviceClasses.includes(className.innerHTML) ||firstClasses.includes(className.innerHTML) || secondClasses.includes(className.innerHTML) || secondtrClasses.includes(className.innerHTML)){
      maxstat = 99;
    }else{
      maxstat = 130;
    }
    agi = parseInt(document.getElementById("AGI").innerHTML);
    var agicost_new = 0;
    if(agi >= maxstat){
      agi = maxstat;
    }else if(agi <= 1){
      agi = 1;
    }
    for(var i=0; i< agi-1; i++){
      agicost_new += stat_cost[i];
      agia = stat_cost[agi-1];
    }
    if(agi === maxstat){
      agia = 0;
    }
    agicost = agicost_new;
    statdisplay();
    e.preventDefault();
  }
  if (isNaN(String.fromCharCode(e.which))) {
    e.preventDefault();
  }
});
document.getElementById("agiblock").addEventListener('mousewheel',function (e) {
  e.preventDefault();
  var num = Number(document.getElementById("AGI").innerHTML);
  if(e.wheelDeltaY > 0){
    if (noviceClasses.includes(className.innerHTML) ||firstClasses.includes(className.innerHTML) || secondClasses.includes(className.innerHTML) || secondtrClasses.includes(className.innerHTML)){
      maxstat = 99;
    }else{
      maxstat = 130;
    }
    if(num >= maxstat) return false;
    agi = num + 1 ;
    agia = stat_cost[agi-1];
    agicost += stat_cost[agi-2];
    if(agi === maxstat){
      agia = 0;
    }
  }else{
    if(num <= 1) return false;
    agi = num - 1 ;
    agia = stat_cost[agi-1];
    agicost -= stat_cost[agi-1];
  }
  statdisplay();
});

document.getElementById("VIT").addEventListener('keypress', (e) => {
  if (e.which === 13) {
    if (noviceClasses.includes(className.innerHTML) ||firstClasses.includes(className.innerHTML) || secondClasses.includes(className.innerHTML) || secondtrClasses.includes(className.innerHTML)){
      maxstat = 99;
    }else{
      maxstat = 130;
    }
    vit = parseInt(document.getElementById("VIT").innerHTML);
    var vitcost_new = 0;
    if(vit >= maxstat){
      vit = maxstat;
    }else if(vit <= 1){
      vit = 1;
    }
    for(var i=0; i< vit-1; i++){
      vitcost_new += stat_cost[i];
      vita = stat_cost[vit-1];
    }
    if(vit === maxstat){
      vita = 0;
    }
    vitcost = vitcost_new;
    statdisplay();
    e.preventDefault();
  }
  if (isNaN(String.fromCharCode(e.which))) {
    e.preventDefault();
  }
});
document.getElementById("vitblock").addEventListener('mousewheel',function (e) {
  e.preventDefault();
  var num = Number(document.getElementById("VIT").innerHTML);
  if(e.wheelDeltaY > 0){
    if (noviceClasses.includes(className.innerHTML) ||firstClasses.includes(className.innerHTML) || secondClasses.includes(className.innerHTML) || secondtrClasses.includes(className.innerHTML)){
      maxstat = 99;
    }else{
      maxstat = 130;
    }
    if(num >= maxstat) return false;
    vit = num + 1 ;
    vita = stat_cost[vit-1];
    vitcost += stat_cost[vit-2];
    if(vit === maxstat){
      vita = 0;
    }
  }else{
    if(num <= 1) return false;
    vit = num - 1 ;
    vita = stat_cost[vit-1];
    vitcost -= stat_cost[vit-1];
  }
  statdisplay();
});

document.getElementById("INT").addEventListener('keypress', (e) => {
  if (e.which === 13) {
    if (noviceClasses.includes(className.innerHTML) ||firstClasses.includes(className.innerHTML) || secondClasses.includes(className.innerHTML) || secondtrClasses.includes(className.innerHTML)){
      maxstat = 99;
    }else{
      maxstat = 130;
    }
    int = parseInt(document.getElementById("INT").innerHTML);
    var intcost_new = 0;
    if(int >= maxstat){
      int = maxstat;
    }else if(int <= 1){
      int = 1;
    }
    for(var i=0; i< int-1; i++){
      intcost_new += stat_cost[i];
      inta = stat_cost[int-1];
    }
    if(int === maxstat){
      inta = 0;
    }
    intcost = intcost_new;
    statdisplay();
    e.preventDefault();
  }
  if (isNaN(String.fromCharCode(e.which))) {
    e.preventDefault();
  }
});
document.getElementById("intblock").addEventListener('mousewheel',function (e) {
  e.preventDefault();
  var num = Number(document.getElementById("INT").innerHTML);
  if(e.wheelDeltaY > 0){
    if (noviceClasses.includes(className.innerHTML) ||firstClasses.includes(className.innerHTML) || secondClasses.includes(className.innerHTML) || secondtrClasses.includes(className.innerHTML)){
      maxstat = 99;
    }else{
      maxstat = 130;
    }
    if(num >= maxstat) return false;
    int = num + 1 ;
    inta = stat_cost[int-1];
    intcost += stat_cost[int-2];
    if(int === maxstat){
      inta = 0;
    }
  }else{
    if(num <= 1) return false;
    int = num - 1 ;
    inta = stat_cost[int-1];
    intcost -= stat_cost[int-1];
  }
  statdisplay();
});

document.getElementById("DEX").addEventListener('keypress', (e) => {
  if (e.which === 13) {
    if (noviceClasses.includes(className.innerHTML) ||firstClasses.includes(className.innerHTML) || secondClasses.includes(className.innerHTML) || secondtrClasses.includes(className.innerHTML)){
      maxstat = 99;
    }else{
      maxstat = 130;
    }
    dex = parseInt(document.getElementById("DEX").innerHTML);
    var dexcost_new = 0;
    if(dex >= maxstat){
      dex = maxstat;
    }else if(dex <= 1){
      dex = 1;
    }
    for(var i=0; i< dex-1; i++){
      dexcost_new += stat_cost[i];
      dexa = stat_cost[dex-1];
    }
    if(dex === maxstat){
      dexa = 0;
    }
    dexcost = dexcost_new;
    statdisplay();
    e.preventDefault();
  }
  if (isNaN(String.fromCharCode(e.which))) {
    e.preventDefault();
  }
});
document.getElementById("dexblock").addEventListener('mousewheel',function (e) {
  e.preventDefault();
  var num = Number(document.getElementById("DEX").innerHTML);
  if(e.wheelDeltaY > 0){
    if (noviceClasses.includes(className.innerHTML) ||firstClasses.includes(className.innerHTML) || secondClasses.includes(className.innerHTML) || secondtrClasses.includes(className.innerHTML)){
      maxstat = 99;
    }else{
      maxstat = 130;
    }
    if(num >= maxstat) return false;
    dex = num + 1 ;
    dexa = stat_cost[dex-1];
    dexcost += stat_cost[dex-2];
    if(dex === maxstat){
      dexa = 0;
    }
  }else{
    if(num <= 1) return false;
    dex = num - 1 ;
    dexa = stat_cost[dex-1];
    dexcost -= stat_cost[dex-1];
  }
  statdisplay();
});

document.getElementById("LUK").addEventListener('keypress', (e) => {
  if (e.which === 13) {
    if (noviceClasses.includes(className.innerHTML) ||firstClasses.includes(className.innerHTML) || secondClasses.includes(className.innerHTML) || secondtrClasses.includes(className.innerHTML)){
      maxstat = 99;
    }else{
      maxstat = 130;
    }
    luk = parseInt(document.getElementById("LUK").innerHTML);
    var lukcost_new = 0;
    if(luk >= maxstat){
      luk = maxstat;
    }else if(luk <= 1){
      luk = 1;
    }
    for(var i=0; i< luk-1; i++){
      lukcost_new += stat_cost[i];
      luka = stat_cost[luk-1];
    }
    if(luk === maxstat){
      luka = 0;
    }
    lukcost = lukcost_new;
    statdisplay();
    e.preventDefault();
  }
  if (isNaN(String.fromCharCode(e.which))) {
    e.preventDefault();
  }
});
document.getElementById("lukblock").addEventListener('mousewheel',function (e) {
  e.preventDefault();
  var num = Number(document.getElementById("LUK").innerHTML);
  if(e.wheelDeltaY > 0){
    if (noviceClasses.includes(className.innerHTML) ||firstClasses.includes(className.innerHTML) || secondClasses.includes(className.innerHTML) || secondtrClasses.includes(className.innerHTML)){
      maxstat = 99;
    }else{
      maxstat = 130;
    }
    if(num >= maxstat) return false;
    luk = num + 1 ;
    luka = stat_cost[luk-1];
    lukcost += stat_cost[luk-2];
    if(luk === maxstat){
      luka = 0;
    }
  }else{
    if(num <= 1) return false;
    luk = num - 1 ;
    luka = stat_cost[luk-1];
    lukcost -= stat_cost[luk-1];
  }
  statdisplay();
});

/* tstats */
document.getElementById("POW").addEventListener('keypress', (e) => {
  if (e.which === 13) {
    if (fourthClasses.includes(className.innerHTML)){
      pow = parseInt(document.getElementById("POW").innerHTML);
      var powcost_new = 0;
      if(pow >= tstatmax){
        pow = tstatmax;
      }else if(pow <= 0){
        pow = 0;
      }
      for(var i=0; i< pow; i++){
        powcost_new += tstat_cost[i];
        powa = tstat_cost[pow-1];
      }
      if(pow === tstatmax){
        powa = 0;
      }
      powcost = powcost_new;

      e.preventDefault();
    }else{
      pow = 0;
      powa = 0;
      powb = 0;
      e.preventDefault();
    }statdisplay();
  }
  if (isNaN(String.fromCharCode(e.which))) {
    e.preventDefault();
  }
});
document.getElementById("powblock").addEventListener('mousewheel',function (e) {
  e.preventDefault();
  var num = Number(document.getElementById("POW").innerHTML);
  if (fourthClasses.includes(className.innerHTML)){
    if(e.wheelDeltaY > 0){
      if(num >= tstatmax) return false;
      pow = num + 1 ;
      powa = tstat_cost[pow];
      powcost += tstat_cost[pow]
      if(pow === tstatmax){
        powa = 0;
      }
    }else{
      if(num <= 0) return false;
      pow = num - 1;
      powa = tstat_cost[pow];
      powcost -= tstat_cost[pow]
    }

  }else{
    e.preventDefault();
  }statdisplay();
});

document.getElementById("STA").addEventListener('keypress', (e) => {
  if (e.which === 13) {
    if (fourthClasses.includes(className.innerHTML)){
      sta = parseInt(document.getElementById("STA").innerHTML);
      var stacost_new = 0;
      if(sta >= tstatmax){
        sta = tstatmax;
      }else if(sta <= 0){
        sta = 0;
      }
      for(var i=0; i< sta; i++){
        stacost_new += tstat_cost[i];
        staa = tstat_cost[sta-1];
      }
      if(sta === tstatmax){
        staa = 0;
      }
      stacost = stacost_new;

      e.preventDefault();
    }else{
      sta = 0;
      staa = 0;
      stab = 0;
      e.preventDefault();
    }statdisplay();
  }
  if (isNaN(String.fromCharCode(e.which))) {
    e.preventDefault();
  }
});
document.getElementById("stablock").addEventListener('mousewheel',function (e) {
  e.preventDefault();
  var num = Number(document.getElementById("STA").innerHTML);
  if (fourthClasses.includes(className.innerHTML)){
    if(e.wheelDeltaY > 0){
      if(num >= tstatmax) return false;
      sta = num + 1 ;
      staa = tstat_cost[sta];
      stacost += tstat_cost[sta];
      if(sta === tstatmax){
        staa = 0;
      }
    }else{
      if(num <= 0) return false;
      sta = num - 1 ;
      staa = tstat_cost[sta];
      stacost -= tstat_cost[sta];
    }

  }else{
    e.preventDefault();
  }
  statdisplay();
});

document.getElementById("WIS").addEventListener('keypress', (e) => {
  if (e.which === 13) {
    if (fourthClasses.includes(className.innerHTML)){
      wis = parseInt(document.getElementById("WIS").innerHTML);
      var wiscost_new = 0;
      if(wis >= tstatmax){
        wis = tstatmax;
      }else if(wis <= 0){
        wis = 0;
      }
      for(var i=0; i< wis; i++){
        wiscost_new += tstat_cost[i];
        wisa = tstat_cost[wis-1];
      }
      if(wis === tstatmax){
        wisa = 0;
      }
      wiscost = wiscost_new;

      e.preventDefault();
    }else{
      wis = 0;
      wisa = 0;
      wisb = 0;
      e.preventDefault();
    }statdisplay();
  }
  if (isNaN(String.fromCharCode(e.which))) {
    e.preventDefault();
  }
});
document.getElementById("wisblock").addEventListener('mousewheel',function (e) {
  e.preventDefault();
  var num = Number(document.getElementById("WIS").innerHTML);
  if (fourthClasses.includes(className.innerHTML)){
    if(e.wheelDeltaY > 0){
      if(num >= tstatmax) return false;
      wis = num + 1 ;
      wisa = tstat_cost[wis];
      wiscost += tstat_cost[wis];
      if(wis === tstatmax){
        wisa = 0;
      }
    }else{
      if(num <= 0) return false;
      wis = num - 1 ;
      wisa = tstat_cost[wis];
      wiscost -= tstat_cost[wis];
    }
  }else{
    e.preventDefault();
  }
  statdisplay();
});

document.getElementById("SPL").addEventListener('keypress', (e) => {
  if (e.which === 13) {
    if (fourthClasses.includes(className.innerHTML)){
      spl = parseInt(document.getElementById("SPL").innerHTML);
      var splcost_new = 0;
      if(spl >= tstatmax){
        spl = tstatmax;
      }else if(spl <= 0){
        spl = 0;
      }
      for(var i=0; i< spl; i++){
        splcost_new += tstat_cost[i];
        spla = tstat_cost[spl-1];
      }
      if(spl === tstatmax){
        spla = 0;
      }
      splcost = splcost_new;

      e.preventDefault();
    }else{
      spl = 0;
      spla = 0;
      splb = 0;
      e.preventDefault();
    }statdisplay();
  }
  if (isNaN(String.fromCharCode(e.which))) {
    e.preventDefault();
  }
});
document.getElementById("splblock").addEventListener('mousewheel',function (e) {
  e.preventDefault();
  var num = Number(document.getElementById("SPL").innerHTML);
  if (fourthClasses.includes(className.innerHTML)){
    if(e.wheelDeltaY > 0){
      if(num >= tstatmax) return false;
      spl = num + 1 ;
      spla = tstat_cost[spl];
      splcost += tstat_cost[spl];
      if(spl === tstatmax){
        spla = 0;
      }
    }else{
      if(num <= 0) return false;
      spl = num - 1 ;
      spla = tstat_cost[spl];
      splcost -= tstat_cost[spl];
    }
  }else{
    e.preventDefault();
  }
  statdisplay();
});

document.getElementById("CON").addEventListener('keypress', (e) => {
  if (e.which === 13) {
    if (fourthClasses.includes(className.innerHTML)){
      con = parseInt(document.getElementById("CON").innerHTML);
      var concost_new = 0;
      if(con >= tstatmax){
        con = tstatmax;
      }else if(con <= 0){
        con = 0;
      }
      for(var i=0; i< con; i++){
        concost_new += tstat_cost[i];
        cona = tstat_cost[con-1];
      }
      if(con === tstatmax){
        cona = 0;
      }
      concost = concost_new;

      e.preventDefault();
    }else{
      con = 0;
      cona = 0;
      conb = 0;
      e.preventDefault();
    }statdisplay();
  }
  if (isNaN(String.fromCharCode(e.which))) {
    e.preventDefault();
  }
});
document.getElementById("conblock").addEventListener('mousewheel',function (e) {
  e.preventDefault();
  var num = Number(document.getElementById("CON").innerHTML);
  if (fourthClasses.includes(className.innerHTML)){
    if(e.wheelDeltaY > 0){
      if(num >= tstatmax) return false;
      con = num + 1;
      cona = tstat_cost[con];
      concost += tstat_cost[con];
      if(con === tstatmax){
        cona = 0;
      }
    }else{
      if(num <= 0) return false;
      con = num - 1;
      cona = tstat_cost[con];
      concost -= tstat_cost[con];
    }
  }else{
    e.preventDefault();
  }
  statdisplay();
});

document.getElementById("CRT").addEventListener('keypress', (e) => {
  if (e.which === 13) {
    if (fourthClasses.includes(className.innerHTML)){
      crt = parseInt(document.getElementById("CRT").innerHTML);
      var crtcost_new = 0;
      if(crt >= tstatmax){
        crt = tstatmax;
      }else if(crt <= 0){
        crt = 0;
      }
      for(var i=0; i< crt; i++){
        crtcost_new += tstat_cost[i];
        crta = tstat_cost[crt-1];
      }
      if(crt === tstatmax){
        crta = 0;
      }
      crtcost = crtcost_new;

      e.preventDefault();
    }else{
      crt = 0;
      crta = 0;
      crtb = 0;
      e.preventDefault();
    }statdisplay();
  }
  if (isNaN(String.fromCharCode(e.which))) {
    e.preventDefault();
  }
});
document.getElementById("crtblock").addEventListener('mousewheel',function (e) {
  e.preventDefault();
  var num = Number(document.getElementById("CRT").innerHTML);
  if (fourthClasses.includes(className.innerHTML)){
    if(e.wheelDeltaY > 0){
      if(num >= tstatmax) return false;
      crt = num + 1 ;
      crta = tstat_cost[crt];
      crtcost += tstat_cost[crt];
      if(crt === tstatmax){
        crta = '0';
      }
    }else{d
      crta = tstat_cost[crt];
      crtcost -= tstat_cost[crt];
    }
  }else{
    e.preventDefault();
  }
  statdisplay();
});


/* stat bonus */

function statBonusAdj(){
  for(var i=0; i< classNameEN.length; i++){
    if (className.innerHTML === classNameEN[i]){
      strb = jobBonuses[i][jobLV.value-1][0];
      document.getElementById("STRBonus").innerHTML = strb;
      agib = jobBonuses[i][jobLV.value-1][1];
      document.getElementById("AGIBonus").innerHTML = agib;
      vitb = jobBonuses[i][jobLV.value-1][2];
      document.getElementById("VITBonus").innerHTML = vitb;
      intb = jobBonuses[i][jobLV.value-1][3];
      document.getElementById("INTBonus").innerHTML = intb;
      dexb = jobBonuses[i][jobLV.value-1][4];
      document.getElementById("DEXBonus").innerHTML = dexb;
      lukb = jobBonuses[i][jobLV.value-1][5];
      document.getElementById("LUKBonus").innerHTML = lukb;

    }
  }statcal();
}

function tstatBonusAdj(){
  if (fourthClasses.includes(className.innerHTML)){
    for(var i=0; i< fourthClasses.length; i++){
      if (className.innerHTML === fourthClasses[i]){
        powb = jobtstatBonuses[i][jobLV.value-1][0];
        document.getElementById("POWBonus").innerHTML = powb;
        stab = jobtstatBonuses[i][jobLV.value-1][1];
        document.getElementById("STABonus").innerHTML = stab;
        wisb = jobtstatBonuses[i][jobLV.value-1][2];
        document.getElementById("WISBonus").innerHTML = wisb;
        splb = jobtstatBonuses[i][jobLV.value-1][3];
        document.getElementById("SPLBonus").innerHTML = splb;
        conb = jobtstatBonuses[i][jobLV.value-1][4];
        document.getElementById("CONBonus").innerHTML = conb;
        crtb = jobtstatBonuses[i][jobLV.value-1][5];
        document.getElementById("CRTBonus").innerHTML = crtb;
      }
    }
  }statcal();
}

function tstatAdj(){
  if(fourthClasses.includes(className.innerHTML)){
    tstatpoint.innerHTML = tstat_obtain[baseLV.value-200];
  }else{
    tstatpoint.innerHTML = 0;
  }
}

function classaspd(){
  for(var i=0; i< classImgNum.length; i++){
    if (className.innerHTML === classNameEN[i]){
      clsaspd = class_aspd[i][0];
    }
  }
}

function statdisplay(){
  document.getElementById("STR").innerHTML = str;
  document.getElementById("STRAdd").innerHTML = stra;

  document.getElementById("AGI").innerHTML = agi;
  document.getElementById("AGIAdd").innerHTML = agia;
  document.getElementById("VIT").innerHTML = vit;
  document.getElementById("VITAdd").innerHTML = vita;
  document.getElementById("INT").innerHTML = int;
  document.getElementById("INTAdd").innerHTML = inta;
  document.getElementById("DEX").innerHTML = dex;
  document.getElementById("DEXAdd").innerHTML = dexa;
  document.getElementById("LUK").innerHTML = luk;
  document.getElementById("LUKAdd").innerHTML = luka;



  document.getElementById("POW").innerHTML = pow;
  document.getElementById("POWAdd").innerHTML = powa;
  document.getElementById("STA").innerHTML = sta;
  document.getElementById("STAAdd").innerHTML = staa;
  document.getElementById("WIS").innerHTML = wis;
  document.getElementById("WISAdd").innerHTML = wisa;
  document.getElementById("SPL").innerHTML = spl;
  document.getElementById("SPLAdd").innerHTML = spla;
  document.getElementById("CON").innerHTML = con;
  document.getElementById("CONAdd").innerHTML = cona;
  document.getElementById("CRT").innerHTML = crt;
  document.getElementById("CRTAdd").innerHTML = crta;

  remaincost = statcost - strcost - agicost - vitcost - intcost - dexcost - lukcost;
  remaintcost = tstatcost - powcost - stacost - wiscost - splcost - concost - crtcost;

  if(remaincost < 0){
    statpoint.innerHTML = remaincost;
    statpoint.style.color = "red";
  }else{
    statpoint.innerHTML = remaincost;
    statpoint.style.color = "black";
  }

  if(remaintcost < 0){
    tstatpoint.innerHTML = remaintcost;
    tstatpoint.style.color = "red";
  }else{
    tstatpoint.innerHTML = remaintcost;
    tstatpoint.style.color = "black";
  }
  statcal();
}

function tstatreset(){

  if(fourthClasses.includes(className.innerHTML)){
    remaincost = tstat_obtain[baseLV.value-200];
  }else{
    remaincost = 0;
  }
};





function statcal(){



  /* stat cal */
  // ATK = floor[(BaseLevel ÷ 4) + Str + (Dex ÷ 5) + (Luk ÷ 3)] + ((POW+POWBonus) * 5)
  atk = Math.floor(str + strb + (dex + dexb)/5 + (luk + lukb)/3 + (parseInt(baseLV.value)/4)) + (pow + powb)*5;
  // MATK = floor[floor[BaseLevel ÷ 4] + Int + floor[Int ÷ 2] + floor[Dex ÷ 5] + floor[Luk ÷ 3]]
  matk = Math.floor((int + intb) + Math.floor((int + intb)/2)+ Math.floor((dex + dexb)/5) + Math.floor((luk + lukb)/3) + Math.floor(parseInt(baseLV.value)/4) + Math.floor((spl + splb)*5));
  //DEF = floor((VIT ÷ 2) + (AGI ÷ 5) + (BaseLv ÷ 2))
  def = Math.floor((parseInt(baseLV.value)/2) + ((vit + vitb)/2) + ((agi + agib)/5));
  //MdeF = floor((INT + (VIT ÷ 5) + (DEX ÷ 5) + (BaseLv ÷ 4))
  mdef = Math.floor((int+intb) + ((vit+vitb)/5) + ((dex+dexb)/5) + (parseInt(baseLV.value)/4));
  //hit = 175 + BaseLv + DEX + Floor(LUK ÷ 3) + Bonus
  hit = 175 + parseInt(baseLV.value) + (dex + dexb) + Math.floor((luk + lukb)/3) + (con+conb)*2;
  //crit = LUK × 0.3 + Bonus
  crit = (luk + lukb)*0.3
  //flee = 100 + BaseLv + AGI + Floor(LUK ÷ 5) + Bonus
  flee = 100 + parseInt(baseLV.value) + (agi+agib) + Math.floor((luk + lukb)/5)+ (con+conb)*2;
  //cast = ((int+intb)/2 + (dex+dexb))/265 * 100
  cast = (((int+intb)/2 + (dex+dexb))/265)*100;
  if (cast >= 100){
    cast = 100;
  }
  classaspd();
  aspd = clsaspd + Math.sqrt(((agi+agib)*(agi+agib))/2 + ((dex+dexb)*(dex+dexb))/5)/4
  if(noviceClasses.includes(className.innerHTML) ||firstClasses.includes(className.innerHTML) || firstEXClasses.includes(className.innerHTML) || secondClasses.includes(className.innerHTML) || secondtrClasses.includes(className.innerHTML)){
    if(aspd >= 190){
      aspd = 190;
    }
  }else{
    if(aspd >= 193){
      aspd = 193;
    }
  }

  document.getElementById("ATK").innerHTML = atk;
  document.getElementById("DEF").innerHTML = def;
  document.getElementById("MATK").innerHTML = matk;
  document.getElementById("MDEF").innerHTML = mdef;
  document.getElementById("HIT").innerHTML = hit;
  document.getElementById("CRIT").innerHTML = Math.ceil(crit);
  document.getElementById("FLEE").innerHTML = flee;
  document.getElementById("CAST").innerHTML = cast.toFixed(2);
  document.getElementById("ASPD").innerHTML = Math.floor(aspd);


  /* tstat cal */
  patk = Math.floor((pow + powb)/3) +  + Math.floor((con + conb)/5);
  res = (sta+stab) + Math.floor(parseInt(sta+stab)/3)*5;
  smatk = Math.floor((spl + splb)/3) + Math.floor((con + conb)/5);
  mres = (wis+wisb) + Math.floor(parseInt(wis+wisb)/3)*5;;
  hplus = (crt+crtb);
  crate = Math.floor((crt+crtb)/3);
  document.getElementById("PATK").innerHTML = patk;
  document.getElementById("RES").innerHTML = res;
  document.getElementById("SMATK").innerHTML = smatk;
  document.getElementById("MRES").innerHTML = mres;
  document.getElementById("HPLUS").innerHTML = hplus;
  document.getElementById("CRATE").innerHTML = crate;
}
