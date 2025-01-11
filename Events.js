function showForm(formType) {
    // Hide all forms
    document.querySelectorAll('.form-container').forEach(form => form.style.display = 'none');

    // Show the selected form
    const selectedForm = document.getElementById(`form-${formType}`);
    if (selectedForm) {
        selectedForm.style.display = 'block';
    }
}