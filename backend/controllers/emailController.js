const { request, response } = require('express');
const nodemailer = require('nodemailer');


const envioCorreo = (req= request, resp= response) => {
  let body = req.body;
  
  let config = nodemailer.createTransport({
    service: 'gmail',
    post: 587,
    auth: {
      user: 'leyundavid@gmail.com',
      pass: 'iruf rkni ooca uypd'
    }
  });

  const mailOptions = {
    from: 'Peluches Star',
    to: 'leyundavid@gmail.com',
    subject: 'Nuevo formulario peluches personalizados',
    text: `
      Nombre: ${body.nombre} ${body.apellido}
      Correo Electrónico: ${body.email}
      Provincia: ${body.provincia}
      Ciudad: ${body.ciudad}
      Teléfono: ${body.numeroTelefono}
      Dirección: ${body.direccion}
      Asunto: ${body.asunto}
    `
  };

  config.sendMail(mailOptions, function(error, result) {
    if (error) {
      return resp.json({
        ok:false,
        msg:error
      });
    }
    resp.json({
      ok:true,
      msg:result
    });
  });
  
};

module.exports = {
  envioCorreo
}