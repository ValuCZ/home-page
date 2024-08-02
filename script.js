document.getElementById('copy-btn').addEventListener('click', function() {
    const code = document.getElementById('curl-code').innerText;
    navigator.clipboard.writeText(code).then(function() {
        
    }).catch(function(error) {
        console.error('Error copying text: ', error);
    });
});
