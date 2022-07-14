import React from 'react';

// Dinamic
import { useRouter } from 'next/router';

const realStateID = ()=>{

    const router = useRouter();
    // this is a hook para dinamic

    return ( <>
        <h1>Hola Mundo, { router.query.id }</h1>
    </>)
}

export default realStateID;