const ButonForm = ({ textButton }) => {
  return (
    <button
      type="submit"
      className="w-full bg-purple-800 text-white p-2 rounded-xl hover:bg-purple-400 focus:outline-none focus:shadow-outline-purple active:bg-purple-700 mt-8 lg:w-1/3 lg:px-8 lg:m-5"
    >
      {textButton}
    </button>
  )
}
export default ButonForm