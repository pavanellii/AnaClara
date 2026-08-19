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
    "✔ Preparando pergunta...",
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

            // Espera um pouco
            setTimeout(() => {

                // Esconde as mensagens
                titulo.style.display = "none";
                msg.style.display = "none";

                // Mostra a foto e a pergunta
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

document.getElementById("sim").addEventListener("click", () => {

    document.body.innerHTML = `

    <div style="
        background:#111;
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        color:white;
        font-family:Arial;
        text-align:center;
    ">

        <h1 style="font-size:70px;">❤️</h1>

        <h1>Sabia que você ia aceitar!</h1>

        <p style="font-size:28px;margin-top:20px;">
            Eu sei que sou irresistível Karina! kkkkkkkkk
        </p>

        <h2 style="margin-top:40px;">
            - Pavanelli
        </h2>

    </div>

    `;

});