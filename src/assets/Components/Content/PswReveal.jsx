import {forwardRef, useState} from "react";
    
    
    const PswReveal = forwardRef((props, ref)=>{
    const [mostrar, setMostrar] = useState(false);
        
        const inputColor =
            props.value && props.value.length >= 10 ? "border-success" : props.value && props.value.length >= 5 && props.value.length < 10 ? "border-warning" : props.value ? "border-danger" : ""

    return (
        <>
            <input type={mostrar ? "text" : "password"}
                ref={ref} name={props.name} id={props.id} value={props.value} onChange={props.onChange}
                placeholder="Ingresar su contraseña" maxLength={15} minLength={12} className={`form-control border border-5 border-end-0 rounded-start shadow-none ${inputColor}`}
            />
            <button type="button" class={`btn border border-start-0 rounded-end border-5 ${inputColor}`} ref={ref} onClick={() => setMostrar((x) => !x)}>
                <i className={`bi ${mostrar ? "bi-eye-slash" : "bi-eye"}`} />
            </button>
        </>
    )
        
})
export default PswReveal