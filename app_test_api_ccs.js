const request = require('request')

const url = "https://was-h.bcnet.bcb.gov.br/bc_ccs/rest/v02-instituicoes-relacionamentos"

request.post(
    {
        uri: url, 
        form: {
            'cpfsCnpjs': '33333333333',
            'ativos': true,
            'consulta-nula': false
        },
        auth: {
            'user': 'deati.dejalma ',
            'pass': 'nopass20',
            'sendImmediately': true
        } 
    }, 
    (error, response) => {
        console.error(error)
        console.log(response)
    }
)
