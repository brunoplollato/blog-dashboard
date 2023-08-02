export default function FormAction({
  handleSubmit,
  type = 'Button',
  action = 'submit',
  text,
  color,
  icon,
  name,
}) {
  const classes = `group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-${color}-400 hover:bg-${color}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500 mt-5`;
  return (
    <>
      {action === 'submit' ? (
        <button
          type={action}
          className={classes}
          onSubmit={handleSubmit}
          name={name}
        >
          {icon} {text}
        </button>
      ) : (
        <>
          <button
            type={action}
            className={classes}
            onClick={handleSubmit}
            name={name}
          >
            {icon} {text}
          </button>
        </>
      )}
    </>
  );
}
