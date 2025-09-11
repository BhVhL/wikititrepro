class monHeader extends HTMLElement{
    constructor(){
        super();
    
    const wrap = document.createElement("header");
    wrap.innerHTML = `
        <section class="flex flex-row items-center bg-blue-950 p-2.5 gap-4 justify-between ">
            <div class="flex-row items-center mx-32">
                <div class="flex items-center gap-4">
                    <img class="inline w-14 " src="src/assets/Logo de WikiWorks & You 1.png" alt="Logo représente un cercle avec l'éducation, la culture, la communication et le travail">
                    <p class="text-4xl text-amber-500">WikiWorks&You</p>
                </div>
            </div>
            <div class="flex items-center mx-32">
                <div class="">
                    <p class="text-amber-500 ">Se connecter
                        <img class="inline w-12 h-12 ml-4" src="src/assets/avatar.png" alt="">
                    </p>
                </div>
            </div>
        </section>
        <section class="flex mx-auto mt-5  justify-center items-center"> <!--flex mx-auto mt-5 rounded-3xl gap-10 justify-center items-center border-2 border-blue-950 w-2/3 h-10 bg-blue-800 -->
            <div class="text-amber-500 text-lg hover:text-white hover:text-xl"><button class="bg-blue-800 py-1.5 px-5 rounded-l-3xl border-1 hover:bg-blue-600">Accueil</button></div>
            <div class="text-amber-500 text-lg hover:text-white hover:text-xl"><button class="bg-blue-800 py-1.5 px-5 border-1 hover:bg-blue-600">Catégorie</button></div>
            <div class="text-amber-500 text-lg hover:text-white hover:text-xl"><button class="bg-blue-800 py-1.5 px-5 border-1 hover:bg-blue-600">Formation</button></div>
            <div class="text-amber-500 text-lg hover:text-white hover:text-xl"><button class="bg-blue-800 py-1.5 px-5 border-1 hover:bg-blue-600">Article</button></div>
            <div class="text-amber-500 text-lg hover:text-white hover:text-xl"><button class="bg-blue-800 py-1.5 px-5 rounded-r-3xl border-1 hover:bg-blue-600">Créer sa carte</button></div>
        </section>    
    `;
    this.appendChild(wrap);

    }
}

customElements.define("mon-header", monHeader);


// ----------------------------------------------

class monFooter extends HTMLElement{
    constructor(){
        super();

        const wrap2 = document.createElement("footer");
        wrap2.innerHTML = `
        <section class="bg-blue-800 w-auto h-72">
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
                        <li><a href="#">Accueil</a></li>
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