```javascript
// ==========================================
// INÍCIO DO SISTEMA
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Script carregado com sucesso!");


    // ==========================================
    // BARRA DE CARREGAMENTO
    // ==========================================

    let progresso = 0;

    const barra = document.getElementById("progresso");
    const texto = document.getElementById("texto");
    const loading = document.getElementById("loading");
    const conteudo = document.getElementById("conteudo");

    const carregar = setInterval(function () {

        progresso++;

        barra.style.width = progresso + "%";
        texto.innerHTML = progresso + "%";


        // Quando chegar em 100%

        if (progresso >= 100) {

            clearInterval(carregar);

            loading.style.display = "none";

            conteudo.style.display = "flex";

            iniciarSistema();

        }

    }, 35);


    // ==========================================
    // MENSAGENS DO SISTEMA
    // ==========================================

    const mensagens = [

        "✔ Sistema inicializado...",
        "✔ Analisando compatibilidade...",
        "✔ Carregando coragem...",
        "✔ Preparando pergunta para Ana...",
        "✔ Pergunta pronta."

    ];


    function iniciarSistema() {

        let i = 0;

        const titulo = document.getElementById("titulo");
        const mensagem = document.getElementById("mensagem");
        const pergunta = document.getElementById("pergunta");


        titulo.innerHTML = "Inicializando...";


        function escrever() {

            if (i < mensagens.length) {

                mensagem.innerHTML += mensagens[i] + "<br>";

                i++;

                setTimeout(escrever, 900);

            }

            else {

                setTimeout(function () {

                    titulo.style.display = "none";

                    mensagem.style.display = "none";

                    pergunta.style.display = "block";

                }, 1200);

            }

        }


        escrever();

    }


    // ==========================================
    // BOTÃO "NÃO" FOGE
    // ==========================================

    const nao = document.getElementById("nao");


    nao.addEventListener("mouseenter", function () {

        const largura =
            window.innerWidth - nao.offsetWidth;

        const altura =
            window.innerHeight - nao.offsetHeight;


        const x =
            Math.random() * largura;

        const y =
            Math.random() * altura;


        nao.style.position = "fixed";

        nao.style.left = x + "px";

        nao.style.top = y + "px";

    });


    // ==========================================
    // BOTÃO "SIM"
    // ==========================================

    const sim = document.getElementById("sim");


    sim.addEventListener("click", function () {

        const pergunta =
            document.getElementById("pergunta");


        pergunta.innerHTML = `

            <div class="final">

                <p>
                    Eu sei que sou irresistível kkkkkkk,
                    só um aviso que te falo:
                </p>

                <p>
                    cuidado pra não se apaixonar. ❤️
                </p>

            </div>

        `;

    });

});
```
