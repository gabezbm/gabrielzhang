function setTheme(theme) {
    const html = document.querySelector("html");
    html.setAttribute("color-theme", theme);
    localStorage.setItem("color-theme", theme)
}

function themeSwitcher() {
    const html = document.querySelector("html");
    document.getElementById("theme-switcher").addEventListener("click", () => {
        if (html.getAttribute("color-theme") == "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    themeSwitcher();
});