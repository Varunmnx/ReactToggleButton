import "./switch.css"

let Switch =(props)=>{
  let [mode,changemode] = useState(false)

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
