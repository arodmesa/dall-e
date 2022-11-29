import ModerationCategory from "./ModerationCategory";
import '../style/ModerationComponent.css';
function ModerationComponent({results}){
    const {categories, category_scores} = results;
    const moderation_categories = Object.keys(categories).map((category, index)=>{
        return(
            <ModerationCategory key={index} percent={(100*category_scores[category]).toFixed(2)} category_name={category} isTrue={categories[category]} />
        )
    })
    return(
        <div className="div_ModerationComponent">
            {moderation_categories}
        </div>
    )
}
export default ModerationComponent;