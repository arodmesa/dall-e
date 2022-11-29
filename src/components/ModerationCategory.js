import '../style/ModerationCategory.css';
function ModerationCategory({percent, category_name, isTrue}){
    const style = {
        color: ((isTrue)?'red':'green'),
    }
    return (
        <div className="div_row div_category">
            <h3 className="h3_category">{category_name}</h3>
            <h3 className="h3_category" style={style}>{`${percent}% ${(isTrue)?'⚠️':'👍'}`}</h3>
        </div>
    )
}
export default ModerationCategory;