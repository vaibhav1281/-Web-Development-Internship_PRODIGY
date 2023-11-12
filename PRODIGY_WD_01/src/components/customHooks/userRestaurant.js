import { SWIGGY_API } from "../../utils/constant";
import { useState, useEffect } from "react";

const userRestaurant = () => {

    const[resList, setResList] = useState([]);

    useEffect(() =>{
        fetchData();
    }, []);

    const fetchData = async () =>{
        const data = await fetch(SWIGGY_API);
        const json = await data.json();
        setResList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
    }

    return {resList}

}

export default userRestaurant;