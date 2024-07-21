import React from "react";
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
    return (
        <div>
            <h1>Box Creator</h1>
            <NewBoxForm />
            <Box color='red' height='200' width='200'/>
            <Box color='blue' height='200' width='200'/>
            <Box color='green' height='200' width='200'/>
        </div>
    )
}

export default BoxList;