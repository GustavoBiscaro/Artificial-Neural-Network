async function calcular() {
    // Instanciou a rede neural
    const net = new brain.NeuralNetwork({hiddenLayers: [3] });
    // Forneceu dados para treinamento da rede neural
    const training = [
        { input: [1, 0, 1], output: [1]},
        { input: [0, 1, 1], output: [0]},
        { input: [0, 1, 0], output: [0]},
        { input: [1, 0, 1], output: [1]},
        { input: [1, 1, 0], output: [1]},
        { input: [1, 0, 1], output: [1]},
        { input: [0, 0, 0], output: [0]},
        { input: [1, 1, 1], output: [1]},
        { input: [0, 0, 1], output: [0]},
        { input: [0, 0, 1], output: [0]},
    ];

    // Rede neural treina com base nos dados
    net.train(training);

    // Rede neural lê os dados a partir dos quais ela terá que adivinhar o resultado
    const output = net.run([1, 1, 0]);

    // Mostra o resultado da previsão no html
    document.getElementById('result').innerText = output;
}