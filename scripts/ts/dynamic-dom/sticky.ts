export function setupSticky() {
    const header = document.getElementById("auto_gen_id_unq_6");

    if (header instanceof HTMLElement) {
        const sticky = header.offsetTop;

        const myFunction = () => {
            if (window.scrollY > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        };

        window.onscroll = myFunction;
    } else {
        console.error("The header element was not found");
    }
}

