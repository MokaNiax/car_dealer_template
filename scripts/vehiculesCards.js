$(document).ready(function() {
    $.getJSON('/json/vehicules.json', function(data) {
        displayVehicles(Object.values(data));
    }).fail(function() {
        console.error('Erreur lors du chargement du fichier JSON.');
    });    

    

    function displayVehicles(vehicles) {
        const container_colabs = $('#vehicules-container-colabs');
        const container_occasions = $('#vehicules-container-occasions');
        const container_neufs = $('#vehicules-container-neufs');
        const container_vendus = $('#vehicules-container-vendus');

        container_colabs.empty();
        container_occasions.empty();
        container_neufs.empty();
        container_vendus.empty();
        
        $.each(vehicles, function(index, vehicle) {
            if (vehicle.category == "V") {
                const vehicleElement = `
                    <div class="cadre-auto">
                        <img src="${vehicle.images[0]}" style="width:400px; height:300px; border-radius: 20px;">
                        <br>
                        <h1>${vehicle.marque}</h1>
                        <h2>${vehicle.modèle}</h2>
                    </div>
                `;
        
                container_vendus.append(vehicleElement);
            } else {
                const vehicleElement = `
                    <div class="cadre-auto">
                        <img src="${vehicle.images[0]}" style="width:400px; height:300px; border-radius: 20px;">
                        <br>
                        <h1>${vehicle.marque}</h1>
                        <h2>${vehicle.modèle}</h2>
                        <br>
                        Km : ${vehicle.kilométrage} km
                        <br>
                        Prix : ${vehicle.prix} €
                        <br>
                        <button onclick="location.href='/vehicle?id=${index}'">Découvrir</button>
                    </div>
                `;
        
                if (vehicle.category == "C") {
                    container_colabs.append(vehicleElement);
                } else if (vehicle.category == "O") {
                    container_occasions.append(vehicleElement);
                } else if (vehicle.category == "N") {
                    container_neufs.append(vehicleElement);
                }
            }
        });
    }
});