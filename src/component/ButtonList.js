import Button from "./Button";

const List = ['All','Games','Music','Football','GOT','Live','Cricket','Cooking','Valentine']
const ButtonList = ()=>{
    return(
        <div className="flex">
            {List.map(item=>{
                return (<Button name={item}/>)
            })  
            }
        </div>
    )
}
export default ButtonList ;