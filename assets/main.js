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
let articoliSalvati = [];

function ciclo() {
  const type = document.getElementById("selected").value;
  let localArticles = articles;

  if (type) {
    localArticles = localArticles.filter((article) =>
      article.type.includes(type)
    );
  }

  displayArticles(localArticles);
}

// card articolo
function displayArticles(articles) {
  const cardArticles = articles
    .map((article) => {
      const buttonClass = getButtonClass(article.type[0]);

      return `
            <div class="card mb-4 p-4" style="width: 100%;">
                <div class="card-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-10" style="padding-left: 0px;">
                                <h2 class="card-title">${article.title}</h2>
                            </div>
                            <div class="col-2 d-flex justify-content-end button-save">
                                <button type="button" class="btn btn-save" onclick="salvaArticolo('${
                                  article.title
                                }')">
                                    <i class="fa-2x ${
                                      articoliSalvati.some(
                                        (savedArticle) =>
                                          savedArticle.title === article.title
                                      )
                                        ? "fa-solid"
                                        : "fa-regular"
                                    } fa-bookmark"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <h5 class="card-title">pubblicato da ${article.author}</h5>
                    <p class="card-title">in data ${article.date}</p>

                    <p class="card-text">${article.description}</p>
                    <img src="./images/${
                      article.image
                    }" class="card-img-top mb-3 rounded" alt="${article.image}">
                    <a class="btn btn-disabled ${buttonClass}">${
        article.type[0]
      }</a>
                </div>
            </div>`;
    })
    .join("");

  document.getElementById("card-articles").innerHTML = cardArticles;
}

function getButtonClass(type) {
  const typeClassMap = {
    geo: "btn-green",
    tech: "btn-blue",
    cucina: "btn-purple",
    viaggi: "btn-orange",
    arte: "btn-yellow",
  };

  return typeClassMap[type] || "";
}

function salvaArticolo(titolo) {
  const index = articoliSalvati.findIndex(
    (savedArticle) => savedArticle.title === titolo
  );

  if (index === -1) {
    const articleToSave = articles.find((article) => article.title === titolo);
    articoliSalvati.push(articleToSave);
  } else {
    articoliSalvati.splice(index, 1);
  }

  ciclo();
}

function handleCheckboxChange() {
  const checkbox = document.getElementById("checkArticoliSalvati");

  if (checkbox.checked) {
    displayArticles(articoliSalvati);
  } else {
    ciclo();
  }
}

ciclo();
