import '../style/RequiredFields.css';
import {input_labels} from '../constants';
function RequiredFields({current_fields, modifyParameters, custom_parameters}){
    const input_fields = Object.keys(current_fields).map((elem)=>{
        return(
            <div className="div_column div_organize_input" key={elem}>
                <p className="p_label">{input_labels[elem]}</p>
                <input className={`input ${current_fields[elem]}`} type={current_fields[elem]} 
                value={custom_parameters[elem]} onChange={(event)=>modifyParameters(event, elem)}
                min="1" max={(elem==="max_tokens")?"100":"5"}/>
            </div>   
        )     
    })
    let ready_components = [];
    for (let i=0; i<input_fields.length; i+=2){
        if((i+1)===input_fields.length){
            ready_components.push(input_fields[i])
        }else{
            ready_components.push(
                <div className="div_row div_organize_inputs" key={i}>
                    {input_fields[i]}
                    {input_fields[i+1]}
                </div>
            )
        }
    }
    return(
        <>
            {ready_components}
        </>
    )
}

export default RequiredFields;