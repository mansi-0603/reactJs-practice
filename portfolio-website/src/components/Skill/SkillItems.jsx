export default function SkillItems({name, icon:Icons, color}){
    return (
        <div className="skill-item">

            <Icons size={40} color = {color} />
            <span>{name}</span>
        </div>
    );
}