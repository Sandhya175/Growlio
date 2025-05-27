import { Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import InvestorDetailsPage from './pages/InvestorDetailsPage';
import InstrumentSetup from './pages/InstrumentSetup';
import BankDetails from './pages/BankDetails';
import AddFixedDeposit from './pages/AddFixedDeposit';
import AddBankAccount from './pages/AddBankAccount';
import AddDeposit from './pages/AddDeposit';
import ChooseMutualFundAction from './pages/ChooseMutualFundAction';
import MutualFundForm from './pages/MutualFundForm';
import MutualFundRedeem from './pages/MutualFundRedeem';
import InsurancePage from "./pages/InsurancePage";
import LifeInsuranceDetails from "./pages/LifeInsuranceDetails";
import HealthInsuranceForm from "./pages/HealthInsuranceForm";
import VehicleInsuranceForm from './pages/VehicleInsuranceForm';
import AddOtherInsurance from './pages/AddOtherInsurance';
import AddPropertyInsurance from "./pages/AddPropertyInsurance";
import AddTravelInsurance from "./pages/AddTravelInsurance";
import BusinessInsuranceForm from "./pages/BusinessInsuranceForm";
import AddAccidentInsurance from "./pages/AddAccidentInsurance";
import AddHomeInsurance from "./pages/AddHomeInsurance";
import CommodityActionPage from './pages/CommodityActionPage';
import NewCommodityInvestment from "./pages/NewCommodityInvestment";
import CommoditySalePage from "./pages/CommoditySalePage";
import ChoosePropertyAction from "./pages/ChoosePropertyAction";
import AddPropertySale from "./pages/AddPropertySale";
import AddRentalProperty from "./pages/AddRentalProperty";
import AddPropertyPurchase from "./pages/AddPropertyPurchase";
import PpfAction from './pages/PpfAction';
import PpfForm from "./pages/PpfForm";
import PpfContributionForm from "./pages/PpfContributionForm";
import PpfNominationForm from "./pages/PpfNominationForm";
import PpfPartialWithdrawalForm from "./pages/PpfPartialWithdrawalForm";
import PpfClosureForm from "./pages/PpfClosureForm";
import HomePage from './pages/HomePage';
import LinkedBankAccounts from './pages/LinkedBankAccounts';
import RDConfirmation from "./pages/RDConfirmation";
import MyBankInvestments from "./pages/MyBankInvestments";
import WithdrawalSuccessPage from "./pages/WithdrawalSuccessPage";
import MyBankInvestmentsFD from "./pages/MyBankInvestmentsFD";
import MutualFundHoldings from "./pages/MutualFundHoldings";
import RedeemedFunds from "./pages/RedeemedFunds";
import CommodityInvestments from "./pages/CommodityInvestments";
import CommoditySaleDetails from "./pages/CommoditySaleDetails";
import PropertyPurchaseDetails from "./pages/PropertyPurchaseDetails";
import RentalPropertyDetails from "./pages/RentalPropertyDetails";
import PropertySaleDetails from "./pages/PropertySaleDetails";
import AddBorrowedFundDetails from "./pages/AddBorrowedFundDetails";
import PPFAccountDetails from "./pages/PPFAccountDetails";
import PPFContributionDetails from "./pages/PPFContributionDetails";
import PPFNominationDetails from "./pages/PPFNominationDetails";
import PPFWithdrawalDetails from './pages/PPFWithdrawalDetails';
import PPFClosureDetails from "./pages/PPFClosureDetails";
import BorrowedFundDetails from "./pages/BorrowedFundDetails";
import InsuranceInvestmentDetails from "./pages/InsuranceInvestmentDetails";
import PrimaryMemberForm from "./pages/PrimaryMemberForm";
import FamilyMemberDetailsForm from "./pages/FamilyMemberDetailForm";
import BusinessEntityDetailsForm from "./pages/BusinessEntitydetailform";
import InvestorType from "./pages/InvestorType";
import BusinessEntityInfo from "./pages/BusinessEntityInfo";
import PrimaryInformation from "./pages/PrimaryInformation";
import FamilyInformation from './pages/FamilyInformation';
import AxisBankDashboard from './pages/AxisBankDashboard';
import Reports from "./pages/Reports";
import ReportBank from "./pages/ReportBank";
import Onhold from './pages/Onhold'; 
import Bankdashboard from './pages/Bankdashboard';
import Allbankacountlist from './pages/Allbankacountlist';
import Maturedscreen from './pages/Maturedscreen';
import ChooseStockAction from "./pages/ChooseStockAction";
import NewPurchaseStock from './pages/NewStockPurchase';
import StockHoldings from './pages/StockHoldings';
import NewStockSale from './pages/NewStockSale'; 
import IntradayTradeForm from './pages/IntradayTradeForm';
import StockDashboard from "./pages/StockDashboard"; 
import IntradayTradings from "./pages/IntradayTradings";
import NewFutureAndOption from './pages/newfutureandoption'; 
import FODetailsTable from "./pages/FODetailsTable";
import Taxation from './pages/Taxation';
import Stocksaleinformation from './pages/Stocksaleinformation';
import ShortTermCapitalGain from "./pages/ShortTermCapitalGain";
import STCGDetails from './pages/STCGDetails';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/investor-details" element={<InvestorDetailsPage />} />
      <Route path="/instrument-setup" element={<InstrumentSetup />} />
      <Route path="/bank-details" element={<BankDetails />} />
      <Route path="/add-fixed-deposit" element={<AddFixedDeposit />} />
      <Route path="/add-bank-account" element={<AddBankAccount />} />
      <Route path="/add-deposit" element={<AddDeposit />} />
      <Route path="/choose-mutual-fund-action" element={<ChooseMutualFundAction />} />
      <Route path="/mutual-fund-form" element={<MutualFundForm />} />
      <Route path="/mutual-fund-redeem" element={<MutualFundRedeem />} />
      <Route path="/instrument-setup/insurance" element={<InsurancePage />} />
      <Route path="/life-insurance-details" element={<LifeInsuranceDetails />} />
      <Route path="/health-insurance" element={<HealthInsuranceForm />} />
      <Route path="/vehicle-insurance" element={<VehicleInsuranceForm />} />
      <Route path="/add-other-insurance" element={<AddOtherInsurance />} />
      <Route path="/add-property-insurance" element={<AddPropertyInsurance />} />
      <Route path="/add-travel-insurance" element={<AddTravelInsurance />} />
      <Route path="/business-insurance" element={<BusinessInsuranceForm />} />
      <Route path="/add-accident-insurance" element={<AddAccidentInsurance />} />
      <Route path="/add-home-insurance" element={<AddHomeInsurance />} />
      <Route path="/commodity-action" element={<CommodityActionPage />} />
      <Route path="/new-commodity-investment" element={<NewCommodityInvestment />} />
      <Route path="/commodity-sale" element={<CommoditySalePage />} />
      <Route path="/choose-property-action" element={<ChoosePropertyAction />} />
      <Route path="/add-property-sale" element={<AddPropertySale />} />
      <Route path="/add-rental-property" element={<AddRentalProperty />} />
      <Route path="/add-property-purchase" element={<AddPropertyPurchase />} />
      <Route path="/ppf-action" element={<PpfAction />} />
      <Route path="/ppf-form" element={<PpfForm />} />
      <Route path="/ppf-contribution" element={<PpfContributionForm />} />
      <Route path="/ppf-nomination" element={<PpfNominationForm />} />
      <Route path="/ppf-partial-withdrawal" element={<PpfPartialWithdrawalForm />} />
      <Route path="/ppf-closure" element={<PpfClosureForm />} />
      <Route path="/linked-accounts" element={<LinkedBankAccounts />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/rd-confirmation" element={<RDConfirmation />} />
      <Route path="/my-bank-investments" element={<MyBankInvestments />} />
      <Route path="/withdrawal-success" element={<WithdrawalSuccessPage />} />
      <Route path="/my-bank-investments/fd" element={<MyBankInvestmentsFD />} />
      <Route path="/mutual-fund-holdings" element={<MutualFundHoldings />} />
      <Route path="/redeemed-funds" element={<RedeemedFunds />} />
      <Route path="/commodity-investments" element={<CommodityInvestments />} />
      <Route path="/commodity-sale-details" element={<CommoditySaleDetails />} />
      <Route path="/property-details" element={<PropertyPurchaseDetails />} />
      <Route path="/rental-details" element={<RentalPropertyDetails />} />
      <Route path="/all-property-purchases" element={<PropertySaleDetails />} />
      <Route path="/add-borrowed-fund" element={<AddBorrowedFundDetails />} />
      <Route path="/ppf-accounts" element={<PPFAccountDetails />} />
      <Route path="/ppf-contribution-details" element={<PPFContributionDetails />} />
      <Route path="/ppf-nomination-details" element={<PPFNominationDetails />} />
      <Route path="/ppf-withdrawal-details" element={<PPFWithdrawalDetails />} />
      <Route path="/ppf-closure-details" element={<PPFClosureDetails />} />
      <Route path="/linked-borrowings" element={<BorrowedFundDetails />} />
      <Route path="/insurance-investment-details" element={<InsuranceInvestmentDetails />} />
      <Route path="/primary-member" element={<PrimaryMemberForm />} />
      <Route path="/family-member-details" element={<FamilyMemberDetailsForm />} />
      <Route path="/business-entity-details" element={<BusinessEntityDetailsForm />} />
      <Route path="/investor-type" element={<InvestorType />} />
      <Route path="/business-entity" element={<BusinessEntityInfo />} />
      <Route path="/business-entity" element={<BusinessEntityInfo />} />
      <Route path="/primary-information" element={<PrimaryInformation />} />
      <Route path="/family-information" element={<FamilyInformation />} />
      <Route path="/axis-bank-dashboard" element={<AxisBankDashboard />} />
      <Route path="/reports" element={<Reports />} />   
      <Route path="/report-bank" element={<ReportBank />} />
      <Route path="/onhold" element={<Onhold />} />
      <Route path="/bank-dashboard" element={<Bankdashboard />} />
      <Route path="/all-bank-accounts" element={<Allbankacountlist />} />
      <Route path="/matured-deposit-details" element={<Maturedscreen />} />
      <Route path="/choose-stock-action" element={<ChooseStockAction />} />
      <Route path="/new-purchase-stock" element={<NewPurchaseStock />} />
      <Route path="/stock-holdings" element={<StockHoldings />} />
      <Route path="/new-stock-sale" element={<NewStockSale />} />
      <Route path="/intra-trade-form" element={<IntradayTradeForm />} />
      <Route path="/stock-dashboard" element={<StockDashboard />} />
      <Route path="/intraday-tradings" element={<IntradayTradings />} />
      <Route path="/new-future-and-option" element={<NewFutureAndOption />} />
      <Route path="/fo-details-table" element={<FODetailsTable />} />
      <Route path="/taxation" element={<Taxation />} />
      <Route path="/stocksale-information" element={<Stocksaleinformation />} />
      <Route path="/short-term-capital-gain" element={<ShortTermCapitalGain />} />
      <Route path="/stcg-details" element={<STCGDetails />} />
    



    </Routes>
  );
}

export default App;
