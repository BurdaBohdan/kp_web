document.addEventListener("DOMContentLoaded", function () {
    class Modal {
        constructor() {
            this.modalWindow = document.getElementById("open-modal");
            this.modalDiv = this.modalWindow.querySelector(".modal_div");

            this.modalWindow.addEventListener("click", (event) => {
                if (event.target === this.modalWindow) {
                    this.closeModal();
                }
            });

            document.querySelector(".header_item[href='#open-modal']").addEventListener("click", () => {
                this.openModal();
            });
        }

        openModal() {
            this.modalWindow.style.visibility = "visible";
            this.modalWindow.style.opacity = 1;
            this.modalWindow.style.pointerEvents = "auto";
        }

        closeModal() {
            this.modalWindow.style.visibility = "hidden";
            this.modalWindow.style.opacity = 0;
            this.modalWindow.style.pointerEvents = "none";
            window.location.hash = "";
        }
    }

    const modal = new Modal();
});

let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}
