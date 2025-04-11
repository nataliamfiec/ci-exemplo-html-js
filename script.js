document.getElementById("meuBotao").addEventListener("click",
    function () {
        document.getElementById("mensagem").textContent = "Botão clicado!";
    }
);

document.getElementById("mudaCor").addEventListener("click", () => {
    document.querySelector("body").style.backgroundColor = "#008080";
})

document.getElementById("colocaFoto").addEventListener("click", () => {
    const imagem = 'gatos.jpg';

    document.querySelector("body").style.backgroundImage = `url('${imagem}')`;
})