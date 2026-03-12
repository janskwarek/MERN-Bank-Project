// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/forms.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Łukasz, tu pobierasz info z formularza do logowania:
    // try {
    //   const response = await axios.post('http://localhost:5000/api/login', formData);
    //   localStorage.setItem('token', response.data.token);
    //   navigate('/dashboard');
    // } catch (err) { ... }

    // tymczasowe logowanie do testów frontendu
    if (formData.email === "test@test" && formData.password === "12345") {
      console.log("Zalogowano pomyślnie!");
      localStorage.setItem("token", "sztuczny_token_jwt_do_testow");
      navigate("/dashboard");
    } else {
      setError("Nieprawidłowy email lub hasło.");
    }
  };

  return (
    <div className="login-container">
      <h2>Bank JL</h2>
      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Email</label>
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
          <label>Hasło</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Wpisz hasło"
          />
        </div>

        <button type="submit" className="login-btn">
          Zaloguj się
        </button>
      </form>

      <p>
        Nie masz konta? <a href="/register">Zarejestruj się</a>
      </p>
    </div>
  );
};

export default Login;
