import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/main.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");

  const navigate = useNavigate();

  const checkPasswordStrength = (password) => {
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length >= 10 && hasNumber && hasSpecial) {
      setPasswordStrength("strong");
    } else if (password.length >= 7 && (hasNumber || hasSpecial)) {
      setPasswordStrength("medium");
    } else {
      setPasswordStrength("weak");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "password") {
      checkPasswordStrength(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Hasła nie są takie same");
      return;
    }

    if (passwordStrength === "Słabe") {
      setError("Hasło jest za słabe");
      return;
    }

    // Łukasz, z tad trzeba pobrac informacje na temat rejestracji
    // await fetch("http://localhost:5000/api/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // });

    // tymczasowe
    alert("Registered successfull.");
  };

  return (
    <div className="login-container">
      <h2>Zarejestruj się do Banku</h2>

      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label>Imie:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Wpisz imie"
          />
        </div>

        <div className="form-group">
          <label>Nazwisko:</label>
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            required
            placeholder="Wpisz nazwisko"
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Wpisz email"
          />
        </div>

        <div className="form-group">
          <label>Hasło:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Wpisz hasło"
          />

          {formData.password && (
            <p>
              Siła hasła: <b>{passwordStrength}</b>
            </p>
          )}

          <div className="password-strength">
            <div className={`strength-bar ${passwordStrength}`}></div>
          </div>

          <p className="strength-text">
            Siła hasła: <b>{passwordStrength}</b>
          </p>
        </div>

        <div className="form-group">
          <label>Potwierdź hasło:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            placeholder="Powtórz hasło"
          />

          {formData.confirmPassword &&
            formData.password !== formData.confirmPassword && (
              <p style={{ color: "red" }}>Hasła się nie zgadzają</p>
            )}
        </div>

        <button type="submit" className="login-btn">
          Zarejestruj
        </button>
      </form>

      <p>
        Posiadasz konto? <a href="/login">Zaloguj się</a>
      </p>
    </div>
  );
};

export default Register;
