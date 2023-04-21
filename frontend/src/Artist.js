import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Artist = () =>{
    const A1_handler = (params) =>{
        // console.log(props.key)
        
        axios.get(`http://localhost:5000/artist/1`)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
    const A2_handler = (params) =>{
        // console.log(props.key)
        
        axios.get(`http://localhost:5000/artist/2`)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
    const A3_handler = (params) =>{
        // console.log(props.key)
        
        axios.get(`http://localhost:5000/artist/3`)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
    const A4_handler = (params) =>{
        // console.log(props.key)
        console.log(params.key)
        axios.get(`http://localhost:5000/artist/4`)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
    const A5_handler = (params) =>{
        // console.log(props.key)
        console.log(params.key)
        axios.get(`http://localhost:5000/artist/5`)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
    const A6_handler = (params) =>{
        // console.log(props.key)
        console.log(params.key)
        axios.get(`http://localhost:5000/artist/6`)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

    
    return <div>
        Artists 
        <ul>
            <li>
                <Link to='/artist/1' onClick={A1_handler} params={{key:1}}>artist 1</Link>

            </li>
            <li>
                <Link to='/artist/2' onClick={A2_handler}>artist 2</Link>

            </li>
            <li>
                <Link to='/artist/3' onClick={A3_handler}>artist 3</Link>

            </li>
            <li>
                <Link to='/artist/4' onClick={A4_handler}>artist 4</Link>

            </li>
            <li>
                <Link to='/artist/5' onClick={A5_handler}>artist 5</Link>

            </li><li>
                <Link to='/artist/6' onClick={A6_handler}>artist 6</Link>

            </li>
        </ul>
    </div>
}


export default Artist ;


