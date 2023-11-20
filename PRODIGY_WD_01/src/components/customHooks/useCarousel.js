import { useEffect, useState } from "react";
import { SWIGGY_API } from "../../utils/constant";
import { MockData } from "../../mockdata/mockData";

const useCarousel = () => {
    const [imageIds, setImageIds] = useState([]);
    const [imageIds1, setImageIds1] = useState([]);
    const [restaurantInfo, setRestaurantInfo] = useState([]);
    const [title, setTitle] = useState([]);
    const[resList, setResList] = useState([]);

    useEffect(() => {
        fetchData();
        window.scrollTo(0, 0);

        // Add event listener for window resize
        window.addEventListener('resize', fetchData);

        // Cleanup: remove event listener on unmount
        return () => window.removeEventListener('resize', fetchData);
    }, []);

    const fetchData = async () => {
        const data = await fetch(SWIGGY_API);
        const json = await data.json();

        if(window.innerWidth < 1024){
            setData(MockData);
        } else {
            setData(json?.data?.cards);
        }
    };

    const setData = (data) => {
        setImageIds(data[0]?.card?.card?.imageGridCards?.info?.map(item => item.imageId) || []);
        setImageIds1(data[1]?.card?.card?.imageGridCards?.info?.map(item => item.imageId) || []);
        setTitle(data[2]?.card?.card?.header || []);
        setRestaurantInfo(data[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
        setResList(data[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
    };

    return { imageIds, imageIds1, restaurantInfo, title, resList };
};

export default useCarousel;