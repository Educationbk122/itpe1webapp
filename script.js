document.addEventListener('DOMContentLoaded', function() {
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    learnMoreBtn.addEventListener('click', function() {
        alert('Explore our premium Tanduay products!');
    });
});
function showProductDetails(productName) {
    alert('More details about: ' + productName);
}