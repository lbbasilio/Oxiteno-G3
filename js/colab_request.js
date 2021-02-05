$(document).ready(function(){

  var sla = localStorage.getItem('sla')
  var title = localStorage.getItem('title')
  var manager = localStorage.getItem('Gerencia')
  var proces = localStorage.getItem('Processo')
  var description = localStorage.getItem('Descrição')

  var todo = document.querySelector('#to-do') 
  

///////
  var div = document.createElement('div')
  

 //$(todo).addClass('row border border-danger rounded-3')
  todo.innerHTML += `
  <div class="card draggable shadow-sm" id="cd1" draggable="true" ondragstart="drag(event)">
  <div class="card-body p-2">
      <p>
        <label for='sla'>SLA</label><span id='sla'>${'sla'}</span>
        <label for='title'>Titulo</label><span id='title'>${'title'}</span>
      </p>
      <p>
      <label for='manager'>Gerencia:</labek><span id='manager'>${'manager'}</span>
      <label for='proces'>Processo:</label><span id='proces'>${'proces'}</span>
      </p>
      <label for='description'>Descrição:</label><span id='description'>${'description'}</span>
      <label for='status'>Status:</label><span id='status'>pendente</span></br>
      <button class="btn btn-primary btn-sm">View</button>
  </div>
</div>

          
            `
  todo.innerHTML += `
  <div class="card draggable shadow-sm" id="cd2" draggable="true" ondragstart="drag(event)">
  <div class="card-body p-2">
      <p>
        <label for='sla'>SLA</label><span id='sla'>${'sla'}</span>
        <label for='title'>Titulo</label><span id='title'>${'title'}</span>
      </p>
      <p>
      <label for='manager'>Gerencia:</labek><span id='manager'>${'manager'}</span>
      <label for='proces'>Processo:</label><span id='proces'>${'proces'}</span>
      </p>
      <label for='description'>Descrição:</label><span id='description'>${'description'}</span>
      <label for='status'>Status:</label><span id='status'>pendente</span></br>
      <button class="btn btn-primary btn-sm">View</button>
  </div>
</div>
          
            `
  
            // console.log(div)
         
})


const drag = (event) => {
  event.dataTransfer.setData("text/plain", event.target.id);
}

const allowDrop = (ev) => {
  ev.preventDefault();
  if (hasClass(ev.target,"dropzone")) {
    addClass(ev.target,"droppable");
  }
}

const clearDrop = (ev) => {
    removeClass(ev.target,"droppable");
}

const drop = (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  const element = document.querySelector(`#${data}`);
  try {
    // remove the spacer content from dropzone
    event.target.removeChild(event.target.firstChild);
    // add the draggable content
    event.target.appendChild(element);
    // remove the dropzone parent
    unwrap(event.target);
  } catch (error) {
    console.warn("can't move the item to the same place")
  }
  updateDropzones();
}

const updateDropzones = () => {
    /* after dropping, refresh the drop target areas
      so there is a dropzone after each item
      using jQuery here for simplicity */
    
    var dz = $('<div class="dropzone rounded" ondrop="drop(event)" ondragover="allowDrop(event)" ondragleave="clearDrop(event)"> &nbsp; </div>');
    
    // delete old dropzones
   // $('.dropzone').remove();

    // insert new dropdzone after each item   
    dz.insertAfter('.card.draggable');
    
    // insert new dropzone in any empty swimlanes
    $(".items:not(:has(.card.draggable))").append(dz);
};

// helpers
function hasClass(target, className) {
    return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
}

function addClass(ele,cls) {
  if (!hasClass(ele,cls)) ele.className += " "+cls;
}

function removeClass(ele,cls) {
  if (hasClass(ele,cls)) {
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    ele.className=ele.className.replace(reg,' ');
  }
}

function unwrap(node) {
    node.replaceWith(...node.childNodes);
}
