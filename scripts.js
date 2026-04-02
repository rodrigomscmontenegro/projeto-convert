// Obtendo os elementos do formulário.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

// Manipulando o input amount para aceitar somente números.
amount.addEventListener("input", () => {
    const hasCharacterRegex = /\D+/g
    amount.value = amount.value.replace(hasCharacterRegex, "")
})

// Capturando o evento de submit do formulário.
form.onsubmit = (event) => {
    event.preventDefault()

    console.log(currency.value)
}