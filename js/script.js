document.addEventListener('DOMContentLoaded', () => {

    const BTN = document.querySelector('.up-btn');
    BTN.addEventListener('click', toUp);

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            BTN.style.display = "flex"
        } else BTN.style.display = "none";
    }

    function toUp() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }


});