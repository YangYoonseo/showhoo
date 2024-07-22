import "./RentalApply.css";

const RentalApply = ({ onClose, onCompletedOpen }) => {
  return (
    <div className="backdrop">
      <div className="RentalApply">
        <h1>대관 신청하시겠습니까?</h1>
        <p>
          대관 신청 이후, 공연장측에서{" "}
          <span>송금을 확인한 후, 대관 신청이 승인</span>됩니다. 공연장측의
          불가피한 상황으로 <span>대관 신청이 거부될 수 있으며,</span> 이러한
          상황 발생시 <span>예약금은 보내신 계좌로 환불</span>됩니다.
        </p>
        <button onClick={onClose}>취소</button>
        <button
          onClick={() => {
            onClose();
            onCompletedOpen();
          }}
        >
          등록하기
        </button>
      </div>
    </div>
  );
};

export default RentalApply;
