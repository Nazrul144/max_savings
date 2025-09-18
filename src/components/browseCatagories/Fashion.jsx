import CatagoriesSlider from "../userLandingPage/UserLandingPageCard/CatagoriesSlider"
import ChildrenswearCard from "../userLandingPage/UserLandingPageCard/ChildrenswearCard"
import ManswearCard from "../userLandingPage/UserLandingPageCard/ManswearCard"
import ShoesCard from "../userLandingPage/UserLandingPageCard/ShoesCard"
import WomenswearCard from "../userLandingPage/UserLandingPageCard/WomenswearCard"
import FashionHero from "./FashionHero"


const Fashion = () => {
  return (
    <div>
      <FashionHero/>
      <ManswearCard/>
      <WomenswearCard/>
      <ChildrenswearCard/>
      <ShoesCard/>
      <CatagoriesSlider/>
    </div>
  )
}

export default Fashion
