
function SsgCheckbox(
    {
        checked, 
        handler,
        checkId, 
        label, 
        name,
        size
    }
    : 
    {
        checked: boolean, 
        handler: Function, 
        label: string, 
        checkId: number,
        name: string,
        size?: number,
    }) {

  return (
    <div className="flex gap-5 items-center my-4">
        <input 
            id={label}
            name={name}
            type="checkbox" 
            checked={checked} 
            onChange={()=>handler(checkId, !checked)} 
            className={`border border-gray-300 rounded-[50%] appearance-none cursor-pointer checked:bg-black checked:border-transparent`}
            style={{ width: `${size??5}rem`, height: `${size??5}rem` }} 
        />
        <label htmlFor={label}>{label}</label>
    </div>
  )
}

export default SsgCheckbox