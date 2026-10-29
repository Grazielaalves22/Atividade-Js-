//Crie um programa em javascript que solicita ao usuario para inserir nomes de clientes. os nomes devem ser armazenados em um array. o programa deve perguntar ao usuario se ele deseja inserir mais nomes. quando o usuario decidir nao inserir mais nomes, o programa deve exibir todos os nomes de clientes armazenados.




 // Array para armazenar os nomes dos clientes
let clientes = [];
let continuar = true;

// Loop para continuar solicitando nomes enquanto o usuário quiser
while (continuar) {
    // Solicita o nome ao usuário
    let nome = prompt("Digite o nome do cliente:");
    
    // Verifica se o usuário digitou algo e clicou em OK
    if (nome !== null && nome.trim() !== "") {
        clientes.push(nome.trim());
    } else {
        alert("Nome inválido ou cancelado.");
    }
    
    // Pergunta se deseja continuar (confirm retorna true para OK e false para Cancelar)
    continuar = confirm("Deseja inserir mais nomes?");
}

// Exibe todos os nomes armazenados
console.log("--- Lista de Clientes Cadastrados ---");
if (clientes.length > 0) {
    clientes.forEach((cliente, index) => {
        console.log(`${index + 1}. ${cliente}`);
    });
    alert("Clientes cadastrados:\n" + clientes.join("\n"));
} else {
    console.log("Nenhum cliente foi cadastrado.");
    alert("Nenhum cliente foi cadastrado.") 

    }