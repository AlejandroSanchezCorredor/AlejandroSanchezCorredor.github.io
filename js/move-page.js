let currentPage = 1;
const totalPages = 2;

document.addEventListener("DOMContentLoaded", initializePagination);

function initializePagination() {
    currentPage = 1; // Reset to the first page
    showPage(currentPage);
    document.getElementById("previous-page").addEventListener("click", prevPage);
    document.getElementById("next-page").addEventListener("click", nextPage);
}

function showPage(page) {
    for (let i = 1; i <= totalPages; i++) {
        const content = document.getElementById(`page-${i}`);
        if (i === page) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    }
    updateIndicator();
}

function updateIndicator() {
    const indicator = document.getElementById('page-indicator');
    indicator.textContent = `Página ${currentPage}/${totalPages}`;
}


function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}
