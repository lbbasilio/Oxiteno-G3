let dados = {
    categorias: ["Restaurante", "Limpeza"],
    items: [
        {
            id: 1,
            titulo: "Elogios",
            cat: "Restaurante",
            desc: "Registro <b>positivo</b> quanto ao atendimento da equipe, cardápio e infraestrutura", 
            sla: 120
        },
        {
            id: 2,
            titulo: "Reclamações",
            cat: "Restaurante",
            desc: "Registro <b>negativo</b> quanto ao atendimento da equipe, cardápio e infraestrutura", 
            sla: 120
        },
        {
            id: 3,
            titulo: "Solicitação Geral",
            cat: "Restaurante",
            desc: "",
            sla: 48 
        },
        {
            id: 4,
            titulo: "Elogios",
            cat: "Limpeza",
            desc: "Registro <b>positivo</b> quanto ao atendimento da equipe e atividade realizada", 
            sla: 120
        },
        {
            id: 5,
            titulo: "Reclamações",
            cat: "Limpeza",
            desc: "Registro <b>negativo</b> quanto ao atendimento da equipe e atividade realizada", 
            sla: 120
        }
    ],
};

$(document).ready(function() {
    
    const acc = $("#categorias");
    let dict = {};

    dados.categorias.forEach(cat => {
        acc.append(
            `<div class="accordion-item">
            <div class="accordion-header" id="${cat}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sub${cat}">
                    ${cat}
                </button>
            </div>
            <div id="sub${cat}" class="accordion-collapse collapse" data-bs-parent="#categorias">
                <div class="accordion-body container-fluid">
                    <div class="row justify-content-start" id="body${cat}"></div>
                </div>
            </div>
            </div>`);

            dict[cat] = $(`#body${cat}`);
    });

    let counter = 0;
    dados.items.forEach(item => {
        let content = 
            `<div class="card col-3">
                <div class="card-body">
                    <h5 class="card-title">${item.titulo}</h5>
                    <p class="card-text">${item.desc}</p>
                    <a href="#" class="card-link">Solicitar</a>
                </div>
            </div>`;
        dict[item.cat].append(content);
    });

});   

// TODO:
// - Arrumar spacing entre cards
// - Colocar titulo do card no header
// - Colocar botão no footer
// - Completar a tabela em JSON