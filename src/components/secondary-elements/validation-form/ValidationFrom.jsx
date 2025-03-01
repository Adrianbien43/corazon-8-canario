import React, { useState } from 'react';
import './ValidationFrom.css';
import { useTranslation } from 'react-i18next';

const ValidationFrom = () => {
  const { t } = useTranslation();
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
        if (!value.trim()) error = t("validationForm.errors.nameRequired");
        break;
      case 'email':
        if (!value.trim()) error = t("validationForm.errors.emailRequired");
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = t("validationForm.errors.emailInvalid");
        break;
      case 'password':
        if (!value.trim()) error = t("validationForm.errors.passwordRequired");
        else if (value.length < 6) error = t("validationForm.errors.passwordMinLength");
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
      alert(t("validationForm.successMessage"));
    }
  };

  return (
    <div className="form-container">
      <h2 id="form-title">{t("validationForm.title")}</h2>
      <form onSubmit={handleSubmit} aria-labelledby="form-title" noValidate>
        <div className="form-group">
          <label htmlFor="name">{t("validationForm.labels.name")}</label>
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
          <label htmlFor="email">{t("validationForm.labels.email")}</label>
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
          <label htmlFor="password">{t("validationForm.labels.password")}</label>
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
          {t("validationForm.submitButton")}
        </button>
      </form>
    </div>
  );
};

export default ValidationFrom;