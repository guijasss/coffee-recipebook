import React from 'react';

export default function StepsTable({ steps }) {
  return (
    <section className="steps-section">
      <h3 className="steps-section__title">Etapas de preparo</h3>
      <div className="steps-list">
        {steps.map((step, i) => (
          <div key={i} className="step-row">
            <div className="step-row__number">{i + 1}</div>
            <div className="step-row__content">
              <div className="step-row__label">{step.label}</div>
              {step.note && <div className="step-row__note">{step.note}</div>}
              {step.duration && <div className="step-row__duration">⏱ {step.duration}</div>}
            </div>
            <div className="step-row__values">
              {step.waterAdd > 0 && (
                <div className="step-row__water-add">+{step.waterAdd} ml</div>
              )}
              {step.cumulative > 0 && (
                <div className="step-row__cumulative">Total: {step.cumulative} ml</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
