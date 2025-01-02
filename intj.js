
document.getElementById("pcButton").addEventListener("click", function() {
    alert("Vous avez choisi PC !");
    // Rediriger vers une page ou personnaliser l'expérience utilisateur
    window.location.href = "pc-version.html";
});

document.getElementById("phoneButton").addEventListener("click", function() {
    alert("Vous avez choisi Téléphone !");
    // Rediriger vers une page ou personnaliser l'expérience utilisateur
    window.location.href = "phone-version.html";
});
// Fonction pour animer les chiffres
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target'); // Valeur cible
        const current = +counter.innerText; // Valeur actuelle
        const increment = target / 100; // Vitesse d'incrémentation

        if (current < target) {
            counter.innerText = Math.ceil(current + increment); // Ajouter un incrément
            setTimeout(updateCount, 20); // Mettre à jour toutes les 20ms
        } else {
            counter.innerText = target; // S'assurer que la valeur finale est correcte
        }
    };

    updateCount();
});
