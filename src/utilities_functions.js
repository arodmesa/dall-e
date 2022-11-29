import axios from "axios";
import { api_urls } from "./constants";
import TextAreaResults from "./components/TextAreaResults";
import ImagesComponent from "./components/ImagesComponent";
import ModerationComponent from "./components/ModerationComponent";
export async function getResults(parameters, prompt_text, selected_feature){
    let data={...parameters};
    data.prompt = prompt_text;
    data.max_tokens = parseInt(data.max_tokens);
    data.number_of_results = parseInt(data.number_of_results);
    data.number_images_generated = parseInt(data.number_images_generated);
    try {
        const response = await axios.post(api_urls[selected_feature], data, {headers:{'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Credentials': 'true'}});
        return response.data;
    }catch{
        return null;
    }    
}
export const displayRequestResults = {
    "Text Completion" : (results, promp_text)=>{
        return (
            <TextAreaResults prompt_text={promp_text} results={results} /> 
        )
    },
    "Text Edition" : (data) => {return displayRequestResults["Text Completion"](data, '')},
    "Image Generation": (results)=>{
        return (
            <ImagesComponent results={results} />
        )
    },
    "Text Moderation": (results)=>{
        return (
            <ModerationComponent results={results} />
        )
    }
}
export function destructuringResults (results, selected_feature){
    switch (selected_feature){
        case "Image Generation":
            return results.data;
        case "Text Moderation":
            return results.results[0];
        case "Text Completion": case "Text Edition":
            return results.choices
        default:
            return null
    }
}
export function organizeComponents(components_array, class_name){
    let resultComponents = [];
    for (let i=0; i<components_array.length; i+=2){
        if (i===components_array.length-1){
            resultComponents.push(
                <div className={`div_row ${class_name}`}>
                    {components_array[i]}
                </div>
            )
        }else{
            resultComponents.push(
                <div className={`div_row ${class_name}`}>
                    {components_array[i]}
                    {components_array[i+1]}
                </div>
            )
        }
    }
    return [...resultComponents];
}
