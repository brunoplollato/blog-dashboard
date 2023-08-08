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
    <div className="flex flex-col mb-4">
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
        borderRadius={6}
      />
    </div>
  );
}

export default CustomSwitch;
