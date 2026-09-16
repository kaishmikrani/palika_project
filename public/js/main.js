// ================================
// GALLERY MODAL
// ================================

const galleryButtons = document.querySelectorAll(".gallery-view-btn");

galleryButtons.forEach((button) => {

    button.addEventListener("click", function () {

        const image = this.getAttribute("data-image");
        const title = this.getAttribute("data-title");

        const modalImage =
            document.getElementById("galleryModalImage");

        const modalTitle =
            document.getElementById("galleryModalTitle");

        modalImage.src = image;
        modalTitle.textContent = title;

    });

});