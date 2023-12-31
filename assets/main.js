//creare un array
const articles = [
  {
    title: "Scoperta di una nuova specie di papera di gomma",
    author: "Diana Rossi",
    date: "10/01/2023",
    description:
      "Un breve articolo sulla recente scoperta di una specie di papera di gomma mai vista prima.",
    image: "rubber-duck.jpg",
    type: ["geo", "tech"],
  },
  {
    title: "Viaggio culinario: alla ricerca dei sapori perduti",
    author: "Marco Bianchi",
    date: "20/02/2023",
    description:
      "Esplorazione di tradizioni culinarie dimenticate e la ricerca di sapori autentici.",
    image: "kitchen-food.jpg",
    type: ["cucina"],
  },
  {
    title: "Esplorando le profondità marine: il mistero degli abissi",
    author: "Alessandra Marino",
    date: "10/03/2023",
    description:
      "Un viaggio nelle profondità dell'oceano alla scoperta di creature misteriose e inesplorate.",
    image: "deep-sea.jpg",
    type: ["viaggi"],
  },
  {
    title: "Arte moderna: oltre i confini convenzionali",
    author: "Gabriele Neri",
    date: "05/04/2023",
    description:
      "Un'analisi delle tendenze e delle sfide nell'arte contemporanea, con interviste a artisti emergenti.",
    image: "modern-art.jpg",
    type: ["arte", "tech"],
  },
];

//INSERIRE funzione filtro
function ciclo() {
  const type = document.getElementById("selected").value;
  let localarticle = articles;

  if (type) {
    localarticle = localarticle.filter((typeArticles) =>
      typeArticles.type.includes(type)
    );
  }
  //creare literals per associare carda ad array

  let cardArticle = "";
  localarticle.forEach((articles) => {
    let buttonClass = "";

    // Aggiungi la classe in base al tipo
    function getButtonClass(type) {
      if (type === "geo") {
        return "btn-green";
      } else if (type === "tech") {
        return "btn-blue";
      } else if (type === "cucina") {
        return "btn-purple";
      } else if (type === "viaggi") {
        return "btn-orange";
      } else if (type === "arte") {
        return "btn-yellow";
      }
      return "";
    }
    cardArticle += `
    <div class="card mb-4 p-4" style="width: 100%;">
      <div class="card-body">
        <div class="container">
          <div class="row">
            <div class="col-10" style="padding-left: 0px;">
              <h2 class="card-title">${articles.title}</h2>
            </div>
            <div class="col-2 d-flex justify-content-end button-save">
            <button type="button" class="btn btn-save" onclick="salvaArticolo('${
              articles.title
            }')">
            <i class="fa-2x fa-regular fa-bookmark"></i>
          </button>
            </div>
          </div>
        </div>
      
        <h5 class="card-title">pubblicato da ${articles.author}</h5>
        <p class="card-title">in data ${articles.date}</p>
  
        <p class="card-text">${articles.description}</p>
        <img src="./images/${
          articles.image
        }" class="card-img-top mb-3 rounded" alt="${articles.image}">
        ${articles.type
          .map(
            (articleType) =>
              `<a class="btn btn-disabled  ${getButtonClass(
                articleType
              )}">${articleType}</a>`
          )
          .join(" ")}
      </div>
    </div>`;
  });

  document.getElementById("card-articles").innerHTML = cardArticle;
}
ciclo();

//inserire funzione salvato
let articoliSalvati = [];

function salvaArticolo(titolo) {
  const indiceArticolo = articoliSalvati.findIndex(
    (articolo) => articolo.title === titolo
  );

  if (indiceArticolo === -1) {
    const articoloDaSalvare = articles.find(
      (articolo) => articolo.title === titolo
    );
    articoliSalvati.push(articoloDaSalvare);

    const iconaBookmark = document.querySelector(
      `[onclick="salvaArticolo('${titolo}')"] i`
    );
    iconaBookmark.classList.remove("fa-regular");
    iconaBookmark.classList.add("fa-solid");
  } else {
    articoliSalvati.splice(indiceArticolo, 1);

    const iconaBookmark = document.querySelector(
      `[onclick="salvaArticolo('${titolo}')"] i`
    );
    iconaBookmark.classList.remove("fa-solid");
    iconaBookmark.classList.add("fa-regular");
  }
}
function visualizzaArticoliSalvati() {
  let cardArticle = "";
  articoliSalvati.forEach((articles) => {
    let buttonClass = "";

    function getButtonClass(type) {
      if (type === "geo") {
        return "btn-green";
      } else if (type === "tech") {
        return "btn-blue";
      } else if (type === "cucina") {
        return "btn-purple";
      } else if (type === "viaggi") {
        return "btn-orange";
      } else if (type === "arte") {
        return "btn-yellow";
      }
      return "";
    }

    const isSaved = articoliSalvati.some(
      (articolo) => articolo.title === articles.title
    );

    cardArticle += `
        <div class="card mb-4 p-4" style="width: 100%;">
          <div class="card-body">
            <div class="container">
              <div class="row">
                <div class="col-10" style="padding-left: 0px;">
                  <h2 class="card-title">${articles.title}</h2>
                </div>
                <div class="col-2 d-flex justify-content-end button-save">
                  <button type="button" class="btn btn-save" onclick="salvaArticolo('${
                    articles.title
                  }')">
                    <i class="fa-2x ${
                      isSaved ? "fa-solid" : "fa-regular"
                    } fa-bookmark"></i>
                  </button>
                </div>
              </div>
            </div>
            
            <h5 class="card-title">pubblicato da ${articles.author}</h5>
            <p class="card-title">in data ${articles.date}</p>
      
            <p class="card-text">${articles.description}</p>
            <img src="./images/${
              articles.image
            }" class="card-img-top mb-3 rounded" alt="${articles.image}">
            ${articles.type
              .map(
                (articleType) =>
                  `<a class="btn btn-disabled  ${getButtonClass(
                    articleType
                  )}">${articleType}</a>`
              )
              .join(" ")}
          </div>
        </div>`;
  });

  document.getElementById("card-articles").innerHTML = cardArticle;
}
function handleCheckboxChange() {
  const checkbox = document.getElementById("checkArticoliSalvati");

  if (checkbox.checked) {
    visualizzaArticoliSalvati();
  } else {
    ciclo();
  }
}
