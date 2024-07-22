import "./Concerthall.css";
import ion_people_outline from "../assets/img/ion_people_outline.png";
import uil_calender from "../assets/img/uil_calender.png";
import Line40 from "../assets/img/Line40.png";

const Concerthall = ({ venue, className }) => {
  return (
    // className: venue-card venue-${index + 1}
    <div className={className}>
      <img src={venue.image} alt="" className="venue_img" />
      <p className="venue_status">{venue.status}</p>
      <div className="venue_div">
        <p className="venue_id">ID {venue.id}</p>
        <img src={Line40} alt="" className="Line41_1" />
        <h2 className="venue_name">{venue.name}</h2>
        <p className="venue_location">{venue.location}</p>
        <div className="venue_capacity">
          <img src={ion_people_outline} alt="" />
          <p>{venue.capacity}</p>
        </div>
        <div className="venue_date">
          <img src={uil_calender} alt="" />
          <p>{venue.date}</p>
        </div>
        <p className="venue_price">{venue.price}</p>
        <img src={Line40} alt="" className="Line41_2" />
        <div className="venue_button">
          <button className="more_button">더 보기</button>
          {venue.status == "승인 완료" ? (
            <button className="prepare_button">공연 준비</button>
          ) : null}

          {venue.status !== "지난 공연" ? (
            <button className="last_button">취소</button>
          ) : (
            <button className="last_button">삭제</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Concerthall;
