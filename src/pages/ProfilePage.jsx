import React from "react";
import "../css/main.css";

const ProfilePage = () => {
  return (
    <div>
      <div className="page-header">
        <h1>Twój profil</h1>
        <p>Zarządzaj danymi osobowymi i ustawieniami konta</p>
      </div>

      <div className="profile-grid">
        {/* Karta awatara */}
        <div className="profile-avatar-card">
          <div className="avatar-circle">JK</div>
          <h3>Jan Kowalski</h3>
          <p>jan.kowalski@email.com</p>
          <span className="profile-badge">Konto Premium</span>

          <div style={{ marginTop: "1.5rem", borderTop: "1px solid #e5e9f0", paddingTop: "1.2rem" }}>
            <div className="detail-row">
              <span className="detail-label">Nr klienta</span>
              <span className="detail-value">#00482196</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Konto od</span>
              <span className="detail-value">Styczeń 2022</span>
            </div>
          </div>
        </div>

        <div>
          {/* Dane osobowe */}
          <div className="profile-details-card">
            <h2>Dane osobowe</h2>

            <div className="detail-row">
              <span className="detail-label">Imię i nazwisko</span>
              <span className="detail-value">Jan Kowalski</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Data urodzenia</span>
              <span className="detail-value">15.04.1990</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">PESEL</span>
              <span className="detail-value">90041500000 (ukryty)</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Email</span>
              <span className="detail-value">jan.kowalski@email.com</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Telefon</span>
              <span className="detail-value">+48 •••••• 321</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Adres</span>
              <span className="detail-value">ul. Przykładowa 12, Warszawa</span>
            </div>
          </div>

          {/* Dane konta */}
          <div className="profile-details-card" style={{ marginTop: "1.2rem" }}>
            <h2>Dane konta bankowego</h2>
            <div className="detail-row">
              <span className="detail-label">Numer rachunku</span>
              <span className="detail-value">PL •••• •••• •••• •••• 4821</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Rodzaj konta</span>
              <span className="detail-value">Rachunek osobisty Premium</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Waluta</span>
              <span className="detail-value">PLN</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Limit dzienny</span>
              <span className="detail-value">50 000,00 zł</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bezpieczeństwo */}
      <div className="profile-security">
        <h2>Bezpieczeństwo konta</h2>

        <div className="security-item">
          <div className="security-info">
            <h4>Uwierzytelnianie dwuskładnikowe (2FA)</h4>
            <p>Dodatkowa weryfikacja przy każdym logowaniu</p>
          </div>
          <span className="security-status active">Aktywne</span>
        </div>

        <div className="security-item">
          <div className="security-info">
            <h4>Powiadomienia SMS</h4>
            <p>Alerty o transakcjach powyżej 100 zł</p>
          </div>
          <span className="security-status active">Aktywne</span>
        </div>

        <div className="security-item">
          <div className="security-info">
            <h4>Biometria</h4>
            <p>Logowanie odciskiem palca lub Face ID</p>
          </div>
          <span className="security-status inactive">Nieaktywne</span>
        </div>

        <div className="security-item">
          <div className="security-info">
            <h4>Ostatnie logowanie</h4>
            <p>12.03.2026 · 08:45 · Warszawa, PL</p>
          </div>
          <span className="security-status active">Zweryfikowane</span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
