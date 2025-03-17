async function carregarDados() {
            const resposta = await fetch("http://localhost:8080/atualizacao");
            const dados = await resposta.json();
            let lista = document.getElementById("lista");
            lista.innerHTML = "";
            dados.forEach(user => {
                let item = document.createElement("li");
                item.textContent = `${user.nome} - ${user.horario}`;
                lista.appendChild(item);
            });
        }
        carregarDados();