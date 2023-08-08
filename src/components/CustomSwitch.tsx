import Switch from 'react-switch';

function CustomSwitch({
  handleChange,
  checked,
  labelFor,
  labelText,
  hasLabel,
  name,
  id,
  isRequired,
}: CustomSwitch) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={labelFor}
        className={`${!hasLabel ? 'sr-only' : ''} text-md font-bold mb-2`}
      >
        {labelText}
      </label>
      <Switch
        onChange={handleChange}
        name={name}
        id={id}
        checked={checked}
        onColor="#22C55E"
        required={isRequired}
      />
    </div>
  );
}

export default CustomSwitch;
