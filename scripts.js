const amount = document.getElementById("amount")

// Manipulando o input amount para aceitar somente números.
amount.addEventListener("input", () => {
    const hasCharacterRegex = /\D+/g
    amount.value = amount.value.replace(hasCharacterRegex, "")
})