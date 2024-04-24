// const h1Element = document.createElement("h1");
// h1Element.append("hello from it");

// document.body.append(h1Element);
// // ---------------------------------------
// ------date-------------
const incubator = {
  title: "it",
  graduatesCount: 2000,
  areYouChampion: true,
  technologies: [
    {
      title: "Front",
    },
    {
      title: "back",
    },
    {
      title: "devOps",
    },
  ],
};

// ------------------algorism--------------
let pageTitleElement = document.createElement("h1");
pageTitleElement.innerHTML = incubator.title;
document.body.append(pageTitleElement);

let graduateCountElement = document.createElement("input");
graduateCountElement.value = incubator.graduatesCount;
document.body.append(graduateCountElement);

let areYouChampionElement = document.createElement("input");
areYouChampionElement.type = "checkbox";
areYouChampionElement.checked = incubator.areYouChampion;
document.body.append(areYouChampionElement);

let techSelectElement = document.createElement("select");

let techSelectOptions0Element = document.createElement("option");
techSelectOptions0Element.append(incubator.technologies[0].title);
let techSelectOptions1Element = document.createElement("option");
techSelectOptions1Element.append(incubator.technologies[1].title);
let techSelectOptions2Element = document.createElement("option");
techSelectOptions2Element.append(incubator.technologies[2].title);
techSelectElement.append(
  techSelectOptions0Element,
  techSelectOptions1Element,
  techSelectOptions2Element
);

document.body.append(techSelectElement);





