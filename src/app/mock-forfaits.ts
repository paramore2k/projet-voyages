import {Forfaits} from './forfaits';

export const TabForfaits: Forfaits[] = [
  {
    _id: 1,
    destination: 'Cancun, Mexique',
    villeDepart: 'Montréal',
    dateDepart: '2021-02-07',
    dateRetour: '2020-02-14',
    duree: '7 Jours',
    prix: 1039,
    photo: 'https://i.imgur.com/sfH7fZx.jpg',
    forfaitEnVedette: true,
    rabais: 300,
    hotel: {
      nom: 'Dreams Sands Cancun Resort & Spa',
      nombreEtoiles: 4,
      nombreChambres: 438,
      coordonnees: 'Blvr Kukulcan km 8.5, Zona Hotelera',
      caracteristiques: ['Wi-fi Gratuit', `Salle d'exercice`, 'Miniclub', 'Face à la plage', '2 piscines']
    },
  },
  {
    _id: 2,
    dateDepart: '2021-02-01',
    dateRetour: '2021-02-08',
    duree: '7 Jours',
    prix: 980,
    photo: 'https://i.imgur.com/2Xt3Or3.jpg',
    forfaitEnVedette: true,
    rabais: 250,
    villeDepart: 'Québec',
    destination: 'Punta Cana, République dominicaine',
    hotel: {
      nom: 'VIK hotel Arena Blanca',
      nombreEtoiles: 4,
      nombreChambres: 456,
      coordonnees: 'Carretera Arena Gorda, Bavaro',
      caracteristiques: ['Miniclub', `Près d'un parc`, `Salle d'exercise`, 'Sur la plage', `Vue sur la mer`]
    },
  },
  {
    _id: 3,
    dateDepart: '2021-02-17',
    dateRetour: '2021-02-24',
    duree: '7 Jours',
    prix: 1139,
    photo: 'https://i.imgur.com/aiVEjMo.jpg',
    forfaitEnVedette: true,
    rabais: 350,
    villeDepart: 'Québec',
    destination: 'Riviera Maya, Mexique',
    hotel: {
      nom: 'Now Jade Riviera Cancun',
      nombreEtoiles: 5,
      nombreChambres: 550,
      coordonnees: 'Puerto Morelos Benito Juarez, Mexique',
      caracteristiques: ['Wi-fi', 'Spa', '3 piscines', `Salle d'exercise`, '9 restaurants']
    },
  },
  {
    _id: 4,
    dateDepart: '2021-02-18',
    dateRetour: '2021-02-25',
    duree: '7 Jours',
    prix: 1369,
    photo: 'https://i.imgur.com/cYKHlVz.jpg',
    forfaitEnVedette: false,
    rabais: 0,
    villeDepart: 'Toronto',
    destination: 'Punta Cana',
    hotel: {
      nom: 'Majestic Colonial Punta Cana',
      nombreEtoiles: 4,
      nombreChambres: 658,
      coordonnees: 'Arena Gorda, Macao, Higuey, République dominicaine',
      caracteristiques: ['Wi-fi Gratuit', 'Section adulte', 'Minibar', 'Face à la plage' , `Près d'un parc`]
    },
  },
  {
    _id: 5,
    dateDepart: '2020-02-04',
    dateRetour: '2020-02-11',
    duree: '7 Jours',
    prix: 1379,
    photo: 'https://i.imgur.com/EDVXyPj.jpg',
    forfaitEnVedette: false,
    rabais: 15,
    villeDepart: 'Québec',
    destination: 'La Havane, Cuba',
    hotel: {
      nom: 'Hotel Nacional',
      nombreEtoiles: 4,
      nombreChambres: 426,
      coordonnees: 'Calle 0, esq. 21 Vedado, La Havane',
      caracteristiques: ['Wi-fi Gratuit', 'Déjeuner inclus', `Près d'un lieu culturel`, 'En ville']
    },
  },
  {
    _id: 6,
    dateDepart: '2020-02-04',
    dateRetour: '2020-02-11',
    duree: '7 Jours',
    prix: 809,
    photo: 'https://i.imgur.com/mMyZjMn.jpg',
    forfaitEnVedette: false,
    rabais: 100,
    villeDepart: 'Montréal',
    destination: 'Varadero, Cuba',
    hotel: {
      nom: 'Mar Del Sur',
      nombreEtoiles: 2,
      nombreChambres: 280,
      coordonnees: 'Varadero, Matanzas',
      caracteristiques: ['Wi-fi Gratuit', 'Coffret de sûreté', 'En ville', 'Près de la plage']
    },
  },
];
