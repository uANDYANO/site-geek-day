
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('contactForm');
        const successMessage = document.getElementById('successMessage');

        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            // Validação dos campos
            let isValid = true;

            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            if (nome === '') {
                alert('Por favor, preencha o campo Nome.');
                isValid = false;
            }

            if (email === '') {
                alert('Por favor, preencha o campo E-mail.');
                isValid = false;
            } else if (!isValidEmail(email)) {
                alert('Por favor, insira um endereço de e-mail válido.');
                isValid = false;
            }

            if (mensagem === '') {
                alert('Por favor, preencha o campo Mensagem.');
                isValid = false;
            }

            // Se todos os campos forem válidos, exibe a mensagem de sucesso
            if (isValid) {
                // Aqui você pode adicionar o código para enviar o formulário para o servidor (AJAX)
                // Neste exemplo, apenas exibimos a mensagem de sucesso
                successMessage.style.display = 'block';

                // Limpa os campos do formulário
                form.reset();

                // Oculta a mensagem de sucesso após alguns segundos
                setTimeout(function() {
                    successMessage.style.display = 'none';
                }, 10000); // Oculta após 10 segundos
            }
        });

        // Função para validar o formato do e-mail
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    });