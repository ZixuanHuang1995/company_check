document.getElementById('checkForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const companyID = document.getElementById('companyID').value;
    checkCompanyID(companyID);
});

function checkCompanyID(companyID) {
    //const url = `https://data.gcis.nat.gov.tw/od/data/api/5F64D864-61CB-4D0D-8AD9-492047CC1EA6?$format=json&$filter=Business_Accounting_NO eq ${companyID}`;

    
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'test12';
    resultDiv.className = 'test23';

    /*
    fetch(url)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error(`請求失敗，狀態碼：${response.status}`);
            }
        })
        .then(data => {
            resultDiv = document.getElementById('result');
            if (data.length > 0) {
                resultDiv.textContent = '公司統編有效';
                resultDiv.className = 'valid';
            } else {
                resultDiv.textContent = '公司統編無效';
                resultDiv.className = 'invalid';
            }
        })
        .catch(error => {
            const resultDiv = document.getElementById('result');
            resultDiv.textContent = error.message;
            resultDiv.className = 'invalid';
        });

        */
}
