$(document).ready( async function(){




  let dados = await fetch('http://localhost:3000/solicitacoes', {
        method: "GET" ,
        mode: "cors",
      })
        .then(r => r.json())
        .then(data => {
           return data;
        })
        .catch(e => console.log(e));
      
  console.log(dados);
  const data  = [10,20,30,40,50,60,70,80,90]
  data.forEach(item => {
    let content = 
    `
      <div class="card text-white bg-success mb-3 col-12" id="${item.solicitacao_id}" status="${item.status}">
          <div class="card-body">
          <h5>${item.item_name}</h5>
              <h6>${item.name}</h6>
          </div>
          <div class="card-footer border-top-0 bg-transparent">
              <div class="d-flex">
                  <div class="p-2">SLA</div>
                  <div class="p-2 ms-auto">${item.solicitacao_id}</div>
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
            <div class="modal-footer border-top-0 mt-2 d-flex">`
            if (item.status == 0) content += `
              <div class="p-1"><button type="button" class="btn btn-primary" data-bs-dismiss="modal">Em Progresso</button></div>
              <div class="p-1 ms-auto"><button type="button" class="btn btn-primary" data-bs-dismiss="modal">Completo</button></div>`
            else if (item.status == 1) content += `
              <div class="p-1"><button type="button" class="btn btn-primary" data-bs-dismiss="modal">To-Do</button></div>
              <div class="p-1 ms-auto"><button type="button" class="btn btn-primary" data-bs-dismiss="modal">Completo</button></div>`
            else if (item.status == 2) content += `
              <div class="p-1"><button type="button" class="btn btn-primary" data-bs-dismiss="modal">To-Do</button></div>
              <div class="p-1 ms-auto"><button type="button" class="btn btn-primary" data-bs-dismiss="modal">Em Progresso</button></div>
            </div>
          </div>
      </div>
    </div>
    `;

    var solicitations = document.getElementById('solicitacoes')
    
    solicitations.innerHTML += content;
      

  });

  $(".card .card").hover(function () {
    this.style = "cursor: pointer; background-color: #e7f1ff;"
  },
  function () {
    this.style = "background-color: none";
  });

  $(".card .card").on('click', function () {
    $(".modal").modal('show');
    console.log(this)
  });
})