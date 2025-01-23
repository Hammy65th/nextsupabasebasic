import { getData } from "./data";
import Link from "next/link";

interface Nametype {
    
    id:number
    Name:string
    LastName:string
}

const page = async () => {
    
    const names = await getData();

    console.log(names)

    return(
        
        <>
        {names &&
        
        names.data.map( (item:Nametype)=>(

        <div key={item.id}>
            
            <Link 
            href={{
                pathname: '/useapisupabasequery',
                query: { id: item.id },
            }}
            >
                {item.Name}
            </Link>

        </div>

        ) )
        
        }   

        </>

    );
}

export default page