import "./RentalCompleted.css";

const RentalCompleted = ({ onClose }) => {
  return (
    <div className="backdrop">
      <div className="RentalCompleted">
        <h1>대관 신청이 완료됐습니다!</h1>
        <p>공연장이 승인하기까지 시간이 소요될 수 있습니다</p>
        <button onClick={onClose}>확인</button>
      </div>
    </div>
  );
};

export default RentalCompleted;
