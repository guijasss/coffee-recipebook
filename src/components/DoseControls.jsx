import React from 'react';

export default function DoseControls({ waterMl, ratio, onWaterChange, onRatioChange }) {
  const waterMin = 50, waterMax = 800; // Limits for water slider
  const ratioMin = 4, ratioMax = 20;

  const waterProgress = Math.max(0, Math.min(100, ((waterMl - waterMin) / (waterMax - waterMin)) * 100));
  const ratioProgress = Math.max(0, Math.min(100, ((ratio - ratioMin) / (ratioMax - ratioMin)) * 100));

  return (
    <div className="controls">
      <div className="control-group">
        <label className="control-group__label" htmlFor="water-slider">
          Água Total
        </label>
        <div className="control-group__value">
          {waterMl}<span>ml</span>
        </div>
        <input
          id="water-slider"
          type="range"
          className="control-group__slider"
          min={waterMin}
          max={waterMax}
          step={5}
          value={waterMl}
          onChange={(e) => onWaterChange(parseFloat(e.target.value))}
          style={{ '--progress': `${waterProgress}%` }}
        />
      </div>

      <div className="control-group">
        <label className="control-group__label" htmlFor="ratio-slider">
          Proporção (1:X)
        </label>
        <div className="control-group__value">
          1:{ratio}
        </div>
        <input
          id="ratio-slider"
          type="range"
          className="control-group__slider"
          min={ratioMin}
          max={ratioMax}
          step={0.5}
          value={ratio}
          onChange={(e) => onRatioChange(parseFloat(e.target.value))}
          style={{ '--progress': `${ratioProgress}%` }}
        />
      </div>
    </div>
  );
}
