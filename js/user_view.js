$(document).ready(async function(){

  let dados = await fetch('http://localhost:3000/solicitacoes', {
        method: "GET" ,
        mode: "cors",
      })
        .then(r => r.json())
        .then(data => {
           return data;
        })
        .catch(e => console.log(e));
      
  $("#filter").on('click', function () {
    event.preventDefault();

    let solicitations = document.getElementById('solicitacoes')
    solicitations.innerHTML = "";

    let email = $("#filterEmail").val();
    dados.filter(item => item.email == email).forEach(item => {
      let content = 
      `
      <div class="mb-3" id="${item.solicitacao_id}" status="${item.status}">
        <div class="card">
          <div class="row">
            <div class="card-body col-md-7">
              <div class="mx-3">
              <h5>${item.item_name}</h5>
                  <h6>${item.name}</h6>
              </div>
            </div>
            <div class="card-body col-md-5">
                <div class="text-center">${item.data_solicitacao}</div>
                <div class="text-center">${item.status == 0 ? "Em Aberto" : (item.status == 1 ? "Em Andamento" : "Encerrado")}</div>
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
                </ul>
              </div>
              <div class="modal-footer border-top-0 mt-2 d-flex">
            </div>
        </div>
      </div>
      `;

      solicitations.innerHTML += content;

      $("#solicitacoes .card").hover(function () {
        this.style = "cursor: pointer; background-color: #e7f1ff;"
      },
      function () {
        this.style = "background-color: none";
      });

      $("#solicitacoes .card").on('click', function () {
        $(this).siblings('.modal').modal('show');
      });
    });
  });
});