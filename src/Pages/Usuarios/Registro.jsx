import React, { useState } from 'react';
 // Asegúrate de que el archivo CSS esté bien importado

const Registro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');  // Estado para mensaje de éxito

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para el registro (aquí podrías agregar una llamada a una API si fuera necesario)
    
    // Mensaje de éxito
    setSuccessMessage('¡Registro exitoso! Ahora puedes iniciar sesión.');

    // Limpia los campos del formulario
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10 p-4 shadow-lg rounded bg-white">
          <h2 className="text-center text-primary mb-4">Registrar Nueva Cuenta</h2>

          {/* Mostrar mensaje de éxito si existe */}
          {successMessage && (
            <div className="alert alert-success" role="alert">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo Electrónico</label>
              <input
                type="email"
                className="form-control input-custom"
                id="email"
                placeholder="Ingrese su correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control input-custom"
                id="password"
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña</label>
              <input
                type="password"
                className="form-control input-custom"
                id="confirmPassword"
                placeholder="Confirme su contraseña"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-custom">Registrar</button>
            <p className="mt-3 text-center">¿Ya tienes cuenta? <a href="/IngresarU" className="text-primary">Inicia sesión aquí</a></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registro;