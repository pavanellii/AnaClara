```javascript
document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // Carregamento
    // ===============================

    let progresso = 0;

    const barra = document.getElementById("progresso");
    const texto = document.getElementById("texto");
    const loading = document.getElementById("loading");
    const conteudo = document.getElementById("conteudo");

    const carregar = setInterval(() => {

        progresso++;

        barra.style.width = progresso + "%";
        texto.innerHTML = progresso + "%";

        if (progresso >= 100) {

            clearInterval(carregar);

            loading.style.display = "none";
            conteudo.style.display = "flex";

            iniciarSistema();

        }

    }, 35);


    // ===============================
    // Mensagens do sistema
    // ===============================

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
        const msg = document.getElementById("mensagem");
        const pergunta = document.getElementById("pergunta");

        titulo.innerHTML = "Inicializando...";

        function escrever() {

            if (i < mensagens.length) {

                msg.innerHTML += mensagens[i] + "<br>";

                i++;

                setTimeout(escrever, 900);

            } else {

                setTimeout(() => {

                    titulo.style.display = "none";
                    msg.style.display = "none";

                    pergunta.style.display = "block";

                }, 1200);

            }

        }

        escrever();

    }


    // ===============================
    // Botão NÃO
    // ===============================

    const nao = document.getElementById("nao");

    nao.addEventListener("mouseenter", function () {

        const largura = window.innerWidth - nao.offsetWidth;
        const altura = window.innerHeight - nao.offsetHeight;

        const x = Math.random() * largura;
        const y = Math.random() * altura;

        nao.style.position = "fixed";
        nao.style.left = x + "px";
        nao.style.top = y + "px";

    });


    // ===============================
    // Botão SIM
    // ===============================

    const sim = document.getElementById("sim");

    sim.addEventListener("click", function () {

        const pergunta = document.getElementById("pergunta");

        pergunta.innerHTML = `

            <p class="mensagem-final">
                Eu sei que sou irresistível kkkkkkk, só um aviso que te falo:
                <br>
                cuidado pra não se apaixonar. ❤️
            </p>

        `;

    });

});
```
