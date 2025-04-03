const btn = document.querySelector("#btn");

function darkMode() {
    const body = document.querySelector("body")
    body.classList.toggle("dark-mode")

    if (body.classList.contains("dark-mode")) {
        document.getElementById("btn").innerText = "modo claro";
    } else {
        document.getElementById("btn").innerText = "modo escuro";
    }
}
btn.addEventListener("click", darkMode)

document.getElementById('addImageBtn').addEventListener('click', function() {
    // Cria um novo elemento de imagem
    var newImage = document.createElement('img');
    
    // Define o atributo src da imagem
    newImage.src = 'img/vocêNãoViuNada.jpg'; // URL da imagem
    
    // Define um atributo alt para acessibilidade
    newImage.alt = 'Imagem de exemplo';
    
    // Adiciona a imagem ao contêiner
    document.getElementById('imageContainer').appendChild(newImage);
});
