import "./Navbar.css";
import { useNavigate } from "react-router-dom";

import logo_performer from "../../assets/img/logo_performer.png";
import logo_mypage from "../../assets/img/logo_mypage.png";

const Navbar = () => {
  const nav = useNavigate();

  return (
    <div className="Container113">
      <div className="Frame128">
        <img src={logo_performer} alt="" />
        <div className="Frame127">
          <button className="Button47">홈</button>
          <button
            className="Button48"
            onClick={() => {
              nav("/rental_details");
            }}
          >
            공연장 대관
          </button>
          <button
            className="Button49"
            onClick={() => {
              nav("/rental_history");
            }}
          >
            대관 내역
          </button>
          <button className="Button50">공연 준비</button>
        </div>
      </div>
      <div className="Frame169">
        <button className="Button51">역할 전환</button>
        <img
          src={logo_mypage}
          alt=""
          onClick={() => {
            nav("/mypage");
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
