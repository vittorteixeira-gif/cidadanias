// 1. Funcionalidade de Modo Claro / Escuro (Theme Toggle)
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        document.body.removeAttribute('data-theme');
    } else {
        document.body.setAttribute('data-theme', 'light');
    }
});

// 2. Validador Interativo do Quiz
const quizForm = document.getElementById('quiz-form');
const resultBox = document.getElementById('quiz-result');

quizForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const q1 = document.querySelector('input[name="q1"]:checked').value;
    const q2 = document.querySelector('input[name="q2"]:checked').value;

    let acertos = 0;

    if (q1 === 'certo') acertos++;
    if (q2 === 'certo') acertos++;

    resultBox.classList.remove('hidden', 'sucesso');
    resultBox.classList.add('sucesso');
    
    if (acertos === 2) {
        resultBox.innerHTML = `🎯 Incrível! Você acertou ${acertos}/2. Seus olhos estão treinados contra as Deepfakes!`;
    } else {
        resultBox.innerHTML = `⚠️ Você acertou ${acertos}/2. Revise o Guia de Sobrevivência Digital para melhorar sua detecção!`;
    }
});
