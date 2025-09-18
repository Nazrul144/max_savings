import CatagoriesSlider from "../userLandingPage/UserLandingPageCard/CatagoriesSlider"
import HotelAndTravel from "../userLandingPage/UserLandingPageCard/TravelComponentes/HotelsAndTravel"
import SkiBreaks from "../userLandingPage/UserLandingPageCard/TravelComponentes/SkiBreaks"
import SunAndBeach from "../userLandingPage/UserLandingPageCard/TravelComponentes/SunAndBeach"
import UkStays from "../userLandingPage/UserLandingPageCard/TravelComponentes/UkStays"
import FinanceHero from "./FinanceHero"


const Travel = () => {
  return (
    <div>
      <FinanceHero/>
      <SunAndBeach/>
      <UkStays/>
      <HotelAndTravel/>
      <SkiBreaks/>
      <CatagoriesSlider/>
    </div>
  )
}
     
export default Travel