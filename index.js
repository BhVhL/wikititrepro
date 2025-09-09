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