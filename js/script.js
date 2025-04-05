const btn = document.getElementById("theme-toggle");
const darkIcon = document.getElementById("theme-toggle-dark-icon");
const lightIcon = document.getElementById("theme-toggle-light-icon");

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  // show the light icon
  lightIcon.classList.remove("hidden");
} else {
  darkIcon.classList.remove("hidden");
}

// Listen for toggle button click
btn.addEventListener("click", toggleMode);

function toggleMode() {
  // Toggle icon
  darkIcon.classList.toggle("hidden");
  lightIcon.classList.toggle("hidden");

  //   If is set in localStorage
  if (localStorage.getItem("color-theme")) {
    // If light, make it dark and save
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {
    // If not in localstorage
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
}
