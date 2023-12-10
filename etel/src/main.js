var etel_dust = document.getElementById('etel_price');
var etel_stone = document.getElementById('etel_stone_price');

etel_dust.addEventListener('input', updateResult);

function updateResult() {
    var etel_dust = document.getElementById('etel_price');
    var etel_stone = document.getElementById('etel_stone_price');
    var etel_aqua = document.getElementById('etel_aqua_price');
    var etel_topaz = document.getElementById('etel_topaz_price');
    var etel_amethyst = document.getElementById('etel_amethyst_price');
    var etel_amber = document.getElementById('etel_amber_price');

    var etel_stone_price = etel_dust.value;
    etel_stone.innerText = (etel_stone_price * 5 + 100000).toLocaleString();

    etel_aqua.innerText = ((etel_stone.innerText * 5)*3 + 100000*5).toLocaleString();
    etel_topaz.innerText = ((etel_stone.innerText * 5)*6 + 200000*5).toLocaleString();
    etel_amethyst.innerText = ((etel_stone.innerText * 5)*10 + 300000*5).toLocaleString();
    etel_amber.innerText = ((etel_stone.innerText * 5)*15 + 500000*5).toLocaleString();
    

}