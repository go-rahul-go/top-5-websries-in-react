import Data from "./data";
import Card from "./Card";

const amazon = Data.filter((value)=>value.brand==="amazon prime")

function Amazon(){
    return(
        amazon.map((value)=>{
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

export default Amazon;