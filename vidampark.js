

 document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = {
                nev: document.getElementById('nev').value,
                email: document.getElementById('email').value,
                uzenet: document.getElementById('uzenet').value
            };

            const jsonString = JSON.stringify(formData);
            console.log("AJAX JSON Payload generated:", jsonString);

            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin me-2"></i>Küldés folyamatban...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                document.getElementById('contactForm').reset();

                const successModal = new bootstrap.Modal(document.getElementById('successModal'));
                successModal.show();
            }, 500);
        });
