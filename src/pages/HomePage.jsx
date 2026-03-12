import React from "react";
import { Link } from "react-router-dom";
import "../css/main.css";

const mockTransactions = [
  {
    id: 1,
    title: "Wynagrodzenie",
    desc: "Przelew przychodzący",
    amount: "+8 500,00 zł",
    date: "Dziś, 09:14",
    type: "income",
    icon: "💼",
  },
  {
    id: 2,
    title: "Biedronka",
    desc: "Płatność kartą",
    amount: "-134,50 zł",
    date: "Dziś, 08:32",
    type: "expense",
    icon: "🛒",
  },
  {
    id: 3,
    title: "Przelew do Jana K.",
    desc: "Przelew wychodzący",
    amount: "-500,00 zł",
    date: "Wczoraj, 18:05",
    type: "expense",
    icon: "📤",
  },
  {
    id: 4,
    title: "Zwrot zakupów",
    desc: "Przelew przychodzący",
    amount: "+89,99 zł",
    date: "Wczoraj, 11:20",
    type: "income",
    icon: "↩️",
  },
];

const HomePage = () => {
  return (
    <div>
      {/* Panel powitalny z saldem */}
      <div className="dashboard-welcome">
        <div className="welcome-text">
          <p>Witaj ponownie,</p>
          <h2>Jan Kowalski</h2>
        </div>
        <div className="balance-area">
          <p className="balance-label">Dostępne środki</p>
          <div className="balance-amount">
            <span>PLN</span>
            12 340,50
          </div>
          <p className="balance-account">•••• •••• •••• 4821</p>
        </div>
      </div>

      {/* Karty statystyk */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon income">💹</div>
          <div className="stat-info">
            <p>Wpływy (marzec)</p>
            <h3>8 589,99 zł</h3>
            <p className="stat-change positive">↑ +12% vs poprzedni</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon expense">📉</div>
          <div className="stat-info">
            <p>Wydatki (marzec)</p>
            <h3>3 245,20 zł</h3>
            <p className="stat-change negative">↑ +8% vs poprzedni</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon savings">🏦</div>
          <div className="stat-info">
            <p>Oszczędności</p>
            <h3>24 100,00 zł</h3>
            <p className="stat-change positive">↑ Cel: 30 000 zł</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon pending">⏳</div>
          <div className="stat-info">
            <p>Oczekujące</p>
            <h3>2</h3>
            <p className="stat-change">Transakcje do weryfikacji</p>
          </div>
        </div>
      </div>

      {/* Szybkie akcje */}
      <div className="quick-actions">
        <p className="section-title">Szybkie akcje</p>
        <div className="actions-row">
          <button className="action-btn">
            <span>💸</span>
            <span>Przelew</span>
          </button>
          <button className="action-btn">
            <span>📥</span>
            <span>Wpłać</span>
          </button>
          <button className="action-btn">
            <span>📤</span>
            <span>Wypłać</span>
          </button>
          <button className="action-btn">
            <span>📄</span>
            <span>Wyciąg</span>
          </button>
          <button className="action-btn">
            <span>🔔</span>
            <span>Alerty</span>
          </button>
        </div>
      </div>

      {/* Ostatnie transakcje */}
      <div className="recent-transactions">
        <div className="section-header">
          <p className="section-title" style={{ margin: 0 }}>
            Ostatnie transakcje
          </p>
          <Link to="/history">Zobacz wszystkie →</Link>
        </div>

        <div className="transaction-list">
          {mockTransactions.map((tx) => (
            <div className="transaction-item" key={tx.id}>
              <div className="transaction-left">
                <div
                  className={`transaction-icon ${
                    tx.type === "income" ? "income-icon" : "expense-icon"
                  }`}
                >
                  {tx.icon}
                </div>
                <div className="transaction-details">
                  <h4>{tx.title}</h4>
                  <p>{tx.desc}</p>
                </div>
              </div>
              <div className="transaction-right">
                <span
                  className={
                    tx.type === "income" ? "amount-plus" : "amount-minus"
                  }
                >
                  {tx.amount}
                </span>
                <span className="transaction-date">{tx.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
