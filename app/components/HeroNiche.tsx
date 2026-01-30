"use client"
import Card from "./Cards";
function HeroNiche(){
  return (
    <>
      <div className="flex flex-col justify-center items-center p-6 flex-wrap">
        <div>
        <div className="text-[36px] text-left ml-5 font-bold">
        Suggestions
        </div>
        <div className="flex gap-4 justify-center items-center p-4 flex-wrap">
            <Card
            title="Ride"
            description="Go anywhere with Uber.Request a ride,hop in, and go."
            image="images/car.png"
            />
            <Card
            title="Reserve"
            description="Reserve your ride in advance so that you can relax on the day of your trip."
            image="images/calender.png"
            />
            <Card
            title="Intercity"
            description="Get convenient,affordable outstation cabs anytime at your door. "
            image="images/man-car.png"
            />
        </div>
        <div className="flex gap-4 justify-center items-center p-4 flex-wrap">
           <Card
            title="Shuttle"
            description="Lower-cost shared rides on professionally driven buses and vans."
            image="images/bus.png"
            />
            <Card
            title="Courier"
            description="Uber makes same-day item delivery easier than ever."
            image="images/parcel.png"
            />
            <Card
            title="Rentals"
            description="Request a trip for a block of time and make multiple stops."
            image="images/car-clock.png"
            />
        </div>
        </div>
      </div>
    </>
  );
};

export default HeroNiche;