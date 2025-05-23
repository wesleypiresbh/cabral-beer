import React, { useState } from 'react';

export default function QuantitySelector({ variations, onChange }) {
  const [selected, setSelected] = useState(variations[0]);

  function handleChange(e) {
    const selectedVariation = variations.find(v => v.label === e.target.value);
    setSelected(selectedVariation);
    onChange(selectedVariation);
  }

  return (
    <select
      value={selected.label}
      onChange={handleChange}
      className="border rounded p-1"
      aria-label="Selecione a quantidade"
    >
      {variations.map(v => (
        <option key={v.label} value={v.label}>
          {v.label}
        </option>
      ))}
    </select>
  );
}

