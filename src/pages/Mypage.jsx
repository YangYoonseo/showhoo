import "./Mypage.css";
import Navbar from "../components/common/Navbar";
import Frame339 from "../assets/img/Frame339.png";
import PerformerProfile from "../components/PerformerProfile";
import PerformerCancel from "../components/PerformerCancel";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../App";

const Mypage = () => {
  const nav = useNavigate();
  const profiles = useContext(ProfileContext);
  const [cancel, setCancel] = useState(false);
  return (
    <div className="Mypage">
      <Navbar />
      <div className="Mypage_content">
        <h3>마이페이지</h3>
        <img src={Frame339} alt="" className="profile_img" />
        <p className="name">홍길동</p>
        <p className="latest">
          길동님의<span>&nbsp;최근&nbsp;</span>프로필이에요
        </p>
        <PerformerProfile
          key={0}
          profile={profiles[0]}
          className={"profile-card profile-latest"}
        />

        <div className="choice">
          <button>알림</button>
          <button
            onClick={() => {
              nav("/performer_registraion");
            }}
          >
            공연자 등록
          </button>
          <button
            onClick={() => {
              nav("/rental_history");
            }}
          >
            대관내역
          </button>
          <button>역할 전환</button>
          <button>로그아웃</button>
          <button
            onClick={() => {
              setCancel(true);
            }}
          >
            회원탈퇴
          </button>
        </div>
        {cancel && <PerformerCancel onClose={() => setCancel(false)} />}
      </div>
    </div>
  );
};

export default Mypage;
