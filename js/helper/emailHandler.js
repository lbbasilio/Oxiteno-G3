const nodemailer = require('nodemailer');

module.exports = (solicitation, itemName, subItemName, type) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'stenio.rapchan@gmail.com',
            pass: '10111997stenio'
        }
    });

    let mailOptions;
    if( type == 'Criado'){
        mailOptions = {
            from: 'Chamados Oxiteno <chamados@oxiteno.com>',
            to: solicitation.email,
            subject: `Notificação: Solicitação Registrada`,
            text: `
            A sua solicitação de ${itemName} - ${subItemName} foi registrada com sucesso.
            Tendo o prazo de solução de ${solicitation.sla} horas a partir do horario de atendimento "Segunda a sexta das 8:00 às 17:00".
            Acompanhe a sua solicitação pelo código ${solicitation.solicitacao_id} na sua página de "Consultar Solicitação'.
            
            Nós da Oxiteno agradecemos pela sua preferência!`
        };
    }
    else if ( type == 'Finalizado'){
        mailOptions = {
            from: 'Chamados Oxiteno <chamados@oxiteno.com>',
            to: solicitation.email,
            subject: `Notificação: Solicitação Encerrada`,
            text: `
            A sua solicitação de ${itemName} - ${subItemName} foi encerrada com sucesso.
            Código da solicitação: ${solicitation.solicitacao_id}.
            Acompanhe a sua solicitação pelo código ${solicitation.solicitacao_id} na sua página de "Consultar Solicitação'.
            
            A solicitação encerrada será removida automaticamente após 24 horas.
            
            Nós da Oxiteno agradecemos pela sua preferência!`
        };
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) console.log(error);
        else console.log('Email enviado: ' + info.response);
    });
}