import { Link } from "react-router-dom"
import RestaurantCard from "./RestaurantCard"
import ShimmerUI from "./ShimmerUI"
import useCarousel from "./customHooks/useCarousel"

const Restaurants = () =>{
    
    const {resList} = useCarousel()

    return resList.length === 0 ? <ShimmerUI/> : (
        <div className="w-full mt-9 justify-between items-center">
            <div className="w-9/12 flex flex-wrap mx-auto">
                <div className="text-[24px] text-[#0206CEB] tracking-[-0.4px] font-bold mb-4">Restaurants with online food delivery in Bangalore</div>
                <div className="flex flex-wrap gap-4">
                    {
                        resList.map((restaurant) => (
                            <Link
                                to={"/restraunt/" + restaurant.info.id}
                                key={restaurant.info.id}
                            >
                                <RestaurantCard  restData={restaurant} />
                            </Link>
                        ))
                    }
                </div>
              
            </div>
          </div>
    )
}

export default Restaurants