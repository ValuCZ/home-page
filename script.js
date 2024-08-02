document.addEventListener('DOMContentLoaded', function() {
    const copyButtons = document.querySelectorAll('.copy-btn');

    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const code = button.previousElementSibling.innerText;
            navigator.clipboard.writeText(code).then(function() {
                alert('Code copied to clipboard');
            }).catch(function(error) {
                console.error('Error copying text: ', error);
            });
        });
    });
});
