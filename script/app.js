// Valor Default para o Contador.
let count = 0;

// Puxando o span com o o contador e todos os botões.
const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

// ForEach para dar a função para todos os três botôes
buttons.forEach(function (btn) {
    btn.addEventListener("click", function (i) {
        const style = i.currentTarget.classList;
        // Irá selecionar todas as coisas que contem a palavra escrita dentro do ().
        if (style.contains("d")){
            count--;
            
        }
        else if(style.contains("i")) {
            count++;
        }
        else {
            count = 0;
        }
        value.textContent = count;
    })


    
})


