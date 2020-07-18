(function () {
    const submitButton = document.querySelector('#submitBtn');

    submitButton.addEventListener("click", submitForm);

    function submitForm(ev) {
        ev.preventDefault();
        const dislayMessage = document.getElementById('content');
        const message = document.getElementById('message').value;
        const alertMessage = document.getElementById('alert');

        if (message != "") {
            dislayMessage.innerHTML = message;
            document.forms[0].reset();
        } else {

            alertMessage.style.display = "block";
            setTimeout(function () {
                alertMessage.style.display = "none"
            }, 2000);
        }

    };
})();