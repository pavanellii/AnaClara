```javascript
let progresso = 0;

const barra = document.getElementById("progresso");
const texto = document.getElementById("texto");

const carregar = setInterval(() => {

    progresso++;

    barra.style.width = progresso + "%";
    texto.innerHTML = progresso + "%";

    if (progresso >= 100) {

        clearInterval(carregar);

        document.getElementById("loading").style.display = "none";
        document.getElementById("conteudo").style.display = "flex";

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

                document.getElementById("pergunta").style.display = "block";

            }, 1200);

        }

    }

    escrever();

}


// ===============================
// Botão NÃO foge
// ===============================

const nao = document.getElementById("nao");

nao.addEventListener("mouseenter", () => {

    const largura = window.innerWidth - 180;
    const altura = window.innerHeight - 100;

    const x = Math.random() * largura;
    const y = Math.random() * altura;

    nao.style.position = "absolute";
    nao.style.left = x + "px";
    nao.style.top = y + "px";

});


// ===============================
// Botão SIM
// ===============================

const sim = document.getElementById("sim");

sim.addEventListener("click", () => {

    document.getElementById("pergunta").innerHTML = `

        <p style="
            font-size: 20px;
            font-weight: bold;
            line-height: 1.6;
            text-align: center;
        ">
            Eu sei que sou irresistível kkkkkkk, só um aviso que te falo:
            cuidado pra não se apaixonar. ❤️
        </p>

    `;

});
```
