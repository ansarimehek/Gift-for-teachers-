function showMessage() {
    const messageElement = document.getElementById('special-message');
    if (messageElement.classList.contains('hidden')) {
        messageElement.classList.remove('hidden');
    } else {
        messageElement.classList.add('hidden');
    }
}

