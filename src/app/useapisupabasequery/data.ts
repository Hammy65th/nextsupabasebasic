

export const getQueryData = async (id:string | null) => {

    const res = await fetch(`http://localhost:3000/api/supa/${id}`);

    if (!res.ok) {

        throw new Error('Failed to fetch data from some data');
    }

    return res.json();
    
}