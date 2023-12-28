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
    type: "cucina",
  },
  {
    title: "Esplorando le profondità marine: il mistero degli abissi",
    author: "Alessandra Marino",
    date: "10/03/2023",
    description:
      "Un viaggio nelle profondità dell'oceano alla scoperta di creature misteriose e inesplorate.",
    image: "deep-sea.jpg",
    type: "viaggi",
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
    cardArticle += `
    <div class="card mb-4 p-4 " style="width: 100%;">
    

    <div class="card-body">
    <div class="container ">
  <div class="row">
  <div class="col-10" style="padding-left: 0px;">
    <h2 class="card-title ">${articles.title}</h2>
    </div>
    <div class="col-2 d-flex justify-content-end button-save">
    <button type="button" class="btn"><i class="fa-2x fa-regular fa-bookmark"></i></button>  
    </div>
    
    
  </div>
</div>
    

      
      <h5 class="card-title">pubblicato da ${articles.author}</h5>
      <p class="card-title">in data ${articles.date}</p>
  
  
      <p class="card-text">${articles.description}</p>
      <img src="./images/${articles.image}" class="card-img-top mb-3 rounded" alt="${articles.image}">
      <a  class="btn btn-primary ">${articles.type} </a>
    </div>
  </div>`;
  });
  document.getElementById("card-articles").innerHTML = cardArticle;
}
ciclo();
//inserire funzione salvato
