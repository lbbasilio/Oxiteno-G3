$(document).ready(async () => {
  var todo = document.querySelector("#todo");
  var progress = document.querySelector("#progress");
  var complete = document.querySelector("#complete");

  let dados = await fetch('http://localhost:3000/solicitacoes', {
        method: "GET" ,
        mode: "cors",
      })
        .then(r => r.json())
        .then(data => {
           return data;
        })
        .catch(e => console.log(e));
      

  function formatDate (endDate) {
    let difference = Math.abs(endDate - Date.now());
    let hours = Math.floor(difference / 3600000);
    let minutes = Math.floor((difference % 3600000) / 60000);
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    return `${hours}:${minutes} `;
  }

  console.log(dados);
  dados.forEach(item => {
    let content = 
    `
    <div id="${item.solicitacao_id}" status="${item.status}">
      <div class="card ${item.status == 2 ? "alert-success" : (Date.now() > item.data_vencimento_ms ? "alert-danger" : (item.data_vencimento_ms - Date.now() > 4000 * 3600 ? "" : "alert-warning"))}">
        <div class="row d-flex align-items-center justify-content-center">
          <div class="card-body col-md-7 text-center">
          <h5>${item.item_name}</h5>
              <h6>${item.name}</h6>
          </div>
          <div class="card-body col-md-5 text-center">
              <div class="h-100" id="date${item.solicitacao_id}" date="${item.data_vencimento_ms}">
              ${item.status == 2 ? "Finalizado" : (formatDate(item.data_vencimento_ms) + (Date.now() > item.data_vencimento_ms ? "atrasados" : "restantes"))}
              </div>
          </div>
        </div>
      </div>
      <div class="modal fade" tabindex="-1" id="mod${item.solicitacao_id}">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header pb-2">
              <h5 class="modal-title fw-bold">${item.item_name}<br><small class="text-secondary">${item.name}</small></h5>
              <button type="button" class="btn-close align-self-lg-start" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body pt-1">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                <div class="d-flex flex-column">
                  <div class="fw-bold w-100">Descrição:</div>
                  <div class="my-2 text-center">${item.descricao}</div>
                </div>
                </li>
                <li class="list-group-item">
                <div class="d-flex">
                  <div class="fw-bold">Nome completo:</div>
                  <div class="ms-auto">${item.nome}</div>
                </div>
                </li>
                <li class="list-group-item">
                <div class="d-flex">
                  <div class="fw-bold">E-mail:</div>
                  <div class="ms-auto">${item.email}</div>
                </div>
                </li>
                <li class="list-group-item">
                <div class="d-flex">
                  <div class="fw-bold">Empresa:</div>
                  <div class="ms-auto">${item.empresa}</div>
                </div>
                </li>
                <li class="list-group-item">
                <div class="d-flex">
                  <div class="fw-bold">Cargo:</div>
                  <div class="ms-auto">${item.cargo}</div>
                </div>
                </li>
                <li class="list-group-item">
                <div class="d-flex">
                  <div class="fw-bold">Telefone:</div>
                  <div class="ms-auto">${item.telefone}</div>
                </div>
                </li>`;
                if (item.area) content += `
                <li class="list-group-item">
                <div class="d-flex">
                  <div class="fw-bold">Área:</div>
                  <div class="ms-auto">${item.area}</div>
                </div>
                </li>`
                if (item.anexo) content += `
                <li class="list-group-item">
                <div class="d-flex">
                  <div class="fw-bold">Anexo:</div>
                  <div class="ms-auto">${item.anexo}</div>
                </div>
                </li>`
                content += `
                <li class="list-group-item">
                <div class="d-flex">
                  <div class="fw-bold">Solicitação feita em:</div>
                  <div class="ms-auto">${item.data_solicitacao}</div>
                </div>
                </li>
                <li class="list-group-item">
                <div class="d-flex">
                  <div class="fw-bold">Vencimento em:</div>
                  <div class="ms-auto">${item.data_vencimento}</div>
                </div>
                </li>
              </ul>
            </div>
            <div class="modal-footer border-top-0 mt-2 d-flex justify-content-between">`
            /*if (item.status == 0) content += `
              <div class="p-1"><button type="button" class="btn btn-primary" data-bs-dismiss="modal" name="toProgress" target="${item.solicitacao_id}">Em Progresso</button></div>
              <div class="p-1 ms-auto"><button type="button" class="btn btn-primary" data-bs-dismiss="modal" name="toComplete" target="${item.solicitacao_id}">Completo</button></div>`
            else if (item.status == 1) content += `
              <div class="p-1"><button type="button" class="btn btn-primary" data-bs-dismiss="modal" name="toTodo" target="${item.solicitacao_id}">To-Do</button></div>
              <div class="p-1 ms-auto"><button type="button" class="btn btn-primary" data-bs-dismiss="modal" name="toComplete" target="${item.solicitacao_id}">Completo</button></div>`
            else if (item.status == 2) content += `
              <div class="p-1"><button type="button" class="btn btn-primary" data-bs-dismiss="modal" name="toTodo" target="${item.solicitacao_id}">To-Do</button></div>
              <div class="p-1 ms-auto"><button type="button" class="btn btn-primary" data-bs-dismiss="modal" name="toProgress" target="${item.solicitacao_id}">Em Progresso</button></div>*/
            content += `
            <div class="p-1"><button id="todoBtn${item.solicitacao_id}" ${item.status == 2 ? `style="visibility: hidden;"` : ""} type="button" class="btn btn-primary" data-bs-dismiss="modal" name="toTodo" target="${item.solicitacao_id}">To-Do</button></div>
            <div class="p-1"><button id="progBtn${item.solicitacao_id}" ${item.status == 2 ? `style="visibility: hidden;"` : ""} type="button" class="btn btn-primary" data-bs-dismiss="modal" name="toProgress" target="${item.solicitacao_id}">Em Progresso</button></div>
            <div class="p-1"><button id="compBtn${item.solicitacao_id}" ${item.status == 2 ? `style="visibility: hidden;"` : ""} type="button" class="btn btn-primary" data-bs-dismiss="modal" name="toComplete" target="${item.solicitacao_id}">Completo</button></div>
            </div>
          </div>
      </div>
    </div>
    </div>
    `;

    switch (item.status)
    {
      case 0: todo.innerHTML      += content; break;
      case 1: progress.innerHTML  += content; break;
      case 2: complete.innerHTML  += content; break;
    }

  });

  setInterval(() => {
    dados.forEach(item => {
      let status = $(`#${item.solicitacao_id}`).attr('status');
      if (status != 2) {
        $(`#date${item.solicitacao_id}`).text(`${formatDate(item.data_vencimento_ms) + (Date.now() > item.data_vencimento_ms ? "atrasados" : "restantes")}`);
        if (item.data_vencimento_ms - Date.now() < 4000 * 3600)
          $(`#${item.solicitacao_id}`).children('.card').addClass('alert-warning');
        else if (item.data_vencimento_ms <= Date.now())
          $(`#${item.solicitacao_id}`).children('.card').addClass('alert-danger');
      }
    });
  }, 60000);

  $(".card .card").hover(function () {
    this.style = "cursor: pointer; background-color: #e7f1ff;"
  },
  function () {
    this.style = "background-color: none";
  });

  $(".card .card").on('click', function () {
    $(this).siblings('.modal').modal('show');
  });

  $(".modal-footer button").on('click', function () {
    let id = this.attributes.target.value;
    let target = $(`#${id}`);
    switch (this.attributes.name.value)
    {
      case "toTodo": 
        $("#todo").append(target); 
        target.attr("status", 0);
        break;
      case "toProgress": 
        $("#progress").append(target);
        target.attr("status", 1);
        break;
      case "toComplete": 
        $("#complete").append(target); 
        target.attr("status", 2);
        target.find('.modal-footer').css('visibility', 'hidden');
        target.children('.card').removeClass('alert-danger alert-warning').addClass('alert-success');
        $(`#date${id}`).text('Finalizado');
        break;
      default: console.log(this.attributes.name.value); break;
    }
    
    let status = {
      "status": target.attr("status")
    };

    let nomeItem = target.find('.card-body h5').html();
    let nomeSubItem = target.find('.card-body h6').html();

    fetch(`http://localhost:3000/solicitacoes/${id}/${nomeItem}/${nomeSubItem}`, {
      method: "PUT",
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(status)
    });
  });

});
