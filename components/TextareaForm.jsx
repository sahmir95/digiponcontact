const TextareaForm = ({ id, name}) =>{
    return (
        <textarea
        className="w-full p-2 border rounded-md mt-2 text-sm h-full"
        id={id}
        name={name}
        placeholder="توضیحات شکایت خود را وارد کنید"
      >
      </textarea>
    )
}
export default TextareaForm