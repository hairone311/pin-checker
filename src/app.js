const verifyButton = document.querySelector("button"); // Associa a constante ao botão de verificação
const pinInput = document.querySelector("#pin"); // Associa a constante ao input do PIN
const generatedPIN = Math.floor(Math.random() * 9000) + 1000; // Gera um PIN aleatório entre 1000 e 9999

console.log("PIN Gerado: ", generatedPIN); // Mostra o PIN gerado no console para facilitar os testes

verifyButton.addEventListener("click", verifyPIN); // Chama a função de verificação de PIN quando o usuário faz a acção de Clique

function verifyPIN() {
    let pin = pinInput.value;

    if (pin.length !== 4) {
        return alert("Insira um PIN válido de 4 dígitos.");
    } else if (pin == generatedPIN) {
        alert("Parabéns, você digitou o PIN correcto!");
    } else {
        const tip = pin < generatedPIN ? "maior" : "menor";
        const amount = Math.abs(pin - generatedPIN) > 100 ? "muito " : "";

        // Informa ao usuário que o PIN está errado e que a próxima tentativa deve ser (muito) maior/menor
        alert(`PIN errado! Insira um valor ${amount}${tip} que o digitado.`);
    }
}
