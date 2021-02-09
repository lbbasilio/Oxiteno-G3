    $(document).ready(async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const item_name = urlParams.get('item_name');
        const subitem_name = urlParams.get('subitem_name');
        const subitem_id = urlParams.get('subitem_id');

        $('input#inputItem').val(item_name);
        $('input#inputSubItem').val(subitem_name);
        
        let dados = await fetch(`http://localhost:3000/catalogo_solicitacoes/`, {
            method: "GET" ,
            mode: "cors",
            })
            .then(r => r.json())
            .then(data => {
              return data;
            })
            .catch(e => console.log(e));

            let dado = dados.filter((dado)=>{
                if (dado.subitem_id == subitem_id) return dado;
            })
            console.log(dado);

            $('#inputDescribe').attr('placeholder', (dado[0].prerequisito ? dado[0].prerequisito : ''));

            let sla = miliseconds(dado[0].sla, 0, 0)
            const data_solicitacao = Date.now();
            const data_vencimento = data_solicitacao + sla;

            $('button#createSolicitation').on('click', async () => {
                event.preventDefault();

                if ($('#inputName').val() == '') return $('#inputName').focus();
                if ($('#inputEmail').val() == '') return $('#inputEmail').focus();
                if ($('#inputEnterprise').val() == '') return $('#inputEnterprise').focus();
                if ($('#inputPosition').val() == '') return $('#inputPosition').focus();
                if ($('#inputPhone').val() == '') return $('#inputPhone').focus();
                if ($('#inputDescribe').val() == '') return $('#inputDescribe').focus();
                
                let solicitation = {
                "subitem_id": subitem_id,
                "nome": $('#inputName').val(),
                "email": $('#inputEmail').val(),
                "empresa": $('#inputEnterprise').val(),
                "cargo": $('#inputPosition').val(),
                "telefone": $('#inputPhone').val(),
                "area": $('#inputArea').val() != 'Selecione a área relacionada' ? $('#inputArea').val() : null,
                "descricao": $('#inputDescribe').val(),
                "anexo": $('#inputFile').val() ? $('#inputFile').val() : null,
                "data_solicitacao": data_solicitacao,
                "data_vencimento": data_vencimento,
                };

                fetch(`http://localhost:3000/solicitacoes/${item_name}/${subitem_name}`, {
                method: "POST",
                headers: {
                'Content-type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify(solicitation)
                })
                .then(() => {
                    $('#modal-alert').modal('show');
                })
                .catch(e => console.log(e));
        })

        function miliseconds(hrs, min, sec) {
        return ((hrs * 60 * 60 + min * 60 + sec) * 1000);
        }
    })