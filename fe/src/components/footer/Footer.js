import ImaIcon1 from "../../assets/images/mayit.png";
import React from "react";

const Footer = () => {
    return(
        <div className="song-side__footer">
            <div className="footer__title">
                <img src={ImaIcon1} alt=''/>
            </div>
            <div className="footer__links">
                <ul className="footer__links--nav">
                    <li className="links__nav--item">Giới Thiệu</li>
                    <li className="links__nav--item">
                        <div className="link-special">•</div>
                    </li>
                    <li className="links__nav--item">Liên Hệ</li>
                    <li className="links__nav--item">
                        <div className="link-special">•</div>
                    </li>
                    <li className="links__nav--item">Quảng Cáo</li>
                    <li className="links__nav--item">Góp Ý</li>
                    <li className="links__nav--item">
                        <div className="link-special">•</div>
                    </li>
                    <li className="links__nav--item">Thỏa Thuận Sử Dụng</li>
                </ul>
            </div>
        </div>
    )
}
export default Footer;