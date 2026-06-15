export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "En quelle année le Maroc a-t-il recouvré son indépendance ?",
    options: ["1944", "1950", "1956", "1961"],
    correctAnswer: 2,
    explanation: "Le Maroc a obtenu son indépendance de la France et de l'Espagne en 1956."
  },
  {
    id: 2,
    question: "Quelle dynastie a fondé la ville de Marrakech ?",
    options: ["Les Idrissides", "Les Almoravides", "Les Almohades", "Les Saadiens"],
    correctAnswer: 1,
    explanation: "Marrakech a été fondée en 1062 par Youssef Ibn Tachfine, chef de la dynastie des Almoravides."
  },
  {
    id: 3,
    question: "Quel est le point culminant du Maroc et de l'Afrique du Nord ?",
    options: ["Mont Oukaimeden", "M'Goun", "Jbel Toubkal", "Jbel Ayachi"],
    correctAnswer: 2,
    explanation: "Le Jbel Toubkal culmine à 4 167 mètres d'altitude."
  },
  {
    id: 4,
    question: "Comment appelle-t-on l'art du zellige marocain ?",
    options: ["La mosaïque de bois", "La mosaïque de terre cuite émaillée", "La peinture sur soie", "La sculpture sur plâtre"],
    correctAnswer: 1,
    explanation: "Le zellige est une mosaïque dont les éléments, appelés tesselles, sont des morceaux de carreaux de faïence colorés."
  },
  {
    id: 5,
    question: "Quel sultan saadien est célèbre pour la victoire de la Bataille des Trois Rois ?",
    options: ["Ahmed al-Mansur", "Mohammed ech-Cheikh", "Abdelmalek", "Moulay Ismaïl"],
    correctAnswer: 0,
    explanation: "Ahmed al-Mansur, dit ed-Dahbi, a régné après la victoire éclatante de 1578."
  },
  {
    id: 6,
    question: "Quelle est la capitale administrative du Maroc ?",
    options: ["Casablanca", "Fès", "Rabat", "Marrakech"],
    correctAnswer: 2,
    explanation: "Rabat est la capitale administrative du Royaume depuis 1912."
  },
  {
    id: 7,
    question: "Quel fleuve est le plus long du Maroc ?",
    options: ["Oum Er-Rbia", "Moulouya", "Sebou", "Drâa"],
    correctAnswer: 3,
    explanation: "L'Oued Drâa est le plus long fleuve du Maroc (environ 1100 km), bien que son débit soit irrégulier."
  },
  {
    id: 8,
    question: "Qui est considéré comme le 'Père de la Nation' marocaine moderne ?",
    options: ["Hassan II", "Mohammed V", "Moulay Ismaïl", "Mohammed VI"],
    correctAnswer: 1,
    explanation: "Le Sultan puis Roi Mohammed V est le symbole de la lutte pour l'indépendance."
  },
  {
    id: 9,
    question: "Dans quelle ville se trouve l'Université Al Quaraouiyine, la plus ancienne au monde ?",
    options: ["Rabat", "Marrakech", "Fès", "Tanger"],
    correctAnswer: 2,
    explanation: "Fondée par Fatima al-Fihriya en 859 à Fès, elle est reconnue comme la plus ancienne université encore en activité."
  },
  {
    id: 10,
    question: "Quel port marocain est le plus grand complexe portuaire d'Afrique ?",
    options: ["Port de Casablanca", "Tanger Med", "Port d'Agadir", "Port de Jorf Lasfar"],
    correctAnswer: 1,
    explanation: "Tanger Med est un hub logistique mondial majeur et le premier port d'Afrique et de Méditerranée."
  },
  {
    id: 11,
    question: "Quel traité a instauré le protectorat français au Maroc en 1912 ?",
    options: ["Traité de Fès", "Traité d'Algésiras", "Traité de Lalla Maghnia", "Traité de Marrakech"],
    correctAnswer: 0,
    explanation: "Le traité de Fès a été signé le 30 mars 1912."
  },
  {
    id: 12,
    question: "Quelle est la monnaie nationale du Maroc ?",
    options: ["Le Dinar", "Le Riyal", "Le Dirham", "Le Franc"],
    correctAnswer: 2,
    explanation: "Le Dirham marocain (MAD) est la monnaie officielle."
  },
  {
    id: 13,
    question: "Quel explorateur marocain du XIVe siècle est célèbre pour ses voyages à travers le monde ?",
    options: ["Léon l'Africain", "Ibn Battuta", "Al Idrisi", "Ibn Khaldoun"],
    correctAnswer: 1,
    explanation: "Ibn Battuta a parcouru plus de 120 000 km à travers le monde musulman et au-delà."
  },
  {
    id: 14,
    question: "Quel monument emblématique domine la ville de Casablanca ?",
    options: ["La Tour Hassan", "La Koutoubia", "La Mosquée Hassan II", "Le Minaret de la Giralda"],
    correctAnswer: 2,
    explanation: "La Mosquée Hassan II possède le deuxième plus haut minaret au monde."
  },
  {
    id: 15,
    question: "Quelle ville est surnommée 'La Perle du Nord' ?",
    options: ["Tétouan", "Tanger", "Chefchaouen", "Asilah"],
    correctAnswer: 1,
    explanation: "Tanger est souvent appelée la perle du Nord ou la ville du détroit."
  },
  {
    id: 16,
    question: "Quel arbre endémique du Maroc produit une huile précieuse ?",
    options: ["L'Olivier", "Le Cèdre de l'Atlas", "L'Arganier", "Le Palmier-dattier"],
    correctAnswer: 2,
    explanation: "L'arganier ne pousse naturellement que dans le sud-ouest du Maroc."
  },
  {
    id: 17,
    question: "Quel événement a eu lieu le 6 novembre 1975 ?",
    options: ["L'Indépendance", "La Marche Verte", "Le Discours de Tanger", "Le Manifeste de l'Indépendance"],
    correctAnswer: 1,
    explanation: "La Marche Verte a mobilisé 350 000 Marocains pour la libération du Sahara."
  },
  {
    id: 18,
    question: "Quelle dynastie a construit la Tour Hassan à Rabat ?",
    options: ["Les Almoravides", "Les Almohades", "Les Mérinides", "Les Alaouites"],
    correctAnswer: 1,
    explanation: "Yacoub El Mansour (Almohade) a ordonné sa construction à la fin du XIIe siècle."
  },
  {
    id: 19,
    question: "Quel plat est traditionnellement servi le vendredi au Maroc ?",
    options: ["Le Tajine", "La Pastilla", "Le Couscous", "La Harira"],
    correctAnswer: 2,
    explanation: "Le couscous est le plat national dominical et traditionnel du vendredi."
  },
  {
    id: 20,
    question: "Quelle ville est célèbre pour ses remparts ocres et son festival de cinéma ?",
    options: ["Ouarzazate", "Marrakech", "Essaouira", "Agadir"],
    correctAnswer: 1,
    explanation: "Marrakech accueille chaque année le Festival International du Film."
  },
  {
    id: 21,
    question: "Quelle est la couleur dominante des bâtiments de Chefchaouen ?",
    options: ["Blanc", "Ocre", "Bleu", "Vert"],
    correctAnswer: 2,
    explanation: "Chefchaouen est mondialement connue sous le nom de 'La Ville Bleue'."
  },
  {
    id: 22,
    question: "Quel souverain alaouite a fait de Meknès sa capitale ?",
    options: ["Moulay Ismaïl", "Moulay Rachid", "Sidi Mohammed ben Abdallah", "Moulay Hassan Ier"],
    correctAnswer: 0,
    explanation: "Moulay Ismaïl a fait de Meknès une cité impériale grandiose au XVIIe siècle."
  },
  {
    id: 23,
    question: "Quel pays européen est le plus proche du Maroc par le détroit de Gibraltar ?",
    options: ["Portugal", "France", "Italie", "Espagne"],
    correctAnswer: 3,
    explanation: "Seuls 14 km séparent le Maroc de l'Espagne au point le plus étroit."
  },
  {
    id: 24,
    question: "Quel peuple autochtone est à la base de l'identité marocaine ?",
    options: ["Les Phéniciens", "Les Romains", "Les Amazighs", "Les Arabes"],
    correctAnswer: 2,
    explanation: "Les Amazighs (Berbères) sont les habitants originels de l'Afrique du Nord."
  },
  {
    id: 25,
    question: "Quel instrument de musique est central dans la culture Gnaoua ?",
    options: ["Le Luth", "Le Guembri", "La Flûte", "Le Violon"],
    correctAnswer: 1,
    explanation: "Le guembri (ou sintir) est l'instrument à cordes basse utilisé par le Maâlem Gnaoui."
  },
  {
    id: 26,
    question: "Quel désert couvre une grande partie du sud du Maroc ?",
    options: ["Le Kalahari", "Le Sahara", "Le Gobi", "Le Thar"],
    correctAnswer: 1,
    explanation: "Le Sahara est le plus grand désert chaud du monde."
  },
  {
    id: 27,
    question: "Quelle ville marocaine était autrefois un comptoir portugais nommé Mogador ?",
    options: ["El Jadida", "Safi", "Essaouira", "Agadir"],
    correctAnswer: 2,
    explanation: "Essaouira a été reconstruite par le sultan Mohammed ben Abdallah sur le site de l'ancienne Mogador."
  },
  {
    id: 28,
    question: "Quelle est la langue officielle du Maroc, en plus de l'Arabe ?",
    options: ["Le Français", "L'Espagnol", "L'Amazigh", "L'Anglais"],
    correctAnswer: 2,
    explanation: "La Constitution de 2011 a officialisé la langue Amazighe."
  },
  {
    id: 29,
    question: "Qui a succédé au Roi Hassan II en 1999 ?",
    options: ["Moulay Rachid", "Mohammed VI", "Moulay Ismaïl", "Mohammed V"],
    correctAnswer: 1,
    explanation: "Sa Majesté le Roi Mohammed VI a accédé au trône le 23 juillet 1999."
  },
  {
    id: 30,
    question: "Quel site archéologique romain est situé près de Meknès ?",
    options: ["Lixus", "Chellah", "Volubilis", "Mogador"],
    correctAnswer: 2,
    explanation: "Volubilis est le site romain le mieux préservé du Maroc, classé à l'UNESCO."
  },
  {
    id: 31,
    question: "Quelle chaîne de montagnes traverse le centre du Maroc ?",
    options: ["Le Rif", "Le Moyen Atlas", "Le Haut Atlas", "L'Anti-Atlas"],
    correctAnswer: 2,
    explanation: "Le Haut Atlas est la chaîne la plus élevée."
  },
  {
    id: 32,
    question: "Quel sport est considéré comme 'national' au Maroc par sa popularité ?",
    options: ["Le Tennis", "Le Football", "L'Athlétisme", "La Boxe"],
    correctAnswer: 1,
    explanation: "Le football déchaîne les passions au Maroc, surtout après l'épopée du Mondial 2022."
  },
  {
    id: 33,
    question: "Quel Sultan a été le premier à reconnaître l'indépendance des États-Unis ?",
    options: ["Moulay Ismaïl", "Mohammed ben Abdallah", "Moulay Hassan Ier", "Moulay Slimane"],
    correctAnswer: 1,
    explanation: "En 1777, le Maroc a été le premier pays à reconnaître officiellement la jeune nation américaine."
  },
  {
    id: 34,
    question: "Quelle est la principale ressource minière du Maroc ?",
    options: ["Le Pétrole", "L'Or", "Le Phosphate", "Le Fer"],
    correctAnswer: 2,
    explanation: "Le Maroc possède plus de 70% des réserves mondiales de phosphate."
  },
  {
    id: 35,
    question: "Quel festival de musique sacrée a lieu chaque année à Fès ?",
    options: ["Mawazine", "Gnaoua", "Festival des Musiques Sacrées du Monde", "Timitar"],
    correctAnswer: 2,
    explanation: "Ce festival est un moment fort de dialogue des cultures et des religions."
  },
  {
    id: 36,
    question: "Quel style architectural caractérise les villages fortifiés du sud ?",
    options: ["Le Riad", "La Kasbah", "Le Ksar", "La Medersa"],
    correctAnswer: 2,
    explanation: "Le Ksar est un village fortifié composé de plusieurs habitations (kasbahs)."
  },
  {
    id: 37,
    question: "Quel roi a lancé le 'Chantier du Siècle' pour le développement humain (INDH) ?",
    options: ["Hassan II", "Mohammed VI", "Mohammed V", "Abdelaziz"],
    correctAnswer: 1,
    explanation: "L'Initiative Nationale pour le Développement Humain a été lancée en 2005."
  },
  {
    id: 38,
    question: "Quel est l'emblème sur le drapeau national du Maroc ?",
    options: ["Un Croissant", "Une Étoile à cinq branches", "Un Lion", "Une Épée"],
    correctAnswer: 1,
    explanation: "Le drapeau est rouge avec une étoile verte à cinq branches (pentagramme)."
  },
  {
    id: 39,
    question: "Quelle ville est connue pour son cuir et ses tanneries ancestrales ?",
    options: ["Marrakech", "Fès", "Rabat", "Tétouan"],
    correctAnswer: 1,
    explanation: "Les tanneries Chouara à Fès sont parmi les plus anciennes au monde."
  },
  {
    id: 40,
    question: "Quel est le nom du train à grande vitesse marocain ?",
    options: ["Le Burak", "Al Boraq", "L'Atlas", "Le TGV"],
    correctAnswer: 1,
    explanation: "Al Boraq relie Tanger à Casablanca en un temps record."
  },
  {
    id: 41,
    question: "Quelle dynastie a régné avant les Alaouites ?",
    options: ["Les Mérinides", "Les Saadiens", "Les Almohades", "Les Idrissides"],
    correctAnswer: 1,
    explanation: "Les Saadiens ont régné de 1544 à 1659 environ."
  },
  {
    id: 42,
    question: "Quel poète et écrivain a écrit 'Le Pain Nu' (Al-Khubz al-Hafi) ?",
    options: ["Tahar Ben Jelloun", "Mohamed Choukri", "Abdellatif Laâbi", "Driss Chraïbi"],
    correctAnswer: 1,
    explanation: "Mohamed Choukri est une figure majeure de la littérature marocaine contemporaine."
  },
  {
    id: 43,
    question: "Quel sommet de l'Union Africaine a vu le retour du Maroc en 2017 ?",
    options: ["Sommet d'Addis-Abeba", "Sommet de Kigali", "Sommet de Dakar", "Sommet de Rabat"],
    correctAnswer: 0,
    explanation: "Le Maroc a réintégré l'UA lors du 28e sommet à Addis-Abeba."
  },
  {
    id: 44,
    question: "Quelle spécialité pâtissière marocaine est à base d'amandes et de miel ?",
    options: ["La Chebakia", "La Corne de Gazelle", "Le Briouate", "Toutes les réponses"],
    correctAnswer: 3,
    explanation: "Toutes ces pâtisseries utilisent fréquemment ces ingrédients de base."
  },
  {
    id: 45,
    question: "Quel barrage historique a été initié par Hassan II pour la politique de l'eau ?",
    options: ["Al Wahda", "Bin El Ouidane", "Youssef Ibn Tachfine", "Tous les barrages"],
    correctAnswer: 3,
    explanation: "Le Roi Hassan II a lancé une politique ambitieuse de construction de barrages dès les années 60."
  },
  {
    id: 46,
    question: "Quel explorateur a donné son nom au palais 'Dar al-Makhzen' à Tanger ?",
    options: ["Ibn Battuta", "Léon l'Africain", "Sultan Moulay Ismaïl", "Le Résident Général"],
    correctAnswer: 2,
    explanation: "Le palais a été construit sous le règne de Moulay Ismaïl."
  },
  {
    id: 47,
    question: "Quelle est la capitale du Souss ?",
    options: ["Tiznit", "Taroudant", "Agadir", "Guelmim"],
    correctAnswer: 2,
    explanation: "Agadir est la ville principale et économique de la région Souss-Massa."
  },
  {
    id: 48,
    question: "Quelle organisation internationale le Maroc a-t-il rejoint en tant que membre fondateur en 1945 ?",
    options: ["ONU", "Ligue Arabe", "UMA", "OCI"],
    correctAnswer: 1,
    explanation: "Le Maroc est membre fondateur de la Ligue des États Arabes."
  },
  {
    id: 49,
    question: "Quel saint patron est célébré lors du Moussem de Tan-Tan ?",
    options: ["Sidi Ahmed al-Mansur", "Sidi Mohamed Laghdaf", "Sidi Abderrahman", "Sidi Ali ben Hamdouch"],
    correctAnswer: 1,
    explanation: "Le Moussem de Tan-Tan rend hommage à Sidi Mohamed Laghdaf."
  },
  {
    id: 50,
    question: "Que signifie 'Tamghrabit' dans le contexte moderne ?",
    options: ["Le thé marocain", "L'identité et le patriotisme marocain", "La musique traditionnelle", "Le climat du Maroc"],
    correctAnswer: 1,
    explanation: "La Tamghrabit désigne l'attachement profond aux valeurs, à la culture et à l'identité du Maroc."
  }
];
