import React from 'react';
import Switch from 'react-switch';

function CustomSwitch({
  handleChange,
  checked,
  labelFor,
  labelText,
  hasLabel,
}) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={labelFor}
        className={`${!hasLabel ? 'sr-only' : ''} text-md font-bold mb-2`}
      >
        {labelText}
      </label>
      <Switch onChange={handleChange} checked={checked} onColor="#22C55E" />
    </div>
  );
}

export default CustomSwitch;
