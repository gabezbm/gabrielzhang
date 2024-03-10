function setTheme(theme) {
    const html = document.querySelector("html");
    Cookies.set("color-theme", theme);
    html.setAttribute("color-theme", theme);
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
    if (Cookies.get("color-theme") == "light") {
        setTheme("light");
    } else {
        setTheme("dark");
    }
    themeSwitcher();
});