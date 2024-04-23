// const h1Element = document.createElement("h1");
// h1Element.append("hellow from it");

// document.body.append(h1Element);
// // ---------------------------------------
// ------date-------------
const incubator = {
  title: "it",
  graduatesCount: 2000,
  areYouChempion: true,
  tehnologies: [
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

// ------algoritm------------
let pageTitleElement = document.createElement("h1");
pageTitleElement.innerHTML = incubator.title;
document.body.append(pageTitleElement);

let graduaceCountElement = document.createElement("input");
graduaceCountElement.value = incubator.graduatesCount;
document.body.append(graduaceCountElement);

let areYouChempionelement = document.createElement("input");
areYouChempionelement.type = "checkbox";
areYouChempionelement.checked = incubator.areYouChempion;
document.body.append(areYouChempionelement);

let techSelectElement = document.createElement("select");

let techSelectOptions0Element = document.createElement("option");
techSelectOptions0Element.append(incubator.tehnologies[0].title);
let techSelectOptions1Element = document.createElement("option");
techSelectOptions1Element.append(incubator.tehnologies[1].title);
let techSelectOptions2Element = document.createElement("option");
techSelectOptions2Element.append(incubator.tehnologies[2].title);
techSelectElement.append(
  techSelectOptions0Element,
  techSelectOptions1Element,
  techSelectOptions2Element
);

document.body.append(techSelectElement);


