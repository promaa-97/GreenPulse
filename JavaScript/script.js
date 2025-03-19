document.getElementById('yourFeedback').addEventListener('input', function () {
    const maxLength = this.getAttribute('maxlength');
    const currentLength = this.value.length;
    document.getElementById('charCount').textContent = `${maxLength - currentLength} characters remaining`;
});
