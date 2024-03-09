function themeSwitcher() {
    document.getElementById("theme-switcher").addEventListener("click", () => {
        const html = document.querySelector("html");
        switch (html.getAttribute("color-theme")) {
            case "dark":
                html.setAttribute("color-theme", "light");
                break;
            default:
                html.setAttribute("color-theme", "dark");
                break;
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    themeSwitcher();
});