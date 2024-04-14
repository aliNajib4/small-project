import { useState } from "react";
import QrCodeBox from "react-qr-code";

const QrCode = () => {
  const [value, setValue] = useState("https://github.com/");
  const [qrValue, setQrValue] = useState("");

  return (
    <div className="center h-screen w-screen bg-gray-200">
      <div className="flex w-[256px] flex-col items-center gap-16">
        <div className="flex gap-5">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            onClick={() => {
              setQrValue(value);
              setValue("");
            }}
            className="button"
          >
            Generate
          </button>
        </div>
        {/* <div>{qrValue && <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`} />}</div> */}
        <div>
          <QrCodeBox value={qrValue} />
        </div>
      </div>
    </div>
  );
};

export default QrCode;
