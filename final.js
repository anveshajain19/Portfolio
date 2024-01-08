document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("mousemove", function (e) {
            const span = this.querySelector("span");
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left; // X-coordinate relative to the element
            const y = e.clientY - rect.top; // Y-coordinate relative to the element

            // Set the position of the span to follow the cursor
            span.style.transform = `translate(${x}px, ${y}px)`;
        });

        link.addEventListener("mouseout", function () {
            const span = this.querySelector("span");
            span.style.transform = "translate(0, 0)";
        });
    });
});
