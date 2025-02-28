document.addEventListener("DOMContentLoaded", () => {
    const rollButton = document.createElement("button");
    rollButton.textContent = "Roll";
    rollButton.id = "rollButton";
    document.body.appendChild(rollButton);

    rollButton.addEventListener("click", () => {
        let diceImage = document.getElementById("diceImage");
        let resultText = document.getElementById("result");

        
        diceImage.classList.add("rolling");
        resultText.textContent = "Rolling... 🎲";

        
        setTimeout(() => {
            fetch("/roll")
                .then(response => response.json())
                .then(data => {
                    diceImage.classList.remove("rolling"); 
                    diceImage.src = `dice${data.dice}.png`; 
                    resultText.textContent = data.message; 
                })
                .catch(error => console.error("Error:", error));
        }, 1000);
    });
});
