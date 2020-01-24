const Participante = require('../models/Participante');
module.exports = {


   async index(request, response){
     const participantes = await Participante.find();
     return response.json(participantes);
   },

   async store(request, response){
        const { primeiroNome, ultimoNome, porcentagem } = (request.body);
        
        let participante = await Participante.findOne({ primeiroNome });

        if(!participante){
            const tranformaString = parseInt(porcentagem);
                
            participante = await Participante.create({
                primeiroNome,
                ultimoNome,
                porcentagem: tranformaString,
        
            })
            
        }
         return response.json(participante);

      
        
    }
};