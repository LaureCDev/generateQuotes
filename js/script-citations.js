//tableau contenant les citations
const citationsArray = [
"Amour, amour, quand tu nous tiens, on peut bien dire : Adieu prudence. Auteur : Jean de La Fontaine",
"Le bonheur est salutataire pour le corps, mais c'est le chagrin qui développe les forces de l'esprit. Auteur : Marcel Proust",
"Si la déception toque à votre porte, si une nouvelle tant attendue, n'est pas celle que vous souhaitiez, rester calme et prenez-la comme elle vient. Ne laissez pas la tristesse s'emparer de votre âme. Vous êtes sur le bon chemin. Ayez confiance. Le meilleur reste à venir... Auteur : Joëlle Laurencin",
"What goes around, comes around. Auteur : Bob Marley",
"La confiance en soi ne remplace pas la compétence. Auteur : Olivier Lockert",
"Le silence caractérise l'intelligence, mais le sage ne saurait travailler sans bruit. Auteur : Simon vivian Makondo",
"Si l'encre de ma plume a le pouvoir d'inonder les coeurs en fraternité, je la transformerais en pluie diluvienne. Auteur : Mostefa Khellaf",
"La poésie est une femme dont le charme n'épargne personne. Auteur : Luccia Ongouya",
"Combat le diable avec cette chose que l'on appelle l'amour. Auteur : Bob Marley",
"La peine de mort a été abolie pour les humains coupables, il est temps qu'elle soit abolie pour les animaux innocents. Auteur : Yaël Angel",
"Les familles, l'été venu, se dirigent vers la mer en y emmenant leurs enfants, dans l'espoir, souvent déçu, de noyer les plus laids. Auteur : Alphonse Allais",
"Une maman, c'est une montagne de compréhension. Auteur : Jean Gastaldi",
"La conscience est un livre qui doit être consulté sans arrêt. Auteur : Blaise Pascal",
"On est des animaux, même dans ce qui nous donne la plus haute idée de notre humanité. Auteur : Réjean Ducharme",
"Depuis six mille ans la guerre plaît aux peuples querelleurs, et Dieu perd son temps à faire les étoiles et les fleurs. Auteur : Victor Hugo",
"La sagesse consiste à savoir peupler sa solitude et à s'isoler parmi la foule. Auteur : Charles Baudelaire",
"Un couple, à moins d'un très grand amour, cela devient deux fois soi-même, et c'est insupportable. Auteur : Renée Massip",
"Le travail éloigne de nous trois grands maux : l'ennui, le vice et le besoin. Auteur : Voltaire",
"L'amour est à la portée de tous, mais l'amitié est l'épreuve du coeur. Auteur : Madame d'Houdetot",
"Dieu a créé les gens en technicolor. Dieu n'a jamais fait de différence entre un noir, un blanc, un bleu, un vert ou un rose. Auteur : Bob Marley"
 ];

// test affichage tableau
// console.table(citationsArray);

// ma fonction generate()


 // ma fonction
 const generate = () => {
  let displayCitation = document.getElementById('displayCitation');
  let x = Math.floor(19*Math.random());
  displayCitation.innerHTML="<b>" + citationsArray[x] + "</b>";
  return display-citation;
 };

// tests dans la fonction supprimés :
// displayCitation.innerHTML ="hello";
//console.log(citationsArray[x]);
