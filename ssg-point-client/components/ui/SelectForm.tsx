
function SelectForm({selectName, selectValue}: { selectName: string, selectValue: string }) {
  return (
    <form >
      <select name={selectName} id={selectName}>
        <option value={selectValue}>{selectValue}</option>
        <option value={selectValue}>{selectValue}</option>
      </select>
    </form>
  )
}

export default SelectForm