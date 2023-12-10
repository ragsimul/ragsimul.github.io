var etel_dust = document.getElementById('etel_price');
var etel_stone = document.getElementById('etel_stone_full_price');

etel_dust.addEventListener('input', updateResult);

function updateResult() {
    var etel_dust = document.getElementById('etel_price');
    var etel_stone = document.getElementById('etel_stone_full_price');

    var etel_stone_price = etel_dust.value;
    etel_stone.innerText = etel_stone_price * 5 + 100000;
}