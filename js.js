    const modeToggle = document.getElementById("mode-toggle");
    const modeText = modeToggle.querySelector(".mode-text");
    const modeIcon = modeToggle.querySelector(".mode-icon");

    function updateModeButton(isDarkMode) {
        modeText.textContent = isDarkMode ? "Night mode" : "Light mode";
        modeIcon.textContent = isDarkMode ? "☾" : "☼";
        modeToggle.setAttribute("aria-pressed", isDarkMode);
        modeToggle.setAttribute(
            "aria-label",
            isDarkMode ? "Switch to light mode" : "Switch to night mode"
        );
    }

    const savedMode = localStorage.getItem("theme");
    const isDarkMode = savedMode === "dark";

    document.body.classList.toggle("dark-mode", isDarkMode);
    updateModeButton(isDarkMode);

    modeToggle.addEventListener("click", () => {
        const darkModeEnabled = document.body.classList.toggle("dark-mode");

        localStorage.setItem("theme", darkModeEnabled ? "dark" : "light");
        updateModeButton(darkModeEnabled);
    });