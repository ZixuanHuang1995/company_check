document.getElementById('checkForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const companyID = document.getElementById('companyID').value;
    fetch(`https://your-api-url/check/${companyID}`)
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('result');
            if (data.valid) {
                resultDiv.textContent = '公司統編有效';
                resultDiv.className = 'valid';
            } else {
                resultDiv.textContent = '公司統編無效';
                resultDiv.className = 'invalid';
            }
        });
});