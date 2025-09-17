class monHeader extends HTMLElement{
    constructor(){
        super();
    
    const wrap = document.createElement("header");
    wrap.innerHTML = `
        <section class="flex flex-row  items-center bg-blue-950 p-2.5 gap-4 justify-between static">
            <div class="flex-row items-center mx-32">
                <div class="flex items-center gap-4">
                    <img class="inline w-14 " src="src/assets/Logo de WikiWorks & You 1.png" alt="Logo représente un cercle avec l'éducation, la culture, la communication et le travail">
                    <h2 class="text-4xl text-amber-500 font-display">WikiWorks&You</h2>
                </div>
            </div>
            <div class="flex items-center mx-32">
                <div class="">
                    <a href="connexion.html" class="text-amber-500 ">Se connecter
                        <img class="inline w-12 h-12 ml-4" src="src/assets/avatar.png" alt="">
                    </a>
                </div>
            </div>
        </section>
        <section class="flex mx-auto mt-5 justify-center items-center static">
            <div class="bg-blue-950 flex flex-row px-2 py-2 rounded-4xl static">
                <a class="text-amber-500 text-lg hover:text-white px-8" href="index.html">Accueil</a> 
                <a class="text-amber-500 text-lg hover:text-white px-8" href="categorie.html">Catégorie</a> 
                <a class="text-amber-500 text-lg hover:text-white px-8" href="#">Formation</a> 
                <a class="text-amber-500 text-lg hover:text-white px-8" href="article.html">Article</a> 
                <a class="text-amber-500 text-lg hover:text-white px-8" href="creerCarte.html">Créer sa carte</a> 
            </div>
        </section>    
    `;
    this.appendChild(wrap);

    }
}

customElements.define("mon-header", monHeader);


const maPage = window.location.pathname.split("/").pop();

document.querySelectorAll("section a").forEach(link =>{
    const lienMaPage = link.getAttribute("href");
    if(lienMaPage === maPage){
        link.classList.add("bg-blue-800", "rounded-2xl", "border-ambre-500", "border-1")
    };
})


// ----------------------------------------------

class monFooter extends HTMLElement{
    constructor(){
        super();

        const wrap2 = document.createElement("footer");
        wrap2.innerHTML = `
        <section class="bg-blue-800 w-auto h-72 mt-32">
            <div class="flex flex-row justify-evenly">
                <div class="flex h-72 ">
                    <img src="src/assets/entraide.png" alt="">
                </div>
                <div class="flex items-center font-bold text-white text-2xl w-3xl">
                    <p>Dans la lumière de chacun brille une part de tous : c’est dans le partage, l’entraide et la confiance que se construit la force collective.</p>
                </div>
                <div class="flex h-72 ">
                    <img src="src/assets/confiance.png" alt="">
                </div>
            </div>
        </section>

        <section class="bg-blue-950 w-auto h-96 flex flex-row justify-center gap-36 items-center">
            <div class="flex h-36 mb-4">
                <img class="flex h-20" src="src/assets/Logo de WikiWorks & You 1.png" alt="">
            </div>
            <div class="flex flex-row gap-36 text-amber-500 text-lg font-semibold">
                <div>
                    <ul>
                        <li><a href="index.html">Accueil</a></li>
                        <li><a href="#">Formation</a></li>
                        <li><a href="#">Catégorie</a></li>
                        <li><a href="#">Article</a></li>
                        <li><a href="#">Créer sa carte</a></li>
                        <li><a href="#">Haut de page</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="#">CGU</a></li>
                        <li><a href="#">Qui nous sommes ?</a></li>
                        <li><a href="#">Nous rejoindre</a></li>
                    </ul>
                </div>
            </div>

        </section>
        `;
        this.appendChild(wrap2);
    }
}

customElements.define("mon-footer", monFooter);

//-----------------------------------------------


const industrie = document.getElementById("imgIndustrie");
const service = document.getElementById("imgService");
const commerce = document.getElementById("imgCommerce")
const batiment = document.getElementById("imgBatiment")
const installation = document.getElementById("imgInstallation")
const sante = document.getElementById("imgSante")

const tabMetier = [industrie, service, commerce, batiment, installation, sante];

const container1 = document.getElementById("img__container1")
const container2 = document.getElementById("img__container2")
const container3 = document.getElementById("img__container3")
const container4 = document.getElementById("img__container4")

const tabImg__container1 = ["./src/assets/technicien_prod.png", "./src/assets/aide_a_domicile.png"];

const tabImg__container2 = ["./src/assets/chaudronnier.png", "./src/assets/aide_menagere.png"];

const tabImg__container3 = ["./src/assets/usineur.png", "./src/assets/assistant_marternelle.png"];

const tabImg__container4 = ["./src/assets/contrôle_qualité.png", "./src/assets/service_hospitalier.png"];

const container1bis = document.getElementById("txt__container1")
const container2bis = document.getElementById("txt__container2")
const container3bis = document.getElementById("txt__container3")
const container4bis = document.getElementById("txt__container4")

const tabTxt__container1bis = ["Technicien de Production", "Aide à Domicile"];
const tabTxt__container2bis = ["Chaudronnier", "Aide Ménagère"];
const tabTxt__container3bis = ["Usineur", "Assitant Maternelle"];
const tabTxt__container4bis = ["Agent de Contrôle Qualité", "Agent de Service Hospitalier"];

tabMetier.forEach((element, index) =>{
    element.addEventListener("click", () =>{
        container1.src = tabImg__container1[index];
        container2.src = tabImg__container2[index];
        container3.src = tabImg__container3[index];
        container4.src = tabImg__container4[index];
        container1bis.innerText = tabTxt__container1bis[index];
        container2bis.innerText = tabTxt__container2bis[index];
        container3bis.innerText = tabTxt__container3bis[index];
        container4bis.innerText = tabTxt__container4bis[index];
        for(let i=0 ; i<tabMetier.length ; i++){
            if(i === index){
                tabMetier[i].classList.add("font-semibold");
            } else {
                tabMetier[i].classList.remove("font-semibold");
            };
        };
                
    })
})


// tabMetier[].addEventListener("click", ()=>{
//     const goTo = [];
//     for(let i=0 ; i<tabMetier.length ; i++){
//         goTo.push({

//         })
//     }
// })














// class maDynamique extends HTMLElement{
//     constructor(){
//         super();

//         const ghost = document.createElement("slider");
//         ghost.innerHTML =`
//             <div><img class="flex h-auto w-96 rounded-lg" src="src/assets/technicien_prod.png" alt=""></div>
//             <div><img class="flex h-auto w-96 rounded-lg" src="src/assets/chaudronnier.png" alt=""></div>
//             <div><img class="flex h-auto w-96 rounded-lg" src="src/assets/usineur.png" alt=""></div>
//             <div><img class="flex h-auto w-96 rounded-lg" src="src/assets/contrôle_qualité.png" alt=""></div>
//         `;
//         this.appendChild(ghost);
//     }
// }

// customElements.define("mon-slider", maDynamique);










// // ----------------------------------------------
// // Carousel sur click

// class Carousel {
//     /**
//     * @param {HTMLElement} element
//     * @param {object} option
//     * @param {object} option.slidesToScroll Nombre elements à faire défiler
//     * @param {object} option.slidesVisible Nombre elements visible dans un slide
//     */
//     constructor(element, option = {}){
//         this.element = element
//         this.option = Object.assign({}, {
//             slidesToScroll: 4,
//             slidesVisible: 4
//         }, option)
//         this.children = Array.from(element.children)
//         let root = this.createDivWithClass("carousel")
//         let container = this.createDivWithClass("carousel__container")
//         root.appendChild(container)
//         this.element.appendChild(root)
//         this.children.forEach((child) => {
//             let item = this.createDivWithClass("carousel__item")
//             item.appendChild(child)
//             container.appendChild(item)
//         })
//     }
//     createDivWithClass(className){
//         let div = document.createElement("div")
//         div.className = className
//         return div
//     }
// }

// /**
//  * @param {string} className
//  * @returns {HTMLElement}
//  */
// document.addEventListener("DOMContentLoaded", function(){
//     new Carousel(document.querySelector('#item'), {
//         slidesToScroll: 4,
//         slidesVisible: 4,
//         speed: 700,
//     })
// })


// const semiCarousel = document.getElementById("semiCarouselMetier");

// const tabSemiCarouselCategorie = [tabSemiCarouselIndustrie, tabSemiCarouselSevice];

// const tabSemiCarouselIndustrie = [{
//     src: "src/assets/technicien_prod.png",
//     alt: "illustration d'un technicien de production au travail"
//     }, {
//        src: "src/assets/chaudronnier.png",
//        alt: "illustration d'un chaudronnier au travail"
//     }, {
//         src: "src/assets/usineur.png",
//         alt: "illustration d'un usineur au travail"
//     }, {
//         src: "src/assets/contrôle_qualité.png",
//         alt: "illsutration d'un controleur qualité au travail"
//     }];

// const tabSemiCarouselSevice = [{
//     src: "src/assets/aide_a_domicile",
//     alt: "illustration d'une aide à domicile"
// }, {
//     src: "src/assets/aide_menagere",
//     alt: "illustration d'une aide ménagère"
// }, {
//     src: "src/assets/assistant_maternelle",
//     alt: "illustration d'une assistante maternelle"
// }, {
//     src:"src/assets/service_hospitalier",
//     alt: "illustration d'une agente du service hospitalier"
// }]

// semiCarousel.addEventListener("click", () => {

// })

