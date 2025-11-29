// Contact form submission via Formsubmit (AJAX). You will receive an activation email from Formsubmit the first time — click the link to enable email delivery.
(function(){
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async function(e){
        e.preventDefault();

        const submitBtn = form.querySelector('button[type=submit]');
        const originalBtnText = submitBtn ? submitBtn.innerHTML : null;

        try {
            if (submitBtn) { submitBtn.disabled = true; submitBtn.innerHTML = 'Sending...'; }

            const url = 'https://formsubmit.co/ajax/aditya.dhariwaL4@gmail.com';
            const data = new FormData(form);

            const res = await fetch(url, {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (!res.ok) throw new Error('Network response was not ok');

            const json = await res.json();

            if (json && (json.success === 'true' || json.success === true)) {
                alert('Thanks — your message was sent. I will get back to you soon 😊');
                form.reset();
            } else if (json && json.message) {
                // Some responses contain a message
                alert('Submission response: ' + json.message);
            } else {
                alert('Thanks — your message was received.');
                form.reset();
            }

        } catch (err) {
            console.error('Form submission error:', err);
            // Fallback: attempt normal form POST so the browser can handle it
            const tryNative = confirm('There was an issue sending your message from this page. Would you like to submit using your browser instead (may navigate away)?');
            if (tryNative) {
                form.removeEventListener('submit', arguments.callee);
                form.submit();
            } else {
                alert('Please try again later or email directly to aditya.dhariwaL4@gmail.com');
            }
        } finally {
            if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = originalBtnText; }
        }
    });
})();
