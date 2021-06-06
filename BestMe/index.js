const questions = [
    "O que aprendi hoje?",
    "O que aconteceu que não gostei e como melhorar?",
    "O que me deixou feliz",
    "Quantas pessoas ajudei hoje",
];

const ask = (index = 0) => {
    process.stdout.write("\n" + questions[index] + " > ");
};

const answers = [];

process.stdin.on("data", data => {
    answers.push(data.toString().trim());
    if(answers.length < questions.length) {
        ask(answers.length);
    } else {
        console.log(answers);
        process.exit();
    };
});

process.on('exit', () => {
    console.log(`
    Show, Luiz, 

    Hoje você aprendeu :
    ${answers[0]}

    O que não foi tão legal, mas que pode melhorar foi:
    ${answers[1]}

    Mas mesmo assim o que te fez feliz hoje foi:
    ${answers[2]}

    E ainda por cima, você ajudou ${answers[3]} pessoas, muito bom!!!
    `)
});

ask();



