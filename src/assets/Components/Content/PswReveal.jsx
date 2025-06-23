import {forwardRef, useState} from "react";
    
    
    const PswReveal = forwardRef((props, ref)=>{
    const [mostrar, setMostrar] = useState(false);
        
        const inputColor =
            props.value && props.value.length === 12 ? "border-success " : props.value ? "border-danger" : ""

    return (
        <>
            <input type={mostrar ? "text" : "password"}
                ref={ref} name={props.name} id={props.id} value={props.value} onChange={props.onChange}
                placeholder="Ingresar su contraseña" maxLength={12} minLength={12} className={`form-control border ${inputColor}`}
            />
            <button type="button" class="btn btn-dark rounded" onClick={() => setMostrar((x) => !x)}>
                <i className="bi bi-eye" />
            </button>
        </>
    )
        
})
export default PswReveal