export default function FormExtra() {
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="h-3 w-3 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
        />
        <label
          htmlFor="remember-me"
          className="ml-1 block text-xs text-gray-900 cursor-pointer"
        >
          Remember me
        </label>
      </div>

      <div className="text-xs">
        <a href="#" className="text-xs text-indigo-600 hover:text-indigo-500">
          Forgot your password?
        </a>
      </div>
    </div>
  );
}
