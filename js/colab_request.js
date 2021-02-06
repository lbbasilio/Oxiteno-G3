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
      
  console.log(dados);
  dados.forEach(item => {
    let content = 
    `
    <div id="${item.solicitacao_id}" status="${item.status}">
      <div class="card">
        <div class="row">
          <div class="card-body col-md-7">
          <h5>${item.item_name}</h5>
              <h6>${item.name}</h6>
          </div>
          <div class="card-body col-md-5">
              <div class="text-center">${item.data_solicitacao}</div>
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
            <div class="p-1"><button id="todoBtn${item.solicitacao_id}" type="button" class="btn btn-primary" data-bs-dismiss="modal" name="toTodo" target="${item.solicitacao_id}">To-Do</button></div>
            <div class="p-1"><button id="progBtn${item.solicitacao_id}" type="button" class="btn btn-primary" data-bs-dismiss="modal" name="toProgress" target="${item.solicitacao_id}">Em Progresso</button></div>
            <div class="p-1"><button id="compBtn${item.solicitacao_id}" type="button" class="btn btn-primary" data-bs-dismiss="modal" name="toComplete" target="${item.solicitacao_id}">Completo</button></div>
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

  $(".card .card").hover(function () {
    this.style = "cursor: pointer; background-color: #e7f1ff;"
  },
  function () {
    this.style = "background-color: none";
  });

  $(".card .card").on('click', function () {
    $(".modal").modal('show');
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
        break;
      default: console.log(this.attributes.name.value); break;
    }
    
    let status = {
      "status": target.attr("status")
    };

    fetch(`http://localhost:3000/solicitacoes/${id}`, {
      method: "PUT",
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(status)
    });
  });

/*<div class="row justify-content-center">
        <div class="col-sm-3">
            <div class="card">
                <div class="card-body">
                <h5>Restaurante</h5>
                    <h6>Elogios</h6>
                </div>
                <div class="card-footer border-top-0 bg-transparent">
                    <div class="d-flex">
                        <div class="p-2">SLA</div>
                        <div class="p-2 ms-auto">Prioridade</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header pb-2">
              <h5 class="modal-title fw-bold">Restaurante<br><small class="text-secondary">Elogios</small></h5>
              <button type="button" class="btn-close align-self-lg-start" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body pt-1">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                <div class="d-flex flex-column">
                  <div class="fw-bold w-100">Descrição:</div>
                  <div class="my-2 text-justify">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</div>
                </div>
                </li>
                <li class="list-group-item">
                <div class="d-flex">
                  <div class="fw-bold">Nome:</div>
                  <div class="ms-auto">Luca Beraldo Basílio</div>
                </div>
                </li>
                <li class="list-group-item">
                <div class="d-flex">
                  <div class="fw-bold">E-mail:</div>
                  <div class="ms-auto">luca@mail.com</div>
                </div>
                </li>
                <li class="list-group-item">
                <div class="d-flex">
                  <div class="fw-bold">Empresa:</div>
                  <div class="ms-auto">Microsoft</div>
                </div>
                </li>
                <li class="list-group-item">
                <div class="d-flex">
                  <div class="fw-bold">Cargo:</div>
                  <div class="ms-auto">Gerente de marketing</div>
                </div>
                </li>
              </ul>
            </div>
            <div class="modal-footer border-top-0 mt-2 d-flex">
              <div class="p-1"><button type="button" class="btn btn-primary" data-bs-dismiss="modal">Em Progresso</button></div>
              <div class="p-1 ms-auto"><button type="button" class="btn btn-primary" data-bs-dismiss="modal">Completo</button></div>
            </div>
          </div>
        </div>
      </div>*/
  ///////
  // var div = document.createElement("div");

  //$(todo).addClass('row border border-danger rounded-3')
  /*todo.innerHTML += `
  <div class="card draggable shadow-sm" id="cd1" draggable="true" ondragstart="drag(event)">
  <div class="card-body p-2">
      <p>
        <label for='sla'>SLA</label><span id='sla'>${"sla"}</span>
        <label for='title'>Titulo</label><span id='title'>${"title"}</span>
      </p>
      <p>
      <label for='manager'>Gerencia:</labek><span id='manager'>${"manager"}</span>
      <label for='proces'>Processo:</label><span id='proces'>${"proces"}</span>
      </p>
      <label for='description'>Descrição:</label><span id='description'>${"description"}</span>
      <label for='status'>Status:</label><span id='status'>pendente</span></br>
      <button class="btn btn-primary btn-sm" id="btn">View</button>
  </div>
</div>
<div class="dropzone rounded" ondrop="drop(event)" ondragover="allowDrop(event)" ondragleave="clearDrop(event)"> &nbsp; </div>

          
            `;
  todo.innerHTML += `
  <div class="card draggable shadow-sm" id="cd2" draggable="true" ondragstart="drag(event)">
  <div class="card-body p-2">
      <p>
        <label for='sla'>SLA</label><span id='sla'>${"sla"}</span>
        <label for='title'>Titulo</label><span id='title'>${"title"}</span>
      </p>
      <p>
      <label for='manager'>Gerencia:</labek><span id='manager'>${"manager"}</span>
      <label for='proces'>Processo:</label><span id='proces'>${"proces"}</span>
      </p>
      <label for='description'>Descrição:</label><span id='description'>${"description"}</span>
      <label for='status'>Status:</label><span id='status'>pendente</span></br>
      <button class="btn btn-primary btn-sm" id="btn2">View</button>
  </div>
</div>
<div class="dropzone rounded" ondrop="drop(event)" ondragover="allowDrop(event)" ondragleave="clearDrop(event)"> &nbsp; </div>
          
            `;
  todo.innerHTML += `
  <div class="card draggable shadow-sm" id="cd4" draggable="true" ondragstart="drag(event)">
  <div class="card-body p-2">
      <p>
        <label for='sla'>SLA</label><span id='sla'>${"sla"}</span>
        <label for='title'>Titulo</label><span id='title'>${"title"}</span>
      </p>
      <p>
      <label for='manager'>Gerencia:</labek><span id='manager'>${"manager"}</span>
      <label for='proces'>Processo:</label><span id='proces'>${"proces"}</span>
      </p>
      <label for='description'>Descrição:</label><span id='description'>${"description"}</span>
      <label for='status'>Status:</label><span id='status'>pendente</span></br>
      <button class="btn btn-primary btn-sm" id="btn2">View</button>
  </div>
</div>
<div class="dropzone rounded" ondrop="drop(event)" ondragover="allowDrop(event)" ondragleave="clearDrop(event)"> &nbsp; </div>
          
            `;
  todo.innerHTML += `
  <div class="card draggable shadow-sm" id="cd3" draggable="true" ondragstart="drag(event)">
  <div class="card-body p-2">
      <p>
        <label for='sla'>SLA</label><span id='sla'>${"sla"}</span>
        <label for='title'>Titulo</label><span id='title'>${"title"}</span>
      </p>
      <p>
      <label for='manager'>Gerencia:</labek><span id='manager'>${"manager"}</span>
      <label for='proces'>Processo:</label><span id='proces'>${"proces"}</span>
      </p>
      <label for='description'>Descrição:</label><span id='description'>${"description"}</span>
      <label for='status'>Status:</label><span id='status'>pendente</span></br>
      <button class="btn btn-primary btn-sm" id="btn2">View</button>
  </div>
</div>
<div class="dropzone rounded" ondrop="drop(event)" ondragover="allowDrop(event)" ondragleave="clearDrop(event)"> &nbsp; </div>
          
            `;*/

  /*$("button").on("click", function (event) {
    var parent_id = $(this).parent().parent().attr("id");

    var id = document.getElementById(parent_id);
    

    if (id.getAttribute("name") == "progress") {
  
      complete.appendChild(id);
      return;
    }

    if (id.getAttribute("name") != "progress") {
      id.setAttribute("name", "progress");
      progress.appendChild(id);
      
    }
  });*/

  function createExpiredDate(date_solicitation, subitem_sla){

  }
});
