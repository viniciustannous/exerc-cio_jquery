const form = document.getElementById('form-atividade');

const atividades= [];


let linhas = '';
form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();

})

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
        if(atividades.includes(inputNomeAtividade.value)){
        alert(`a atividade ${inputNomeAtividade.value} já foi inserida`)
    } else{

    atividades.push(inputNomeAtividade.value);
    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;

    linhas += linha;
    }
    inputNomeAtividade.value = "";
       }

function atualizaTabela(){
    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas
}

