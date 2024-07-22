import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import "./RentalHistory.css";
import Concerthall from "../components/Concerthall";
import { useContext } from "react";
import { VenueContext } from "../App";

const RentalHistory = () => {
  const venues = useContext(VenueContext);

  return (
    <div className="RentalHistory">
      <Navbar />
      <Footer />
      <div className="RentalHistory_content">
        <h1>대관 내역</h1>
        {venues.map((venue, index) => (
          <Concerthall
            key={index}
            venue={venue}
            className={`venue-card venue-${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RentalHistory;
