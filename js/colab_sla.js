let dados = {
  categorias: [
    "Restaurante",
    "Limpeza",
    "Jardinagem",
    "Segurança Patrimonial",
    "Recepção",
    "Correspondência",
    "Controle de pragas",
    "Máquina de snacks",
    "Máquina de bebidas quentes",
    "Estacionamento",
    "Transporte de turno",
    "Transporte Administrativo",
    "Frota de veículos - pool",
    "PAB - Itaú",
    "Elevador",
  ],
  items: [{
      id: 1,
      titulo: "Elogios",
      cat: "Restaurante",
      desc: "Registro <b>positivo</b> quanto ao atendimento da equipe, cardápio e infraestrutura",
      sla: 120,
    },
    {
      id: 2,
      titulo: "Reclamações",
      cat: "Restaurante",
      desc: "Registro <b>negativo</b> quanto ao atendimento da equipe, cardápio e infraestrutura",
      sla: 120,
    },
    {
      id: 3,
      titulo: "Solicitação Geral",
      cat: "Restaurante",
      desc: "",
      sla: 48,
    },
    {
      id: 4,
      titulo: "Elogios",
      cat: "Limpeza",
      desc: "Registro <b>positivo</b> quanto ao atendimento da equipe e atividade realizada",
      sla: 120,
    },
    {
      id: 5,
      titulo: "Reclamações",
      cat: "Limpeza",
      desc: "Registro <b>negativo</b> quanto ao atendimento da equipe e atividade realizada",
      sla: 120,
    },
    {
      id: 6,
      titulo: "Solicitação Geral",
      cat: "Limpeza",
      desc: "",
      sla: 48,
    },
    {
      id: 7,
      titulo: "Abastecimento de insumos",
      cat: "Limpeza",
      desc: "Abastecimento de insumos em banheiros, vestiários e copas",
      sla: 4,
    },
    {
      id: 8,
      titulo: "Limpeza de vidros",
      cat: "Limpeza",
      desc: "",
      sla: 12,
    },
    {
      id: 9,
      titulo: "Lixeiras para escritórios ou banheiros",
      cat: "Limpeza",
      desc: "",
      sla: 4,
    },
    {
      id: 10,
      titulo: "Dispensers",
      cat: "Limpeza",
      desc: "",
      sla: 12,
    },
    {
      id: 11,
      titulo: "Contratação de limpeza de estofados",
      cat: "Limpeza",
      desc: "",
      sla: 96,
    },
    {
      id: 12,
      titulo: "Solicitação de serviço extra",
      cat: "Limpeza",
      desc: "Atendimento fora do plano de trabalho contratual",
      sla: 48,
    },
    {
      id: 13,
      titulo: "Solicitação Geral",
      cat: "Jardinagem",
      desc: "",
      sla: 48,
    },
    {
      id: 14,
      titulo: "Solicitações",
      cat: "Segurança Patrimonial",
      desc: "",
      sla: 4,
    },
    {
      id: 15,
      titulo: "Manutenção de catracas, cancelas e portões",
      cat: "Segurança Patrimonial",
      desc: "",
      sla: 4,
    },
    {
      id: 16,
      titulo: "Solicitações de serviço extra",
      cat: "Segurança Patrimonial",
      desc: "",
      sla: 12,
    },
    {
      id: 17,
      titulo: "Solicitação de crachá de terceiros",
      cat: "Recepção",
      desc: "Em caso de perda e roubo de crachá ou novos colaboradores",
      sla: 12,
    },
    {
      id: 18,
      titulo: "Solicitação de crachá de funcionários",
      cat: "Recepção",
      desc: "Em caso de perda e roubo de crachá ou novos colaboradores",
      sla: 12,
    },
    {
      id: 19,
      titulo: "Solicitações",
      cat: "Correspondência",
      desc: "Localização de malote e envio de correspondência",
      sla: 24,
    },
    {
      id: 20,
      titulo: "Solicitações",
      cat: "Controle de pragas",
      desc: "",
      sla: 24,
    },
    {
      id: 21,
      titulo: "Solicitações",
      cat: "Máquina de snacks",
      desc: "Sugestão, reposição ou falhas operacionais",
      sla: 24,
    },
    {
      id: 22,
      titulo: "Solicitações",
      cat: "Máquina de bebidas quentes",
      desc: "Sugestão, reposição ou falhas operacionais",
      sla: 24,
    },
    {
      id: 23,
      titulo: "Liberação de entrada de veículo funcionário",
      cat: "Estacionamento",
      desc: "Liberação para a entrada de funcionário de outras unidades ou pedidos de acesso para usuários cadastrados no fretado",
      sla: 24,
    },
    {
      id: 24,
      titulo: "Reserva para vagas de visitantes",
      cat: "Estacionamento",
      desc: "",
      sla: 24,
    },
    {
      id: 25,
      titulo: "Atualização de veículo de funcionário",
      cat: "Estacionamento",
      desc: "",
      sla: 48,
    },
    {
      id: 26,
      titulo: "Cadastro (novo colaborador)",
      cat: "Transporte de turno",
      desc: "Cadastro de novos funcionários",
      sla: 24,
    },
    {
      id: 27,
      titulo: "Mudança de turno / endereço",
      cat: "Transporte de turno",
      desc: "",
      sla: 24,
    },
    {
      id: 28,
      titulo: "Outras solicitações",
      cat: "Transporte de turno",
      desc: "",
      sla: 48,
    },
    {
      id: 29,
      titulo: "Cadastro (novo colaborador)",
      cat: "Transporte Administrativo",
      desc: "",
      sla: 24,
    },
    {
      id: 30,
      titulo: "Mudança de endereço",
      cat: "Transporte Administrativo",
      desc: "",
      sla: 24,
    },
    {
      id: 31,
      titulo: "2ª via de crachá",
      cat: "Transporte Administrativo",
      desc: "",
      sla: 24,
    },
    {
      id: 32,
      titulo: "Outras solicitações",
      cat: "Transporte Administrativo",
      desc: "",
      sla: 48,
    },
    {
      id: 33,
      titulo: "Reserva de veículos",
      cat: "Frota de veículos - pool",
      desc: "Somente para colaboradores Oxiteno, sendo necessária CNH válida",
      sla: 24,
    },
    {
      id: 34,
      titulo: "Manutenção de veículo",
      cat: "Frota de veículos - pool",
      desc: "",
      sla: 72,
    },
    {
      id: 35,
      titulo: "Solicitação",
      cat: "PAB - Itaú",
      desc: "Serviço de atendimento do PAB em Mauá de segunda e quinta-feira das 10:00 as 16:00",
      sla: 24,
    },
    {
      id: 36,
      titulo: "Manutenção",
      cat: "Elevador",
      desc: "",
      sla: 24,
    },
  ],
};

$(document).ready(async function () {
  let dados = await fetch('http://localhost:3000/catalogo_solicitacoes', {
      method: "GET",
      mode: "cors",
    })
    .then(r => r.json())
    .then(data => {
      return data;
    })
    .catch(e => console.log(e));

  // Populando select Item.
  const selectItem = $("#inputItem");
  dados.forEach((dado) => {
    const allOptions = $.map($('#inputItem option'), (option) => {
      return option.value;
    })

    if (allOptions.includes(dado.item_name)) return;
    else {
      const option = document.createElement('option');
      option.value = dado.item_name;
      option.text = dado.item_name;
      selectItem.append(option);
    }
  })

  // Populando select SubItem.
  const selectSubItem = $('#inputSubItem');
  selectItem.change(() => {
    $('#inputItem option:eq(0)').remove();
    selectSubItem.prop('disabled', false);
    selectSubItem.find('option')
      .remove()
      .end()

    dados.forEach((dado) => {
      if (dado.item_name == selectItem.val()) {
        const option = document.createElement('option');
        option.value = dado.name;
        option.text = dado.name;
        option.id = dado.subitem_id;
        selectSubItem.append(option);
      }
    })
  });

  //Configurando POST no botão
  $('button#send').on('click', async () => {
    event.preventDefault();
    const SLABody = {
      "sla": $('#prazos').val(),
    }
    console.log(SLABody);
    const id = $('#inputSubItem').children(':selected').attr('id');

    fetch(`http://localhost:3000/solicitacoes_sla/${id}`, {
        method: "POST",
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(SLABody)
      })
      .then(() => {
        $('#modal-alert').modal('show');
      })
      .catch(e => console.log(e));
  })

  // dados.categorias.forEach((element) => {
  //   var option = document.createElement("option");
  //   option.value = element;
  //   option.text = element;
  //   select.append(option);
  // });

  // $("#inputItem").change(function () {
  //   removeOptions(document.getElementById("secondary"));
  //   var es = document.getElementById("inputItem");

  //   esValor = es.options[es.selectedIndex].value;

  //   var dado = dados.items.filter((item) => item.cat == esValor);
  //   //console.log(dado);

  //   var select_ = $("#secondary");
  //   select_.prop("disabled", false);

  //   dado.forEach((data) => {
  //     var option_ = document.createElement("option");

  //     option_.text = data.titulo;
  //     select_.append(option_);
  //   });
  // });

  // function removeOptions(selectElement) {
  //   var i,
  //       L = selectElement.options.length - 1;
  //   for (i = L; i >= 0; i--) {
  //     selectElement.remove(i);
  //   }
  // }
});