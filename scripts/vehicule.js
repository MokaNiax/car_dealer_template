document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const vehicleId = urlParams.get("id");

    fetch('/json/vehicules.json')
        .then(response => response.json())
        .then(data => {
            const vehicle = data[vehicleId];

            console.log(vehicleId);

            if (vehicle) {
                document.getElementById("vehicle-marque").textContent = vehicle.marque;
                document.getElementById("vehicle-modele").textContent = vehicle.modèle;
                document.getElementById("vehicle-annee").textContent = vehicle.année;
                document.getElementById("vehicle-kilometrage").textContent = vehicle.kilométrage;
                document.getElementById("vehicle-prix").textContent = vehicle.prix;
                document.getElementById("vehicle-couleur").textContent = vehicle.couleur;
                document.getElementById("vehicle-type").textContent = vehicle.type;
                document.getElementById("vehicle-carburant").textContent = vehicle.carburant;
                document.getElementById("vehicle-transmission").textContent = vehicle.transmission;
                document.getElementById("vehicle-emplacement").textContent = vehicle.emplacement;
                document.getElementById("vehicle-statut").textContent = vehicle.statut;

                const optionsList = document.getElementById("vehicle-options");
                vehicle.options.forEach(option => {
                    const listItem = document.createElement("li");
                    listItem.textContent = option;
                    optionsList.appendChild(listItem);
                });

                const albumContainer = document.getElementById("vehicle-album");
                albumContainer.innerHTML = "";

                const fullscreenOverlay = document.createElement("div");
                fullscreenOverlay.className = "fullscreen-overlay";
                fullscreenOverlay.innerHTML = `
                    <img src="" alt="Image en plein écran">
                    <span class="close-btn">&times;</span>
                `;
                document.body.appendChild(fullscreenOverlay);

                const fullscreenImg = fullscreenOverlay.querySelector("img");
                const closeBtn = fullscreenOverlay.querySelector(".close-btn");

                Object.values(vehicle.images).forEach(imageUrl => {
                    const albumItem = document.createElement("div");
                    albumItem.classList.add("album-item");

                    const img = document.createElement("img");
                    img.src = imageUrl;
                    img.alt = "Image du véhicule";

                    img.addEventListener("click", function () {
                        fullscreenImg.src = imageUrl;
                        fullscreenOverlay.classList.add("visible");
                    });

                    albumItem.appendChild(img);
                    albumContainer.appendChild(albumItem);
                });

                closeBtn.addEventListener("click", function () {
                    fullscreenOverlay.classList.remove("visible");
                });

                fullscreenOverlay.addEventListener("click", function (e) {
                    if (e.target !== fullscreenImg) {
                        fullscreenOverlay.classList.remove("visible");
                    }
                });
            } else {
                console.error("Véhicule non trouvé !");
            }
        })
        .catch(err => console.error('Erreur lors de la récupération des données du véhicule :', err));
});