import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
import Contact from "../Contact/Contact";
import HomeContentLoad from "../HomeContentLoad/HomeContentLoad";
import HomeCategoryLoad from "../HomeCategoryLoad/HomeCategoryLoad";
import Timeline from "../Timeline/Timeline";
import HeroSecond from "../HeroSecond/HeroSecond";
import Faq from "../../Faq/Faq";
import PageTitle from "../../../components/PageTitle";

export default function Home() {


  return (<div data-theme="">

    <div><PageTitle title="Home Page"></PageTitle></div>

    <div className="grid grid-cols-1 m min-h-screen">
      <div>
        <Banner></Banner>
      </div>
      <div>
        {/* <AddProductUsingReactState></AddProductUsingReactState> */}
      </div>
      <div>
        <HowItWorks></HowItWorks>
      </div>

      <div className="p-10"> <HomeCategoryLoad></HomeCategoryLoad></div>
      <div className="p-20">
        <HeroSecond></HeroSecond>
      </div>

      <HomeContentLoad></HomeContentLoad>
      {/* load all course */}

      <div className="p-20">
        <span className="text-5xl flex justify-center">Offer Time</span>
        <div className="p-10"><Timeline></Timeline></div>
      </div>


      <div>
        <Contact></Contact>
      </div>
      <div className="p-20">
        <Faq></Faq>
      </div>
    </div>

  </div>);
}
