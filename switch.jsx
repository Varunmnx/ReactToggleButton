let Switch =(props)=>{
  let [mode,changemode] = useState(false)
  console.log(mode)
  props.displayState(mode)
  return(
    <label className="switch">
      <input onClick={()=>changemode(!mode)} type="checkbox"/>
      <span className="slider">
      </span>
    </label>
  )
}
export default Switch
