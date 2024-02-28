function fetchData() {
    var charName = document.getElementById('charName').value;

    var formData = new FormData();
    formData.append('func', 'is_char');
    formData.append('gameNum', '0011');
    formData.append('serverName', 'Baphomet');
    formData.append('charName', charName);

    fetch('https://mall.gnjoy.com/joyshop_new/ajax.grv', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        // XML을 파싱하여 필요한 정보 추출
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(data, 'text/xml');
        var charInfo = xmlDoc.getElementsByTagName('item')[0];
        var charName = charInfo.getElementsByTagName('charname')[0].textContent;
        var charJob = charInfo.getElementsByTagName('charjob')[0].textContent;
        var charLevel = charInfo.getElementsByTagName('charlevel')[0].textContent;

        // 결과를 HTML에 추가
        var resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
            <p>캐릭터 이름: ${charName}</p>
            <p>직업: ${charJob}</p>
            <p>레벨: ${charLevel}</p>
        `;
    })
    .catch(error => {
        console.error('에러 발생:', error);
    });
}
