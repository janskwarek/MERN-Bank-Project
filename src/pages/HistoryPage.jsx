import React, { useState } from "react";
import "../css/main.css";

const allTransactions = [
  {
    id: 1,
    title: "Wynagrodzenie",
    desc: "Przelew przychodzący • Firma XYZ Sp. z o.o.",
    amount: 8500.0,
    date: "12.03.2026",
    type: "income",
    icon: "💼",
  },
  {
    id: 2,
    title: "Biedronka",
    desc: "Płatność kartą • Sklep spożywczy",
    amount: -134.5,
    date: "12.03.2026",
    type: "expense",
    icon: "🛒",
  },
  {
    id: 3,
    title: "Przelew do Jana K.",
    desc: "Przelew wychodzący • Tytuł: pożyczka",
    amount: -500.0,
    date: "11.03.2026",
    type: "expense",
    icon: "📤",
  },
  {
    id: 4,
    title: "Zwrot zakupów",
    desc: "Przelew przychodzący • Zalando",
    amount: 89.99,
    date: "11.03.2026",
    type: "income",
    icon: "↩️",
  },
  {
    id: 5,
    title: "Allegro",
    desc: "Płatność kartą • Zakupy online",
    amount: -249.0,
    date: "10.03.2026",
    type: "expense",
    icon: "📦",
  },
  {
    id: 6,
    title: "Czynsz — marzec",
    desc: "Przelew wychodzący • Spółdzielnia",
    amount: -1400.0,
    date: "10.03.2026",
    type: "expense",
    icon: "🏠",
  },
  {
    id: 7,
    title: "Dywidenda",
    desc: "Przelew przychodzący • Biuro maklerskie",
    amount: 312.5,
    date: "08.03.2026",
    type: "income",
    icon: "📈",
  },
  {
    id: 8,
    title: "Orlen — paliwo",
    desc: "Płatność kartą • Stacja benzynowa",
    amount: -320.0,
    date: "07.03.2026",
    type: "expense",
    icon: "⛽",
  },
];

const formatAmount = (amount) => {
  const abs = Math.abs(amount).toFixed(2).replace(".", ",");
  const parts = abs.split(",");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return (amount > 0 ? "+" : "-") + " " + parts.join(",") + " zł";
};

const HistoryPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = allTransactions.filter((tx) => {
    if (activeFilter === "income") return tx.type === "income";
    if (activeFilter === "expense") return tx.type === "expense";
    return true;
  });

  const totalIncome = allTransactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = allTransactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);

  const balance = totalIncome - totalExpense;

  return (
    <div>
      <div className="page-header">
        <h1>Historia transakcji</h1>
        <p>Marzec 2026 · Konto główne •••• 4821</p>
      </div>

      {/* Podsumowanie miesiąca */}
      <div className="history-summary">
        <div className="summary-card">
          <p>Wpływy</p>
          <h3 className="income-value">
            {formatAmount(totalIncome).replace("+ ", "+")}
          </h3>
        </div>
        <div className="summary-card">
          <p>Wydatki</p>
          <h3 className="expense-value">- {totalExpense.toFixed(2).replace(".", ",")} zł</h3>
        </div>
        <div className="summary-card">
          <p>Saldo miesiąca</p>
          <h3 className="balance-value">
            {balance > 0 ? "+" : ""}
            {balance.toFixed(2).replace(".", ",")} zł
          </h3>
        </div>
      </div>

      {/* Filtry */}
      <div className="filter-tabs">
        <button
          className={`filter-tab ${activeFilter === "all" ? "active" : ""}`}
          onClick={() => setActiveFilter("all")}
        >
          Wszystkie
        </button>
        <button
          className={`filter-tab ${activeFilter === "income" ? "active" : ""}`}
          onClick={() => setActiveFilter("income")}
        >
          Wpływy
        </button>
        <button
          className={`filter-tab ${
            activeFilter === "expense" ? "active" : ""
          }`}
          onClick={() => setActiveFilter("expense")}
        >
          Wydatki
        </button>
      </div>

      {/* Lista transakcji */}
      <div className="page-card">
        <div className="transaction-list">
          {filtered.length === 0 ? (
            <p style={{ textAlign: "center", padding: "2rem" }}>
              Brak transakcji w tej kategorii.
            </p>
          ) : (
            filtered.map((tx) => (
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
                    {formatAmount(tx.amount)}
                  </span>
                  <span className="transaction-date">{tx.date}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
