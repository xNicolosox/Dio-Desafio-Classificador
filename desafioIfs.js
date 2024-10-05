const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let ranks = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]
for (let i = 0; i < ranks.length; i++) {
    console.log(`Rank ${i + 1}: ${ranks[i]}`);
}

readline.question("Digite o nome do heroi:", name => {
    readline.question("Digite o xp do heroi:", xp => {

        let level
        if (xp < 1000) {
            level = "Ferro"
        } else if (xp <= 2000) {
            level = "Bronze"
        } else if (xp <= 5000) {
            level = "Prata"
        } else if (xp <= 7000) {
            level = "Ouro"
        } else if (xp <= 8000) {
            level = "Platina"
        } else if (xp <= 9000) {
            level = "Ascendente"
        } else if (xp <= 10000) {
            level = "Imortal"
        } else {
            level = "Radiante"
        }

        console.log(`O Herói de nome ${name} está no nível de ${level}`);

        readline.close();

    })
})
