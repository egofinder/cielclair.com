import { FaInstagram } from "react-icons/fa";
import { RiKakaoTalkLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="container mt-10 flex flex-col items-start justify-between gap-4 p-4 text-sm md:flex-row md:p-10">
      <div className="flex-1">
        <p>Ciel Clair</p>
        <p>info@cielclair.com</p>
        <p>
          <b>운영시간 | </b>월 - 금 (11:00 - 17:00)
        </p>
        <p>
          <b>점신시간 | </b>12:30 - 14:00
        </p>
        <p>
          <b>(주말 및 공휴일 제외)</b>
        </p>
      </div>
      <div className="flex-1">
        <p>Owner - BAEKHAK JEON</p>
        <p>Company - Ciel Clair</p>
        <p>License - 99-99999-99</p>
      </div>
      <div className="flex-1">
        <p>Address</p>
        <p>1234 Cypress cir. Rowland Heighs, CA, 91748</p>
      </div>
      <div className="flex-1">
        <p className="flex items-center justify-center gap-2">
          <FaInstagram /> Instagram
        </p>
        <p className="flex items-center justify-center gap-2">
          <RiKakaoTalkLine /> KakaoTalk
        </p>
      </div>
      <div className="flex-1">
        <p>TERMS & CONDITIONS</p>
        <p>GUIDE</p>

        <p>PRIVACY POLICY </p>
        <p>&#169; All right reserved </p>
      </div>
    </div>
  );
};

export default Footer;
