import Seg from "./Seg";
import SegRev from "./SegRev";

function Segments(){
  return (
    <>
     <div>
        <Seg 
        image="images/drive-man.webp"
        title="Drive when you want, make what you need"
        para="Make money on your schedule with deliveries or rides—or both.
         You can use your own car or choose a rental through Uber."
        />
        
        <SegRev 
        image="images/pickup.webp"
        title="The Uber you know, reimagined for business"
        para="Uber for Business is a platform for managing global rides and meals, 
        and local deliveries, for companies of any size."
        />

        <Seg 
        image="images/proud-man.webp"
        title="Make money by renting out your car"
        para="Connect with thousands of drivers and earn more per week 
        with Uber’s free fleet management tools."
        />

     </div>
    </>
  );
};

export default Segments;