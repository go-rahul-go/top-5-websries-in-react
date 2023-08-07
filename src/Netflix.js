import Data from "./data";
import Card from "./Card";

const netflix = Data.filter((value)=>value.brand==="netflix")


export default function Netflix()
{
    return(
        netflix.map((value)=>{
            return(
                <Card
                key={value.id}
                imagelink={value.imagelink}
                brand={value.brand}
                title={value.title}
                link={value.link}
                />
            )
        })
    )
}