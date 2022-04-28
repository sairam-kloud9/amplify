import Banner from "./Banner";
import "./Home.css";
import {
  MainServicesArray,
  AssetValidationArray,
  RentalServicesArray,
  PackersMoversArray,
  LoanServicesArray,
  HomeServicesArray,
} from "../../Services/ServicesList";
import Services from "./Services";
import AssetValidation from "./AssetValidation";
import RentalServices from "./RentalServices";
import Section from "../Section";
import PackersMoversServices from "./PackersMoversSecrvices";
import LoanServices from "./LoanServices";
import HomeServices from "./HomeServices";
import AdvertisingServices from "./AdvertisingServices";
const Home = () => {
  return (
    <div className="home-page">
      <Banner />
      <Services ServicesList={MainServicesArray} />
      <AssetValidation ServicesList={AssetValidationArray} />
      <RentalServices ServicesList={RentalServicesArray} />
      <Section className="home_services movers_services">
        <PackersMoversServices ServicesList={PackersMoversArray} />
        <LoanServices ServicesList={LoanServicesArray} />
      </Section>
      <HomeServices ServicesList={HomeServicesArray} />
      <AdvertisingServices />
    </div>
  );
};

export default Home;
