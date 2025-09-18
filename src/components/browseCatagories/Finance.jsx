import CatagoriesSlider from "../userLandingPage/UserLandingPageCard/CatagoriesSlider"
import BankAccounts from "../userLandingPage/UserLandingPageCard/FinanceComponenets/BankAccounts"
import CreditCards from "../userLandingPage/UserLandingPageCard/FinanceComponenets/CreditCards"
import AllInsurance from "../userLandingPage/UserLandingPageCard/FinanceComponenets/SingleComponents/AllInsurance"
import AllLoans from "../userLandingPage/UserLandingPageCard/FinanceComponenets/SingleComponents/AllLoans"
import FinanceHero from "./FinanceHero"


const Finance = () => {
  return (
    <div>
      <FinanceHero/>
      <AllInsurance/>
      <CreditCards/>
      <AllLoans/>
      <BankAccounts/>
      <CatagoriesSlider/>
    </div>
  )
}

export default Finance