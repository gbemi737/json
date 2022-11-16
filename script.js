let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');
var randomIndex = Math.floor(Math.random() * myJSON["tags"].length);

var randomIndex = Math.floor(Math.random() * myJSON["best_songs"].length);

let jsonDatabase = [
  {
    "album" : "Luv 4 Rent",
    "album_cover" : "luv4rent.webp",
    "year" : "2022",
    "best_songs" : ["Pudgy", "No L's", "Matinee"]
  },
  {
    "album" : "NOIR",
    "album_cover" : "noir.webp",
    "year" : "2018",
    "best_songs" : ["HOOPTI", "BAM 2x", "Z4L"]
  },
  {
    "album" : "Blkswn",
    "album_cover" : "blkswn.webp",
    "year" : "2017",
    "best_songs" : ["Wild Irish Roses", "Anita", "Edgan Allan Poe'd Up"]
  }
];
createElementProper(myJSON);

for (let i = 0; i < jsonDatabase.length; i++) {
    createElement(jsonDatabase[i]);
  }

  function createElement(incomingJSON) {

    let newalbum_cover = document.createElement("IMG");
    newalbum_cover.classList.add("projectImage");
    newalbum_cover.src = incomingJSON['album_cover'];
    newContentElement.appendChild(newalbum_cover);

    let newalbum = document.createElement("H1");
    newalbum.classList.add('projectTitle');
    newalbum.innerText = incomingJSON['album'];
    newContentElement.appendChild(newalbum);


    let newYear = document.createElement("H3");
    newYear.classList.add('projectAge');
    newYear.innerText = incomingJSON['year'];
    newContentElement.appendChild(newYear);

 for (var i = 0; i < incomingJSON['best_songs'].length; i++){
   var currentTagString = incomingJSON['best_songs'][i];
   var newTagItem = document.createElement("LI");
   newTagItem.innerText = currentTagString;
   newContentTagList.appendChild(newTagItem);
 }

  contentGridElement.appendChild(newContentElement);

    }
