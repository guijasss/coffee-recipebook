import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <span className="header__icon" role="img" aria-label="coffee">☕</span>
      <h1 className="header__title">Coffee Recipe Book</h1>
      <p className="header__subtitle">Ajuste sua dose, escolha o método e prepare o café perfeito</p>
    </header>
  );
}
