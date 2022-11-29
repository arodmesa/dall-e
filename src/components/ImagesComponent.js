import { organizeComponents } from '../utilities_functions';
import '../style/ImagesComponent.css';
function ImagesComponent({results}){
    const images = results.map((elem, index)=>{
        return(
            <img className='generated_images' key={index} src={elem.url} alt={`Generated image #${index}`}></img>
        )
    })
    const resultComponents = organizeComponents(images, 'div_organize_image_component');
    return (
        <div className="div_column div_images">
            {resultComponents}
        </div>
    )  
}
export default ImagesComponent;