const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.redirect('/home');
});

const routes = {
    '/home': 'index.html',
    '/vehicle': 'vehicule.html',
    '/vehicles-colabs': 'vehicules-colabs.html',
    '/vehicles-neufs': 'vehicules-neufs.html',
    '/vehicles-occasions': 'vehicules-occasions.html',
    '/vehicles-vendus': 'vehicules-vendus.html',
    '/services': 'services.html',
    '/contact': 'contact.html'
};

Object.entries(routes).forEach(([route, file]) => {
    app.get(route, (req, res) => {
        res.sendFile(path.join(__dirname, 'pages', file));
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});