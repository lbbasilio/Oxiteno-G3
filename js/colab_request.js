$(document).ready(function () {
  var sla = localStorage.getItem("sla");
  var title = localStorage.getItem("title");
  var manager = localStorage.getItem("Gerencia");
  var proces = localStorage.getItem("Processo");
  var description = localStorage.getItem("Descrição");

  var todo = document.querySelector("#to-do");

  ///////
  var div = document.createElement("div");

  //$(todo).addClass('row border border-danger rounded-3')
  todo.innerHTML += `
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
          
            `;

  
  $("button").on("click", function (event) {
    var parent_id = $(this).parent().parent().attr("id");

    var id = document.getElementById(parent_id);

    var progress = document.getElementById("progress");
    var complete = document.getElementById("complete");



   


    if (id.getAttribute("name") == "progress") {
      var btn = document.createElement('button')

      btn.value = excluir
      btn.setAttribute('id','excluir')
      btn.addClass('.btn btn-danger')
      complete.appendChild(id);
      return;
    }

    if (id.getAttribute("name") != "progress") {
      id.setAttribute("name", "progress");
      progress.appendChild(id);
      
    }
  });
});
