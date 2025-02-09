// Interaction : Bouton message surprise
document.getElementById("btnMessage").addEventListener("click", function() {
    alert("🚀 Merci de visiter ma page !");
});

// Optionnel : Animation au survol des sections
document.querySelectorAll("section").forEach(section => {
    section.addEventListener("mouseover", () => {
        section.style.transform = "scale(1.02)";
        section.style.transition = "transform 0.3s";
    });
    section.addEventListener("mouseout", () => {
        section.style.transform = "scale(1)";
    });
});