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
                <div class="card-footer" style="border-top: none; background: transparent;">
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
    
    $(".accordion-body button").on('click', function () {
        window.location.href = `form_call.html?subitem_id=${this.attributes.subitem_id.value}&item_name=${this.attributes.item_name.value}&subitem_name=${this.attributes.subitem_name.value}`;
    });
});