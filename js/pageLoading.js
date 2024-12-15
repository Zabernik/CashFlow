document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('a[data-page]');
    const mainContent = document.querySelector('.main-content');

    function loadPage(page) {
        fetch(`pages/${page}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                mainContent.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading page:', error);
                mainContent.innerHTML = `<div class="error">Nie udało się załadować strony.</div>`;
            });
    }

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const page = link.getAttribute('data-page');
            loadPage(page);
        });
    });

    loadPage('dashboard.html');
});
