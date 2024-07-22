import "./Notice.css";

const Notice = ({ onClose, onApplyOpen }) => {
  return (
    <div className="backdrop">
      <div className="Notice">
        <h1>유의사항</h1>
        <p>
          아래 버튼을 선택하면, 호스트가 설정한 공연장 이용규칙, 공연자에게
          적용되는 기본 규칙, 공연장 재예약 및 환불 정책에 동의하며, 피해에 대한
          책임이 본인에게 있을 경우 쇼호가 청구의 조치를 취할 수 있다는 사실에
          동의하는 것입니다. 또한, 이용약관과 결제 서비스 약관 및 개인정보
          처리방침에도 동의합니다.
        </p>
        <button
          onClick={() => {
            onClose();
            onApplyOpen();
          }}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default Notice;
