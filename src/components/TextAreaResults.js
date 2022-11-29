import '../style/TextAreaResults.css';
import { organizeComponents } from '../utilities_functions';
function TextAreaResults({prompt_text, results}){
 const textareas = results.map((elem, index)=>{
    return (
        <textarea className="textarea_results" key={index} value={prompt_text + elem.text} readOnly></textarea>
    )
 })
 const resultComponents = organizeComponents(textareas, "div_organize_textarea_component")
 return (
    <div className="div_column div_textareas">
        {resultComponents}
    </div>
 )   
}
export default TextAreaResults; 