import React, { useState } from 'react';
import './ValidationFrom.css';

const ValidationFrom = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'El nombre es obligatorio';
        break;
      case 'email':
        if (!value.trim()) error = 'El correo electrónico es obligatorio';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'El correo electrónico no es válido';
        break;
      case 'password':
        if (!value.trim()) error = 'La contraseña es obligatoria';
        else if (value.length < 6) error = 'La contraseña debe tener al menos 6 caracteres';
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validación en tiempo real
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors({ ...errors, [name]: error });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar todos los campos antes de enviar
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Formulario enviado:', formData);
      alert('Formulario enviado con éxito');
    }
  };

  return (
    <div className="form-container">
      <h2 id="form-title">Formulario de Registro</h2>
      <form onSubmit={handleSubmit} aria-labelledby="form-title" noValidate>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name ? 'input-error' : ''}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'error-name' : undefined}
            aria-required="true"
          />
          {errors.name && (
            <span id="error-name" className="error-message" aria-live="assertive">
              {errors.name}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email ? 'input-error' : ''}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'error-email' : undefined}
            aria-required="true"
          />
          {errors.email && (
            <span id="error-email" className="error-message" aria-live="assertive">
              {errors.email}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password ? 'input-error' : ''}
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? 'error-password' : undefined}
            aria-required="true"
          />
          {errors.password && (
            <span id="error-password" className="error-message" aria-live="assertive">
              {errors.password}
            </span>
          )}
        </div>

        <button type="submit" className="submit-button">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default ValidationFrom;