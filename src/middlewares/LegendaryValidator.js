/*const { json } = require("express/lib/response");

function legendaryValidator(request, response) {

    const { name } = request.body; 
    if(!name) {
        return response.status(400).json({ error: "nome é obrigatório"})

    }

    next();
    
}
module.exports = legendaryValidator; */
// const { body } = require('express-validator');

//const legendaryValidatorList = {}



const yup = require('yup');

async function legendaryValidator(request, response, next) {
  const schema =  yup.object().shape({
    name: yup.string().strict().required('Name é obrigatório').typeError('Deve ser string'),
    type: yup.string().required('Type é obrigatório'),
    description: yup.string().required().min(10)
  })

 /*  if(! (await schema.isValidSync(request.body))) {
    return response.status(400).json({error: 'Não foi possível cadastrar o legendary, verifique os campos obrigatório!'})
  } */
  // outra forma de validar

  await schema.validate(request.body).catch(err => {

  
return response.status(400).json({
    error : err.errors
})
  })
  next();
}

module.exports = legendaryValidator;
