const express = require('express')

module.exports = function(server) {
    
    //url base para todas as rotas
    const router = express.Router()
    server.use('/api', router)

    //rotas relacionadas ao ciclo de pagamento
    const  BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}