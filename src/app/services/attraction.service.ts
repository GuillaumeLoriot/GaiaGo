import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import attraction from '../models/attraction.interface';
import Attraction from '../models/attraction.interface';

@Injectable({
  providedIn: 'root'
})
export class AttractionService {

  constructor() { }

  //Renvoie un Observable après 2sec qui contient un tableau d' attraction, simulation d'un appel API
getAll(): Observable<attraction[]> {
  return new Observable(observer => {
    setTimeout(() => {
      observer.next([
{
    id: 1,
    title: "Rozafa Castle",
    city: "Shkodër",
    country: "Albanie",
    longitude: 19.5464,
    latitude: 42.0722,
    description: `Perché sur un promontoire rocheux surplombant le lac de Shkodër, le château de Rozafa est l'un des sites historiques les plus emblématiques d'Albanie. Sa construction remonte au XIIIᵉ siècle, et ses murs fortifiés racontent les nombreuses batailles et sièges qu'il a connus.

La légende de Rozafa raconte qu'une jeune femme fut sacrifiée et incorporée dans les fondations pour assurer la solidité des murs, créant un puissant mythe local transmis de génération en génération.

Depuis les remparts, les visiteurs admirent une vue imprenable sur le lac et les montagnes environnantes, offrant un contraste saisissant entre la pierre ancienne et les eaux paisibles.

Un petit musée hébergé à l'intérieur expose des artefacts archéologiques, permettant de comprendre l'évolution du site du Moyen Âge à nos jours.
`,
    image: "/images/rozafa-castle.jpg",
    isMonument: true,
  },
  {
    id: 2,
    title: "Palais de Schönbrunn",
    city: "Vienne",
    country: "Autriche",
    longitude: 16.3122,
    latitude: 48.1845,
    description: `Ancienne résidence d'été de la dynastie des Habsbourg, le palais de Schönbrunn est un chef-d'œuvre baroque inscrit au patrimoine mondial de l'UNESCO.

Le complexe comprend plus de 1 400 pièces, dont les somptueux appartements impériaux et le grand escalier de marbre, reflet du pouvoir et du raffinement de la monarchie autrichienne.

Les jardins à la française, dessinés au XVIIIᵉ siècle, s'étendent sur 160 hectares et abritent la gloriette, offrant un belvédère sur l'ensemble du domaine.

Le zoo de Schönbrunn, le plus ancien d'Europe, se trouve à proximité, complétant l'expérience culturelle et naturelle du site.
`,
    image: "/images/palais-schonbrunn.jpg",
    isMonument: true,
  },
  {
    id: 3,
    title: "Grand-Place",
    city: "Bruxelles",
    country: "Belgique",
    longitude: 4.3528,
    latitude: 50.8466,
    description: `Centre névralgique de la capitale belge, la Grand-Place est entourée de façades richement ornées, mêlant styles gothique, baroque et Louis XIV.

Classée au patrimoine mondial de l'UNESCO, elle accueille des événements culturels, dont le célèbre tapis de fleurs réalisé tous les deux ans.

Le beffroi de l'hôtel de ville et la maison du Roi sont parmi les monuments les plus remarquables, témoins de l'histoire politique et économique de la ville.

Le soir, l'éclairage met en valeur les dorures et sculptures, offrant un spectacle féérique aux visiteurs.
`,
    image: "/images/grand-place.jpg",
    isMonument: true,
  },
  {
    id: 4,
    title: "Cathédrale Alexandre-Nevsky",
    city: "Sofia",
    country: "Bulgarie",
    longitude: 23.3320,
    latitude: 42.6951,
    description: `Construite au début du XXᵉ siècle, la cathédrale Alexandre-Nevsky est le plus grand édifice orthodoxe de Bulgarie et un symbole national.

Ses immenses dômes dorés et ses mosaïques intérieures représentant des scènes bibliques émerveillent les visiteurs par leur finesse artistique.

La crypte abrite la galerie nationale d'icônes, présentant des œuvres de grands maîtres russes et bulgares.

Située au cœur de Sofia, la cathédrale domine la place éponyme et constitue un point de repère incontournable pour découvrir la capitale.
`,
    image: "/images/cathedrale-alexandre-nevsky.jpg",
    isMonument: true,
  },
  {
    id: 5,
    title: "La Petite Sirène",
    city: "Copenhague",
    country: "Danemark",
    longitude: 12.5993,
    latitude: 55.6929,
    description: `Inspirée du conte de Hans Christian Andersen, la statue de la Petite Sirène fut offerte en 1913 par le sculpteur Edvard Eriksen.

Réalisée en bronze, elle représente une sirène assise sur un rocher, contemplant la mer en quête de son prince.

Malgré sa petite taille (environ 1,25 m), elle est devenue un symbole international du Danemark et attire des millions de visiteurs chaque année.

Le site offre également de belles promenades le long du port, ponctuées de bateaux colorés et de cafés en plein air.
`,
    image: "/images/petite-sirene.jpg",
    isMonument: true,
  },
  {
    id: 6,
    title: "Cathédrale d'Helsinki",
    city: "Helsinki",
    country: "Finlande",
    longitude: 24.9522,
    latitude: 60.1699,
    description: `Dessiné par l'architecte allemand Carl Ludvig Engel et inauguré en 1852, ce chef-d'œuvre néoclassique domine la place du Sénat.

Les dômes verts et la façade blanche contrastent avec le front de mer, créant un paysage urbain élégant.

L'intérieur sobre et lumineux est orné de colonnes et d'un orgue majestueux, offrant une atmosphère de recueillement.

Des concerts de musique classique y sont régulièrement organisés, profitant de l'acoustique remarquable de la nef.
`,
    image: "/images/cathedrale-helsinki.jpg",
    isMonument: true,
  },
  {
    id: 7,
    title: "Porte de Brandebourg",
    city: "Berlin",
    country: "Allemagne",
    longitude: 13.3777,
    latitude: 52.5163,
    description: `Édifiée entre 1788 et 1791, la porte de Brandebourg est un vestige des douze portes historiques de la ville.

Inspirée de l'Acropole d'Athènes, elle se compose de six colonnes ioniques surmontées d'un quadrige sculpté par Johann Gottfried Schadow.

Symbole de la réunification allemande, elle fut le lieu de manifestations historiques lors de la chute du mur en 1989.

Aujourd'hui, elle constitue le point culminant de l'avenue Unter den Linden et un lieu de rassemblement pour événements nationaux et internationaux.
`,
    image: "/images/porte-brandebourg.jpg",
    isMonument: true,
  },
  {
    id: 8,
    title: "Château de Buda",
    city: "Budapest",
    country: "Hongrie",
    longitude: 19.0390,
    latitude: 47.4965,
    description: `Surplombant le Danube, le Château de Buda fut la résidence officielle des rois de Hongrie depuis le XIIIᵉ siècle. Le complexe intègre des styles gothique, baroque et néoclassique.

Pendant la Seconde Guerre mondiale, le palais fut largement détruit, mais il a été restauré pour retrouver son faste d'antan. Aujourd'hui, il abrite la Galerie nationale hongroise et le Musée d'histoire de Budapest.

Les promenades dans les jardins royaux offrent des vues pittoresques sur Pest et les ponts historiques franchissant le fleuve.

La colline du château est un site classé UNESCO, propice aux explorations à pied ou en funiculaire.
`,
    image: "/images/château-buda.jpg",
    isMonument: true,
  },
  {
    id: 9,
    title: "Falaises de Moher",
    city: "Liscannor",
    country: "Irlande",
    longitude: -9.4309,
    latitude: 52.9715,
    description: `Émergeant de l'Atlantique à près de 214 m d'altitude, les falaises de Moher s'étendent sur huit kilomètres le long de la côte ouest de l'Irlande.

Ces falaises sont sculptées par l'érosion, offrant des formations géologiques impressionnantes et des habitats pour plus de 20 espèces d'oiseaux marins.

La passerelle aménagée permet d'admirer des panoramas changeant selon la lumière et la météo, souvent embrumée, créant une atmosphère mystique.

Au sommet, le centre d'accueil présente une exposition interactive sur la géologie, la faune et les légendes liées aux falaises.
`,
    image: "/images/falaises-moher.jpg",
    isMonument: false,
  },
  {
    id: 10,
    title: "Vieille Ville de Riga",
    city: "Riga",
    country: "Lettonie",
    longitude: 24.1052,
    latitude: 56.9496,
    description: `Inscrite au patrimoine mondial de l'UNESCO, la vieille ville de Riga combine architecture médiévale et style Art nouveau, témoignage de l'âge d'or de la capitale lettone.

Les rues pavées mènent à la cathédrale de Riga, construite au XIIIᵉ siècle, et à la maison des Têtes Noires, ornée de statuts et de sculptures.

Le quartier abrite également de nombreux cafés, galeries d'art et boutiques d'artisans, participant à l'atmosphère vivante du centre historique.

Les visites guidées racontent l'histoire hanséatique de Riga et sa renaissance après l'indépendance.
`,
    image: "/images/vieille-riga.jpg",
    isMonument: true,
  },
  {
    id: 11,
    title: "Vieille ville de Mdina",
    city: "Mdina",
    country: "Malte",
    longitude: 14.4039,
    latitude: 35.8860,
    description: `Surnommée la ‘‘Cité du Silence', Mdina était l'ancienne capitale de Malte, fortifiée dès l'époque romaine et médiévale.

Ses remparts en calcaire taillé abritent des ruelles étroites et tortueuses, bordées de palais nobles aux portes richement sculptées.

Du bastion de l'entrée principale, la vue s'étend sur la plaine centrale de Malte et la Méditerranée à l'horizon.

Le palais Vilhena, transformé en musée, expose des collections d'art, d'armes et d'archives retraçant l'histoire de l'île.
`,
    image: "/images/vieille-mdina.jpg",
    isMonument: true,
  },
  {
    id: 12,
    title: "Temple de Garni",
    city: "Garni",
    country: "Arménie",
    longitude: 44.6579,
    latitude: 40.0731,
    description: `Unique temple païen hellénistique intact à l'est du Bosphore, le temple de Garni fut construit au Ier siècle apr. J.-C. par le roi Tiridate Iᵉʳ.

Perché sur une gorge dessinée par la rivière Azat, le site offre des panoramas vertigineux sur les montagnes du Caucase.

Les colonnes corinthiennes et la cella centrale ont été restaurées après le tremblement de terre de 1679, préservant l'élégance antique.

Le site comprend également une ancienne résidence royale et des bains thermaux datant de l'époque romaine.
`,
    image: "/images/temple-garni.jpg",
    isMonument: true,
  },
  {
    id: 13,
    title: "Fort Lalbagh",
    city: "Dacca",
    country: "Bangladesh",
    longitude: 90.3805,
    latitude: 23.7227,
    description: `Datant du XVIIᵉ siècle, le fort Lalbagh est un complexe inachevé érigé par le vice-roi moghol Muhammad Azam Shah.

Il comprend une mosquée élégante, un tombeau orné de marbre et un hall d'audience, tous entourés de jardins formaux.

La légende locale évoque la mort tragique de Bibi Pari, fille du gouverneur, dont le mausolée est le joyau du site.

Les murs en briques rouges et les terrasses surélevées témoignent de l'architecture militaire et civile moghole.
`,
    image: "/images/fort-lalbagh.jpg",
    isMonument: true,
  },
  {
    id: 14,
    title: "Mosquée Omar Ali Saifuddien",
    city: "Bandar Seri Begawan",
    country: "Brunéi",
    longitude: 114.9429,
    latitude: 4.8900,
    description: `Chef-d'œuvre de l'architecture islamique moderne, la mosquée Omar Ali Saifuddien fut inaugurée en 1958.

Son dôme recouvert d'or massif et ses minarets élancés dominent le lac artificiel entourant le site.

L'intérieur est orné de marbre italien, de mosaïques importées et d'un mihrab richement sculpté.

Le site est un lieu de culte actif et un symbole du sultanat, accueillant prières quotidiennes et festivals religieux.
`,
    image: "/images/mosquée-omar-ali-saifuddien.jpg",
    isMonument: true,
  },
    {
    id: 15,
    title: "Grande Muraille (Badaling)",
    city: "Pékin",
    country: "Chine",
    longitude: 116.0240,
    latitude: 40.3620,
    description: `La section de Badaling, construite sous la dynastie Ming au XVIᵉ siècle, est l'un des tronçons les plus accessibles et restaurés de la Grande Muraille.

Conçue pour défendre la capitale contre les incursions mongoles, elle s'étend sur plus de 7 km autour de Pékin, avec des tours de guet permettant la transmission de signaux par feu et fumée.

Les travaux de restauration ont été menés au XXᵉ siècle pour préserver son architecture d'origine : créneaux, chemin de ronde et escaliers taillés dans la roche.

Aujourd'hui, Badaling accueille jusqu'à 10 000 visiteurs par jour, offrant des sentiers balisés et de superbes panoramas sur les collines boisées environnantes.`,
    image: "/images/grande-muraille.jpg",
    isMonument: true,
  },
  {
    id: 16,
    title: "Taj Mahal",
    city: "Agra",
    country: "Inde",
    longitude: 78.0421,
    latitude: 27.1751,
    description: `Édifié entre 1631 et 1648 par l'empereur moghol Shah Jahan en mémoire de son épouse Mumtaz Mahal, le Taj Mahal est un chef-d'œuvre de marbre blanc.

Le mausolée repose sur une plateforme octogonale, entourée de quatre minarets inclinés vers l'extérieur pour protéger l'édifice en cas d'effondrement.

La décoration intègre plus de trente variétés de pierres semi-précieuses (lapis-lazuli, jaspe, agate) incrustées selon la technique du « pietra dura », formant des motifs floraux et calligraphiques.

Au lever et au coucher du soleil, la luminosité changeante fait varier la couleur du marbre, créant un spectacle quotidien et attirant des millions de visiteurs chaque année.`,
    image: "/images/taj-mahal.jpg",
    isMonument: true,
  },
  {
    id: 17,
    title: "Persepolis",
    city: "Marvdasht",
    country: "Iran",
    longitude: 52.8915,
    latitude: 29.9350,
    description: `Fondée en 518 av. J.-C. par Darius Iᵉʳ, Persépolis fut la capitale cérémonielle de l'empire achéménide, symbole de la puissance perse.

La terrasse d'apparat est ornée de bas-reliefs représentant les délégations tribales offrant des tributs au roi, mettant en scène plus de 23 nations.

Les palais à colonnes monumentales et le grand escalier montrent l'influence architecturale grecque et mésopotamienne.

Après son sac lors de la conquête d'Alexandre le Grand en 330 av. J.-C., les ruines colossalement dispersées témoignent encore de la richesse et de l'organisation de l'empire.`,
    image: "/images/persepolis.jpg",
    isMonument: true,
  },
  {
    id: 18,
    title: "Mur des Lamentations",
    city: "Jérusalem",
    country: "Israël",
    longitude: 35.2345,
    latitude: 31.7767,
    description: `Dernier vestige du Second Temple détruit en 70 apr. J.-C., le Mur des Lamentations est le lieu de prière le plus sacré du judaïsme.

Composée de blocs de pierre massive pesant parfois plusieurs tonnes, sa partie supérieure date de l'époque d'Hérode le Grand.

Chaque jour, les fidèles glissent des notes de prières dans les interstices, espérant l'intercession divine.

Pendant le shabbat et les fêtes juives, le site vibre des chants et offices, attirant pèlerins et touristes du monde entier.`,
    image: "/images/mur-lamentations.jpg",
    isMonument: true,
  },
  {
    id: 19,
    title: "Al Khazneh (Trésor)",
    city: "Petra",
    country: "Jordanie",
    longitude: 35.4444,
    latitude: 30.3285,
    description: `Sculptée directement dans la falaise de grès rose, la façade d'Al Khazneh est l'emblème de la cité nabatéenne de Petra.

Datant du Ier siècle av. J.-C., son nom (« Trésor ») vient de la légende d'un trésor caché derrière la porte haute de 40 m.

Son style mêle éléments hellénistiques (colonnes corinthiennes) et motifs moyen-orientaux.

Après l'exploration de l'archéologue Johann Ludwig Burckhardt en 1812, le site est aujourd'hui classé UNESCO et parcouru par un long Siq (gorge étroite).`,
    image: "/images/al-khazneh.jpg",
    isMonument: true,
  },
  {
    id: 20,
    title: "Tours du Koweït",
    city: "Koweït City",
    country: "Koweït",
    longitude: 47.9783,
    latitude: 29.3697,
    description: `Inaugurées en 1979, les Tours du Koweït sont un ensemble de trois tours modernes symbolisant la renaissance économique du pays.

La principale, haute de 187 m, abrite un restaurant tournant et un observatoire offrant une vue à 360° sur la ville et le golfe.

La deuxième tour sert de réservoir d'eau, tandis que la troisième est consacrée aux éclairages et au générateur de secours.

Le design, mêlant boules métalliques et fûts élancés, s'inspire de l'architecture islamique contemporaine.`,
    image: "/images/tours-koweït.jpg",
    isMonument: true,
  },
  {
    id: 21,
    title: "Wat Xieng Thong",
    city: "Louangphrabang",
    country: "Laos",
    longitude: 102.1332,
    latitude: 19.8860,
    description: `Érigé en 1560 par le roi Setthathirath, le Wat Xieng Thong est l'un des temples les plus vénérés du Laos.

Sa toiture en baldaquin basse et ses murs latéraux ornés de mosaïques en verre et d'or racontent des scènes de la vie du Bouddha.

Le toit est composé de cinq niveaux superposés, typiques du style lan, créant une silhouette reconnaissable de loin.

À l'intérieur, l'oratoire principal abrite une statue sacrée et un pan de mosaïque illustrant le désir de vie éternelle.`,
    image: "/images/wat-xieng-thong.jpg",
    isMonument: true,
  },
    {
    id: 22,
    title: "Casbah d'Alger",
    city: "Alger",
    country: "Algérie",
    longitude: 3.0588,
    latitude: 36.7741,
    description: `Classée au patrimoine mondial de l'UNESCO, la Casbah d'Alger est une ancienne médina ottomane construite à flanc de colline au XVIᵉ siècle.

Ses ruelles étroites, bordées de maisons blanches aux balcons en bois ajouré, forment un véritable labyrinthe urbain, reflet des différents pouvoirs qui se sont succédé.

Du haut de ses remparts, on domine la baie d'Alger et le port, offrant un panorama contrastant avec l'activité dense du front de mer.

Des palais, mosquées et hammams témoignent de l'importance historique et architecturale de la Casbah, restaurée grâce à des projets de sauvegarde internationale.`,

    image: "/images/casbah-alger.jpg",
    isMonument: true,
  },
  {
    id: 23,
    title: "Palais royaux d'Abomey",
    city: "Abomey",
    country: "Bénin",
    longitude: 2.0967,
    latitude: 7.1800,
    description: `Résidence des rois du Dahomey du XVIIᵉ au XIXᵉ siècle, le palais d'Abomey est un ensemble de douze palais fortifiés aux murs en terre crue.

Chaque palais possède une façade ornée de bas-reliefs illustrant des faits historiques et des mythes fondateurs du royaume.

Le site, classé UNESCO, abrite aujourd'hui un musée qui expose costumes royaux, sculptures et objets rituels témoignant de la richesse culturelle du Bénin.

Les toits de chaume et les enceintes imposantes évoquent le pouvoir des anciens souverains et la complexité de leur administration.`,

    image: "/images/palais-royaux-abomey.jpg",
    isMonument: true,
  },
  {
    id: 24,
    title: "Ruines de Loropéni",
    city: "Loropéni",
    country: "Burkina Faso",
    longitude: -3.6370,
    latitude: 10.8928,
    description: `Loropéni est un site fortifié en pierre datant du XIᵉ au XVᵉ siècle, vestige d'un ancien empire sahélien du fer.

Les murailles de plusieurs mètres de haut, construites sans mortier, entourent un vaste espace où subsistent les fondations de bâtiments résidentiels et de tours.

Classées UNESCO en 2009, ces ruines offrent un témoignage rare de l'organisation politique et économique des populations précoloniales.

Leur état de conservation permet d'imaginer les diasporas commerciales qui contrôlaient le commerce de l'or et du sel dans la région.`,

    image: "/images/ruines-loropéni.jpg",
    isMonument: false,
  },
  {
    id: 25,
    title: "Mont Cameroun",
    city: "Buea",
    country: "Cameroun",
    longitude: 9.1700,
    latitude: 4.2036,
    description: `Plus haut sommet d'Afrique centrale à 4 040 mètres, le Mont Cameroun est un volcan actif qui domine le paysage du Sud-Ouest du pays.

Les forêts tropicales denses à sa base font place à des landes alpines avant d'atteindre son cratère fumant, accessible par une ascension de plusieurs jours.

Les peuples locaux Bakweri lui attribuent des légendes spirituelles où le volcan est vénéré comme le gardien des terres fertiles.

Chaque année, des milliers de randonneurs relèvent le défi de conquérir son sommet pour admirer un panorama s'étendant jusqu'à l'océan Atlantique par temps clair.`,

    image: "/images/mont-cameroun.jpg",
    isMonument: false,
  },
  {
    id: 26,
    title: "Réserve de Dzanga-Sangha",
    city: "Bayanga",
    country: "République centrafricaine",
    longitude: 16.0333,
    latitude: 2.8167,
    description: `Au cœur de la forêt tropicale d'Afrique centrale, la réserve de Dzanga-Sangha protège une biodiversité remarquable, dont éléphants de forêt et gorilles.

Les cours d'eau de la Sangha abritent des troupes de babouins et des centaines d'espèces d'oiseaux, dont le calao terrestre.

Les programmes de suivi écologique et de tourisme communautaire impliquent les peuples autochtones Bayaka, préservant leur mode de vie traditionnel.

Des balades en pirogue et des pistes d'observation offrent des rencontres inoubliables avec la faune, soulignant l'importance de la conservation.`,

    image: "/images/réserve-dzanga-sangha.jpg",
    isMonument: false,
  },
  {
    id: 27,
    title: "Mont Karthala",
    city: "Grande Comore",
    country: "Comores",
    longitude: 43.3333,
    latitude: -11.3750,
    description: `Le Mont Karthala est un volcan actif culminant à 2 361 mètres, formant la colonne vertébrale de l'île de Grande Comore.

Ses dernières éruptions (2005, 2006) ont sculpté des coulées de lave noire sur ses flancs et créé de nouveaux cratères.

L'ascension, technique et exigeante, conduit à un caldeira de plus de 3 km de diamètre abritant un lac de lave incandescent.

Les panoramas depuis le bord du cratère dominent l'océan Indien, tandis que la flore endémique prospère sur les pentes fertiles.`,

    image: "/images/mont-karthala.jpg",
    isMonument: false,
  },
  {
    id: 28,
    title: "Basilique Notre-Dame de la Paix",
    city: "Yamoussoukro",
    country: "Côte d'Ivoire",
    longitude: -5.2893,
    latitude: 6.8276,
    description: `Inaugurée en 1989, la Basilique Notre-Dame de la Paix de Yamoussoukro est la plus grande église du monde par superficie.

Inspirée de Saint-Pierre de Rome, elle est construite en marbre blanc et ornée de vitraux colorés illustrant la vie du Christ.

Son dôme culminant à 158 mètres est visible à des kilomètres à la ronde, symbole de la volonté de modernisation du pays.

Le complexe comprend des jardins, une place d'honneur et des mosaïques byzantines, témoignant d'une architecture monumentale audacieuse.`,

    image: "/images/basilique-notre-dame-de-la-paix.png",
    isMonument: true,
  },
  {
    id: 29,
    title: "Grande Pyramide de Gizeh",
    city: "Gizeh",
    country: "Égypte",
    longitude: 31.1342,
    latitude: 29.9792,
    description: `Érigée vers 2560 av. J.-C. pour le pharaon Khéops, la Grande Pyramide de Gizeh est le plus ancien et le seul vestige des Sept Merveilles du monde antique.
    
Sa structure en calcaire fin et granit rose est parfaitement alignée sur les points cardinaux, témoignant d'une maîtrise géométrique et astronomique remarquable pour l'époque.
    
À l'intérieur, un réseau de couloirs et de chambres—dont la chambre funéraire du roi—illustre le savoir-faire des ouvriers égyptiens et leurs techniques de transport de blocs gigantesques.
    
Malgré l'érosion et les pillages, elle conserve encore aujourd'hui son volume colossal (2,5 millions de blocs pour 146 m de hauteur initiale).`,
    image: "/images/grande pyramide-gizeh.jpg",
    isMonument: true,
  },
  {
    id: 30,
    title: "Réserve de Mlilwane",
    city: "Ezulwini",
    country: "Eswatini",
    longitude: 31.1333,
    latitude: -26.4667,
    description: `Première réserve faunique protégée d'Eswatini (ex-Swaziland), Mlilwane couvre 4 560 hectares de collines et de vallées verdoyantes.

Elle abrite antilopes, zèbres, buffles, et une riche avifaune, que l'on peut observer à pied, à vélo ou à cheval sur des pistes balisées.
    
Le lodge principal, construit dans un style traditionnel, offre hébergement et initiation à la culture swazi grâce à des danses et des ateliers artisanaux.
    
La réserve met l'accent sur le tourisme communautaire durable, en reversant une partie des revenus aux villages environnants.`,
    image: "/images/réserve-mlilwane.jpg",
    isMonument: false,
  },
  {
    id: 31,
    title: "Parc national de Loango",
    city: "Omboué",
    country: "Gabon",
    longitude: 9.6716,
    latitude: -2.4925,
    description: `Surnommé le « pays des éléphants sur la plage », Loango est un parc côtier de 1 550 km² mêlant mangroves, forêts tropicales et lagunes.

On y trouve hippopotames, buffles, gorilles et chimpanzés, mais aussi flamants roses et oiseaux migrateurs le long du littoral.
    
Les safaris 4×4, en bateau ou à pied permettent d'approcher la faune dans son milieu naturel, encadrés par des guides locaux.
    
Classé réserve de biosphère par l'UNESCO, Loango est un modèle de conservation intégrée associant recherche, éducation et développement durable.`,
    image: "/images/parc-national-loango.jpg",
    isMonument: false,
  },
  {
    id: 32,
    title: "Réserve nationale du Maasai Mara",
    city: "Narok",
    country: "Kenya",
    longitude: 35.0100,
    latitude: -1.4061,
    description: `Voisine de la réserve tanzanienne du Serengeti, la Maasai Mara est réputée pour la Grande Migration annuelle de gnous, zèbres et gazelles.

La saison sèche (juillet-octobre) voit plus de deux millions d'animaux traverser la Mara River, affrontant crocodiles et rapides.
    
Le parc couvre 1 510 km² de savanes, collines et forêts d'acacias, et accueille lions, léopards, guépards et éléphants.
    
Les guides maasaï, gardiens du territoire depuis des siècles, offrent une expertise unique sur les traditions, la faune et la flore locales.`,
    image: "/images/reserve-maasai-mara.avif",
    isMonument: false,
  },
  {
    id: 33,
    title: "Chutes d'Iguazú",
    city: "Puerto Iguazú",
    country: "Argentine",
    longitude: -54.4367,
    latitude: -25.6953,
    description: `À la frontière avec le Brésil, les chutes d'Iguazú forment un ensemble de 275 cascades sur 2,7 km, dont la spectaculaire Gorge du Diable (82 m de hauteur).

Classé UNESCO, le parc national protégé abrite une biodiversité luxuriante : jaguars, fourmiliers et coatis y évoluent librement.

Les passerelles et trains écologiques permettent d'accéder aux différents points de vue, dont la passerelle suspendue au-dessus de la gueule de la gorge.

L'effet de brume et l'arc-en-ciel presque permanent créent une ambiance mystique, renforcée par le grondement continu des chutes.`,
    image: "/images/chutes-iguazu.jpg",
    isMonument: false,
  },
  {
    id: 34,
    title: "Grottes de Harrison",
    city: "Bridgetown",
    country: "Barbade",
    longitude: -59.6167,
    latitude: 13.1000,
    description: `Formées il y a plus de 400 millions d'années dans la calcaire corallien, les grottes de Harrison offrent stalactites et stalagmites spectaculaires.

Un réseau de cavernes souterraines, accessible en tramway ou à pied, se termine par un lac souterrain aux eaux claires.

Des légendes locales racontent que des pirates y cachaient leur butin, ajoutant un charme mystique à la visite.

Le site est équipé d'éclairages doux et interactifs pour sensibiliser à la géologie et à la préservation du milieu souterrain.`,
    image: "/images/grottes-harrison.jpg",
    isMonument: false,
  },
  {
    id: 35,
    title: "Salar d'Uyuni",
    city: "Uyuni",
    country: "Bolivie",
    longitude: -67.4891,
    latitude: -20.1338,
    description: `Le plus grand désert de sel au monde (10 582 km²), le salar d'Uyuni résulte de l'assèchement d'un lac ancestral il y a 40 000 ans.

Pendant la saison des pluies, une fine pellicule d'eau transforme la surface en miroir géant, reflétant le ciel à l'infini.

On y trouve l'île Incahuasi, couverte de cactus géants et offrant un panorama exceptionnel sur le désert blanc.

Le salar est également une importante réserve de lithium, dont l'exploitation pose des enjeux environnementaux et économiques majeurs.`,
    image: "/images/salar-uyuni.jpg",
    isMonument: false,
  },
  {
    id: 36,
    title: "Chutes du Niagara",
    city: "Niagara Falls",
    country: "Canada",
    longitude: -79.0377,
    latitude: 43.0962,
    description: `Formées il y a environ 12 000 ans par la fonte des glaciers, les chutes du Niagara sont constituées de trois sections : Horseshoe, American et Bridal Veil.

Le débit moyen de 2 400 m³/s en fait l'une des plus puissantes chutes d'eau du monde, offrant un spectacle sonore et visuel impressionnant.

Au pied des falaises, la brume crée des arcs-en-ciel permanents, tandis que des excursions en bateau (Maid of the Mist) plongent les visiteurs dans la puissance du courant.

Le site est aussi un centre historique : l'aménagement hydroélectrique de Sir Adam Beck a façonné le développement industriel de la région dès 1922.`,
    image: "/images/chutes-niagara.jpg",
    isMonument: false,
  },
  {
    id: 37,
    title: "Centre historique de Carthagène",
    city: "Carthagène",
    country: "Colombie",
    longitude: -75.4794,
    latitude: 10.3910,
    description: `Fondée en 1533, Carthagène des Indes fut un port clé de l'empire espagnol et défendue par d'imposantes murailles et forteresses.

Le centre historique, classé UNESCO, dévoile des rues colorées, des balcons fleuris et des places ombragées, témoignant de l'architecture coloniale.

La forteresse de San Felipe de Barajas, construite au XVIIᵉ siècle, couronne la ville et offre des vues stratégiques sur la baie.

La ville vibre aujourd'hui entre traditions caraïbes et influence afro-colombienne, avec musique live et gastronomie locale dans les ruelles piétonnes.`,
    image: "/images/centre-carthagene.webp",
    isMonument: true,
  },
  {
    id: 38,
    title: "Vieille Havane",
    city: "La Havane",
    country: "Cuba",
    longitude: -82.3666,
    latitude: 23.1136,
    description: `Fondée en 1519, la Vieille Havane est le quartier historique où l'on retrouve forteresses, cathédrales baroques et places coloniales.

Le Malecón, digue emblématique, longe le front de mer et se transforme en agora pour les promeneurs au coucher du soleil.

Les voitures rétro des années 1950, omniprésentes, contribuent au charme suranné de la ville, tandis que les cours intérieures abritent des ateliers d'artistes.

Inscrite UNESCO, la Vieille Havane est un creuset culturel où danses, musique et artisanat conjuguent passé et présent.`,
    image: "/images/vieille-havane.jpeg",
    isMonument: true,
  },
  {
    id: 39,
    title: "Plages de Punta Cana",
    city: "Punta Cana",
    country: "République dominicaine",
    longitude: -68.3600,
    latitude: 18.5700,
    description: `Situées à l'extrémité orientale de l'île, les plages de Punta Cana s'étendent sur plus de 50 km de sable blanc et d'eaux turquoise.

Protégées par une barrière de corail, elles offrent des conditions idéales pour la baignade, la plongée et la planche à voile.

Les écosystèmes environnants, mangroves et cocoteraies, abritent une faune variée : iguanes, oiseaux tropicaux et tortues marines.

La région a développé un tourisme responsable avec réserves naturelles (parc écologique Indigenous Eyes) et initiatives de protection du littoral.`,
    image: "/images/punta-cana.jpg",
    isMonument: false,
  },
  {
    id: 40,
    title: "Volcan Santa Ana",
    city: "Santa Ana",
    country: "El Salvador",
    longitude: -89.6560,
    latitude: 14.4730,
    description: `Aussi appelé Ilamatepec, le volcan Santa Ana culmine à 2 381 m et forme un des trois stratovolcans dominants de la chaîne montagneuse du pays.

Son cratère actif renferme un lac acide vert émeraude, alimenté par des sources thermales souterraines.

La randonnée (environ 4 h aller-retour) traverse forêts de pins, plantations de café et offre des vues panoramiques sur le lac Coatepeque.

Lors de l'éruption de 2005, des coulées pyroclastiques sculptèrent les flancs, mais le volcan reste surveillé en permanence par les autorités géologiques.`,
    image: "/images/volcan-santa-ana.jpg",
    isMonument: false,
  },
  {
    id: 41,
    title: "Tikal",
    city: "Flores",
    country: "Guatemala",
    longitude: -89.6237,
    latitude: 17.2210,
    description: `Découverte en 1848 par Modesto Méndez, Tikal fut l'une des plus grandes cités mayas (VIᵉ-IXᵉ siècle), s'étendant sur 16 km² de jungle.

Les pyramides imposantes, dont le Temple I « du Grand Jaguar » (47 m), dominent la canopée et offrent des points d'observation pour la faune locale.

Des agoras, palais et places cérémonielles témoignent d'une organisation urbaine sophistiquée et d'un calendrier astronomique précis.

Inscrit UNESCO, le parc national de Tikal est aussi une réserve pour jaguars, singes hurleurs et toucans, protégé dans le cœur de la biosphère Maya.`,
    image: "/images/tikal.jpg",
    isMonument: true,
  },
  {
    id: 42,
    title: "Citadelle Laferrière",
    city: "Milot",
    country: "Haïti",
    longitude: -72.2000,
    latitude: 19.7444,
    description: `Construite entre 1805 et 1820 par Henri Christophe, la Citadelle Laferrière est la plus grande forteresse précoloniale des Amériques.

Perchée à 900 m d'altitude, elle contrôlait la plaine du Cap-Haïtien et abritait jusqu'à 5 000 soldats dans ses casemates.

Les murs en pierre locale et les embrasures pour canons témoignent de l'ingéniosité militaire haïtienne post-indépendance.

Classée UNESCO, elle symbolise la résistance et la souveraineté du premier État noir libre au monde.`,
    image: "/images/citadelle-laferrière.jpg",
    isMonument: true,
  },
  {
    id: 43,
    title: "Opéra de Sydney",
    city: "Sydney",
    country: "Australie",
    longitude: 151.2153,
    latitude: -33.8568,
    description: `Œuvre audacieuse de l'architecte Jørn Utzon, inaugurée en 1973, l'Opéra de Sydney est rapidement devenu le symbole de la ville et de l'Australie.

Sa coque en voiles de béton recouvertes de plus d'un million de tuiles en céramique blanche reflète la lumière du port de Sydney, créant un jeu de reflets unique au lever et au coucher du soleil.

Le complexe comprend cinq salles de spectacles de formes et tailles variées, accueillant opéras, ballets, concerts et pièces de théâtre, pour plus de 1 500 représentations par an.

Classé au patrimoine mondial de l'UNESCO en 2007, l'Opéra reste un centre culturel dynamique, entouré de cafés, promenades et jardins en bord de mer.`,

    image: "/images/opera-sydney.jpg",
    isMonument: true,
  },
  {
    id: 44,
    title: "Atoll de Tarawa",
    city: "South Tarawa",
    country: "Kiribati",
    longitude: 172.9765,
    latitude: 1.4518,
    description: `South Tarawa est la barrière corallienne la plus densément peuplée du Pacifique, formant l'atoll principal de Kiribati.

Les villages sur pilotis s'étendent le long d'une fine bande de terre ceinturée par une lagune turquoise, où la pêche traditionnelle reste un mode de vie central.

Au cœur de l'atoll, on trouve des sites historiques de la Seconde Guerre mondiale, témoins des batailles navales et aériennes du Pacifique.

Les eaux calmes regorgent de coraux multicolores et de poissons tropicaux, offrant des plongées et du snorkeling exceptionnels.`,

    image: "/images/atoll-tarawa.jpg",
    isMonument: false,
  },
  {
    id: 45,
    title: "Nan Madol",
    city: "Pohnpei",
    country: "Micronésie",
    longitude: 158.2289,
    latitude: 6.8425,
    description: `Surnommée la « Venise du Pacifique », Nan Madol est une cité lacustre de ruines mégalithiques bâties sur des îlots artificiels.

Édifiée entre le VIIIᵉ et le XVᵉ siècle par la dynastie Saudeleur, elle comptait palais, sanctuaires et tombes de rois, reliés par des canaux.

Les blocs de basalte, certains pesant jusqu'à plusieurs tonnes, ont été transportés sur des distances considérables, défiant l'ingénierie précolombienne standard.

Classé au patrimoine mondial de l'UNESCO, Nan Madol reste un mystère archéologique et un haut lieu spirituel pour les Micronésiens.`,

    image: "/images/nan-madol.jpg",
    isMonument: true,
  },
  {
    id: 46,
    title: "Milford Sound",
    city: "Fiordland",
    country: "Nouvelle-Zélande",
    longitude: 167.9250,
    latitude: -44.6700,
    description: `Creusé par les glaciers il y a plus de 10 000 ans, Milford Sound est un fjord spectaculaire, entouré de parois granitiques plongeant à plus de 1 200 mètres.

Par temps calme, les cascades s'élancent directement dans les eaux sombres, créant des arcs-en-ciel permanents lorsque le soleil perce les nuages.

Accessible par la célèbre route panoramique de Milford, on y pratique le kayak, la plongée sous-marine et les croisières d'observation des dauphins et des phoques.

Classé parc national et réserve de biosphère par l'UNESCO, Milford Sound est célébré par Rudyard Kipling comme la « huitième merveille du monde ».`,

    image: "/images/milford-sound.jpg",
    isMonument: false,
  },
  {
    id: 47,
    title: "Trace de Kokoda",
    city: "Province d'Oro",
    country: "Papouasie-Nouvelle-Guinée",
    longitude: 147.7333,
    latitude: -8.8167,
    description: `Sentier historique de 96 km reliant Kokoda à Owers' Corner, la trace de Kokoda fut le théâtre de combats intenses en 1942 entre forces japonaises et australiennes.

La piste traverse forêts tropicales denses, rivières tumultueuses et montagnes escarpées, offrant un parcours éprouvant mais chargé de mémoire.

Des sanctuaires et tombes de soldats jalonnent le chemin, entretenus par les populations locales qui rendent hommage aux combattants d'autrefois.

Aujourd'hui, les randonneurs du monde entier viennent honorer les anciens combattants et relever le défi physique de cette traversée légendaire.`,

    image: "/images/trace-kokoda.jpg",
    isMonument: false,
  },
  {
    id: 48,
    title: "Lagune de Marovo",
    city: "Nouvelle-Géorgie",
    country: "Îles Salomon",
    longitude: 157.4000,
    latitude: -8.1500,
    description: `Plus grande lagune du monde avec ses 700 km², Marovo est un écosystème de mangroves, récifs coralliens et îlots paradisiaques.

Les villages lacustres traditionnels se nichent entre palétuviers et eaux cristallines, où la pêche et la culture du coprah sont les activités principales.

La biodiversité marine est exceptionnelle : poissons multicolores, tortues et requins nourrices évoluent parmi les jardins de corail.

Classée réserve de biosphère par l'UNESCO, Marovo favorise le tourisme durable et la recherche scientifique sur les écosystèmes fragiles.`,

    image: "/images/lagune-marovo.jpeg",
    isMonument: false,
  },
  {
    id: 49,
    title: "Atoll de Funafuti",
    city: "Funafuti",
    country: "Tuvalu",
    longitude: 179.1942,
    latitude: -8.5244,
    description: `Funafuti est l'atoll principal de Tuvalu, composé d'une trentaine d'îlots cerclant une lagune profonde de 25 km².

Le récif en fer à cheval protège des vagues océaniques, créant un lagon calme où poussent coraux, mollusques et poissons tropicaux.

Le village de Funafuti, centre administratif, présente une église en feuilles de palmier et un quai de pirogues peintes à la main.

Menacé par l'élévation du niveau de la mer, l'atoll est une vitrine des enjeux climatiques dans les nations insulaires du Pacifique.`,

    image: "/images/atoll-funafuti.jpg",
    isMonument: false,
  },
    {
    id: 50,
    title: "Mount Yasur",
    city: "Tanna",
    country: "Vanuatu",
    longitude: 169.4445,
    latitude: -19.5388,
    description: `Perché à 361 mètres d'altitude sur l'île de Tanna, le volcan Mount Yasur est l'un des plus accessibles au monde pour observer des éruptions stromboliennes.

Depuis le début de son activité enregistrée, il crache régulièrement des gerbes de lave incandescente et des panaches de gaz, offrant un spectacle continu aux visiteurs.

Le sentier de randonnée, balisé et sécurisé, permet de s'approcher du cratère à quelques dizaines de mètres, sous la surveillance des guides locaux.

La lumière changeante du jour et de la nuit transforme l'ambiance : à l'aube, la fumée dorée contraste avec le ciel, tandis qu'au crépuscule les jaillissements de lave rougeoyante éclairent le paysage.`,

    image: "/images/mount-yasur.jpg",
    isMonument: false,
  },
  {
    id: 51,
    title: "Tour Eiffel",
    city: "Paris",
    country: "France",
    longitude: 2.2945,
    latitude: 48.8584,
    description: `Conçue par Gustave Eiffel pour l'Exposition universelle de 1889, la tour Eiffel culmine à 324 mètres et fut la plus haute construction humaine jusqu'en 1930.

Chaque étage offre un panorama unique : le premier avec sa passerelle de verre, le deuxième pour ses vues sur les grands monuments, et le sommet pour un panorama à 360° sur tout Paris.

La structure en poutres métalliques, peinte tous les sept ans, nécessite plus de 50 tonnes de peinture pour protéger le métal de la corrosion.

Le soir, 20 000 ampoules scintillent pendant cinq minutes à chaque heure, transformant l'édifice en un joyau lumineux au cœur de la capitale.`,

    image: "/images/eiffel-tower.jpg",
    isMonument: true,
  },
  {
    id: 52,
    title: "Big Ben",
    city: "Londres",
    country: "Angleterre",
    longitude: -0.1246,
    latitude: 51.5007,
    description: `Officiellement nommée Elizabeth Tower depuis 2012, Big Ben désigne la cloche de 13,5 tonnes logée dans la tour néogothique édifiée en 1859.

Les quatre cadrans de l'horloge, d'un diamètre de 7 mètres chacun, sont fabriqués en verre opalescent et éclairés de l'intérieur la nuit.

Le mécanisme à poids de l'horloge, restauré régulièrement, garantit une précision au quart de seconde, grâce à un pendule protégé dans une cage étanche.

Bien que fermée au grand public, la tour reste un point de repère symbolique du Parlement et figure immanquable des clichés de Londres.`,

    image: "/images/big-ben.jpg",
    isMonument: true,
  },
  {
    id: 53,
    title: "Statue de la Liberté",
    city: "New York",
    country: "États-Unis",
    longitude: -74.0445,
    latitude: 40.6892,
    description: `Inaugurée en 1886, la statue de la Liberté fut offerte par la France aux États-Unis pour célébrer le centenaire de l'indépendance américaine.

Haute de 46 mètres (93 mètres avec son piédestal), elle représente Libertas, la déesse romaine de la liberté, brandissant une torche et une tablette commémorative.

La structure interne en fer forgé conçue par Gustave Eiffel soutient la peau de cuivre martelé, aujourd'hui verdâtre par la patine formée au fil des décennies.

Un escalier de 354 marches permet d'accéder à la couronne, offrant une vue imprenable sur Manhattan, la baie et le pont de Brooklyn.`,

    image: "/images/statue-liberte.jpg",
    isMonument: true,
  },
  {
    id: 54,
    title: "Mont Fuji",
    city: "Préfecture de Yamanashi/Shizuoka",
    country: "Japon",
    longitude: 138.7274,
    latitude: 35.3606,
    description: `Point culminant du Japon à 3 776 mètres, le mont Fuji est un volcan actif sacré depuis des siècles, sujet de peintures et de poèmes.

Sa silhouette symétrique, souvent enneigée de novembre à mai, se reflète dans les cinq lacs qui l'entourent, formant des paysages iconiques.

L'ascension durant la saison ouverte (juillet-août) se fait par quatre chemins principaux, jalonnés de stations de repos et de temples shintoïstes.

Au sommet, le cratère de 500 mètres de diamètre abrite un petit lac et offre un lever de soleil appelé “goraiko”, moment de recueillement pour les pèlerins.`,

    image: "/images/mont-fuji.jpg",
    isMonument: false,
  },
  {
    id: 55,
    title: "Christ Rédempteur",
    city: "Rio de Janeiro",
    country: "Brésil",
    longitude: -43.2105,
    latitude: -22.9519,
    description: `Érigée entre 1922 et 1931 sur le sommet du Corcovado (710 m), la statue du Christ Rédempteur mesure 30 mètres de haut, bras ouverts vers la ville.

Sa structure en béton armé, recouverte de petits carreaux de pierre de peine, supporte le poids des intempéries et résiste aux vents violents.

Le site est accessible par un chemin de fer à crémaillère ou par un escalier de 220 marches, ponctué de points de vue sur la baie de Guanabara.

Inscrite comme nouvelle merveille du monde en 2007, elle symbolise la paix et l'unité, surplombant les plages, le pain de sucre et la forêt de Tijuca.`,

    image: "/images/christ-redempteur.jpg",
    isMonument: true,
  },
  {
    id: 56,
    title: "Chichén Itzá",
    city: "Yucatán",
    country: "Mexique",
    longitude: -88.5678,
    latitude: 20.6843,
    description: `Ancienne cité maya majeure, Chichén Itzá prospéra entre le VIIᵉ et le Xᵉ siècle, centrée sur la pyramide de Kukulkán (El Castillo).

Cette pyramide à neuf niveaux, avec ses 365 marches, sert de calendrier solaire : lors des équinoxes, l'ombre crée l'illusion d'un serpent descendant les marches.

Au-delà d'El Castillo, on découvre l'observatoire El Caracol, le terrain de jeu de balle cérémoniel et le temple des guerriers avec ses rangées de colonnes sculptées.

Site UNESCO et nouvelle merveille du monde, Chichén Itzá est aussi un laboratoire de recherche archéologique sur l'astronomie et la société maya.`,

    image: "/images/chichen-itza.jpg",
    isMonument: true,
  },
        
      ]);
      observer.complete();
    }, 500);
  });
}

getRandom(): Observable<attraction> {
  return this.getAll().pipe(
    map(attractions => attractions[Math.floor(Math.random() * attractions.length)])
  );
}


}
