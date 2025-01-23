import { getQueryData } from "./data";
import { useSearchParams } from "next/navigation";

type PageProps = {
    searchParams:Promise<{id:string}>
}

const page = async (props:PageProps) => {

    const {id} = await props.searchParams;

        const queryData = await getQueryData(id);
    
    return (

        <>
        
        {queryData &&

        <div>
            {queryData.data[0].LastName} 
        </div>
        
        }
        
        </>

    )
}
export default page