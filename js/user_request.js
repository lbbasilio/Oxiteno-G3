let dados = {
    categorias: ["Restaurante", "Limpeza", "Jardinagem", "Segurança Patrimonial", "Recepção", "Correspondência", "Controle de pragas", "Máquina de snacks", "Máquina de bebidas quentes", "Estacionamento", "Transporte de turno", "Transporte Administrativo", "Frota de veículos - pool", "PAB - Itaú", "Elevador"],
    items: [{
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
        },
        {
            id: 6,
            titulo: "Solicitação Geral",
            cat: "Limpeza",
            desc: "",
            sla: 48
        },
        {
            id: 7,
            titulo: "Abastecimento de insumos",
            cat: "Limpeza",
            desc: "Abastecimento de insumos em banheiros, vestiários e copas",
            sla: 4
        },
        {
            id: 8,
            titulo: "Limpeza de vidros",
            cat: "Limpeza",
            desc: "",
            sla: 12
        },
        {
            id: 9,
            titulo: "Lixeiras para escritórios ou banheiros",
            cat: "Limpeza",
            desc: "",
            sla: 4
        },
        {
            id: 10,
            titulo: "Dispensers",
            cat: "Limpeza",
            desc: "",
            sla: 12
        },
        {
            id: 11,
            titulo: "Contratação de limpeza de estofados",
            cat: "Limpeza",
            desc: "",
            sla: 96
        },
        {
            id: 12,
            titulo: "Solicitação de serviço extra",
            cat: "Limpeza",
            desc: "Atendimento fora do plano de trabalho contratual",
            sla: 48
        },
        {
            id: 13,
            titulo: "Solicitação Geral",
            cat: "Jardinagem",
            desc: "",
            sla: 48
        },
        {
            id: 14,
            titulo: "Solicitações",
            cat: "Segurança Patrimonial",
            desc: "",
            sla: 4
        },
        {
            id: 15,
            titulo: "Manutenção de catracas, cancelas e portões",
            cat: "Segurança Patrimonial",
            desc: "",
            sla: 4
        },
        {
            id: 16,
            titulo: "Solicitações de serviço extra",
            cat: "Segurança Patrimonial",
            desc: "",
            sla: 12
        },
        {
            id: 17,
            titulo: "Solicitação de crachá de terceiros",
            cat: "Recepção",
            desc: "Em caso de perda e roubo de crachá ou novos colaboradores",
            sla: 12
        },
        {
            id: 18,
            titulo: "Solicitação de crachá de funcionários",
            cat: "Recepção",
            desc: "Em caso de perda e roubo de crachá ou novos colaboradores",
            sla: 12
        },
        {
            id: 19,
            titulo: "Solicitações",
            cat: "Correspondência",
            desc: "Localização de malote e envio de correspondência",
            sla: 24
        },
        {
            id: 20,
            titulo: "Solicitações",
            cat: "Controle de pragas",
            desc: "",
            sla: 24
        },
        {
            id: 21,
            titulo: "Solicitações",
            cat: "Máquina de snacks",
            desc: "Sugestão, reposição ou falhas operacionais",
            sla: 24
        },
        {
            id: 22,
            titulo: "Solicitações",
            cat: "Máquina de bebidas quentes",
            desc: "Sugestão, reposição ou falhas operacionais",
            sla: 24
        },
        {
            id: 23,
            titulo: "Liberação de entrada de veículo funcionário",
            cat: "Estacionamento",
            desc: "Liberação para a entrada de funcionário de outras unidades ou pedidos de acesso para usuários cadastrados no fretado",
            sla: 24
        },
        {
            id: 24,
            titulo: "Reserva para vagas de visitantes",
            cat: "Estacionamento",
            desc: "",
            sla: 24
        },
        {
            id: 25,
            titulo: "Atualização de veículo de funcionário",
            cat: "Estacionamento",
            desc: "",
            sla: 48
        },
        {
            id: 26,
            titulo: "Cadastro (novo colaborador)",
            cat: "Transporte de turno",
            desc: "Cadastro de novos funcionários",
            sla: 24
        },
        {
            id: 27,
            titulo: "Mudança de turno / endereço",
            cat: "Transporte de turno",
            desc: "",
            sla: 24
        },
        {
            id: 28,
            titulo: "Outras solicitações",
            cat: "Transporte de turno",
            desc: "",
            sla: 48
        },
        {
            id: 29,
            titulo: "Cadastro (novo colaborador)",
            cat: "Transporte Administrativo",
            desc: "",
            sla: 24
        },
        {
            id: 30,
            titulo: "Mudança de endereço",
            cat: "Transporte Administrativo",
            desc: "",
            sla: 24
        },
        {
            id: 31,
            titulo: "2ª via de crachá",
            cat: "Transporte Administrativo",
            desc: "",
            sla: 24
        },
        {
            id: 32,
            titulo: "Outras solicitações",
            cat: "Transporte Administrativo",
            desc: "",
            sla: 48
        },
        {
            id: 33,
            titulo: "Reserva de veículos",
            cat: "Frota de veículos - pool",
            desc: "Somente para colaboradores Oxiteno, sendo necessária CNH válida",
            sla: 24
        },
        {
            id: 34,
            titulo: "Manutenção de veículo",
            cat: "Frota de veículos - pool",
            desc: "",
            sla: 72
        },
        {
            id: 35,
            titulo: "Solicitação",
            cat: "PAB - Itaú",
            desc: "Serviço de atendimento do PAB em Mauá de segunda e quinta-feira das 10:00 as 16:00",
            sla: 24
        },
        {
            id: 36,
            titulo: "Manutenção",
            cat: "Elevador",
            desc: "",
            sla: 24
        }
    ]
};

$(document).ready(async function () {

    let dados = await fetch('http://localhost:3000/catalogo_solicitacoes', {
        method: "GET" ,
        mode: "cors",
      })
        .then(r => r.json())
        .then(data => {
           return data;
        })
        .catch(e => console.log(e));

    const acc = $("#categorias");
    let dict = {};
    let catCount = {};

    dados.forEach((dado) => {
        let cat = dado.item_name.replace(/ \//g, "").replace(/ /g, "");
        if (!(cat in dict))
        {
            acc.append(
                `<div class="accordion-item">
                <div class="accordion-header" id="${cat}">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sub${cat}">
                        ${dado.item_name}
                    </button>
                </div>
                <div id="sub${cat}" class="accordion-collapse collapse" data-bs-parent="#categorias">
                    <div class="accordion-body container-fluid" style="padding-top: 0;">
                        <div class="row justify-content-around" id="body${cat}"></div>
                    </div>
                </div>
                </div>`);

            dict[cat] = $(`#body${cat}`);
            catCount[cat] = 0;
        }

        let content =
            `<div class="col">
            <div class="card" style="height: 100%;">
                <div class="card-header">
                    ${dado.name}
                </div>    
                <div class="card-body">
                    <p class="card-text">${dado.descricao}</p>
                </div>
                <div class="card-footer">
                    <div class="d-flex justify-content-end">
                        <button type="button" class="btn btn-primary" item_name="${dado.item_name}" subitem_name="${dado.name}" subitem_id="${dado.subitem_id}">Solicitar</button>
                    </div>
                </div>
            </div>
            </div>`;

        let count = catCount[cat];

        if (count % 3 == 0) content = `<div class="row row-cols-3 gx-4 gy-3">` + content;
        else if (count % 3 == 2) content = content + `</div>`;

        if (count % 3 == 0) dict[cat].append(content);
        else dict[cat].children().eq(Math.floor(count / 3)).append(content);

        catCount[cat]++;
    });
    
    /*dados.categorias.forEach(cat => {
        let string = cat.replace(/ /g, "");
        acc.append(
            `<div class="accordion-item">
            <div class="accordion-header" id="${cat}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sub${string}">
                    ${cat}
                </button>
            </div>
            <div id="sub${string}" class="accordion-collapse collapse" data-bs-parent="#categorias">
                <div class="accordion-body container-fluid" style="padding-top: 0;">
                    <div class="row justify-content-around" id="body${string}"></div>
                </div>
            </div>
            </div>`);

        dict[cat] = $(`#body${string}`);
        catCount[cat] = 0;
    });

    dados.items.forEach(item => {
        let content =
            `<div class="col">
            <div class="card" style="height: 100%;">
                <div class="card-header">
                    ${item.titulo}
                </div>    
                <div class="card-body">
                    <p class="card-text">${item.desc}</p>
                </div>
                <div class="card-footer">
                    <div class="d-flex justify-content-end">
                        <button type="button" class="btn btn-primary" subitem_name="${item.name}" item_name="${item.item_name}">Solicitar</button>
                    </div>
                </div>
            </div>
            </div>`;

        let count = catCount[item.cat];

        if (count % 3 == 0) content = `<div class="row row-cols-3 gx-4 gy-3">` + content;
        else if (count % 3 == 2) content = content + `</div>`;

        if (count % 3 == 0) dict[item.cat].append(content);
        else dict[item.cat].children().eq(Math.floor(count / 3)).append(content);

        catCount[item.cat]++;
    });*/

    $(".accordion-body button").on('click', function () {
        window.location.href = `form_call.html?subitem_id=${this.attributes.subitem_id.value}&item_name=${this.attributes.item_name.value}&subitem_name=${this.attributes.subitem_name.value}`;
    });
});