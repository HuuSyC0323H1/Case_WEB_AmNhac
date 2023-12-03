import ImaIcon from "../../assets/images/abc.svg";
import React from "react";
import {Link} from "react-router-dom";

const LeftSideBar = () => {
    return(
        <div className="menu-side">
            <div className="menu-side__logo">
                <img src={ImaIcon} alt="MP3 Player" style={{marginRight: "15px"}}/>
                <div className='logo-name' style={{fontSize: "25px"}}>
                    <Link to='/' style={{textDecoration:'none'}}>SoundSculpt</Link>
                </div>
                <i className="bi bi-x-lg"></i>
            </div>
            <div className="menu-side__playlist">
                <div className="menu-side__playlist-label">
                    <i className="bi bi-star-fill"></i>
                    Bảng Xếp Hạng
                </div>
                <h4 className="active">
                    <i className="bi bi-music-note-beamed"></i>Việt Nam
                </h4>
                <h4><i className="bi bi-music-note-beamed"></i>Âu Mỹ</h4>
                <h4><i className="bi bi-music-note-beamed"></i>EDM</h4>
            </div>
            <div className="menu-side__song active">
                <div className="menu-side__song-item active">
                    <div className="menu-side__song-item--number">1</div>
                    <div className="menu-side__song-item--image">
                        <img src='' alt=''/>
                    </div>
                    <div className="menu-side__song-item--info">
                        <div className="song-item--title">Tập Cô Đơn</div>
                        <div className="song-item--singer">Nguyễn Văn Giàu</div>
                    </div>
                    <div className="menu-side__song-item--play">
                        <i className="bi bi-play-circle-fill" id="1"></i>
                    </div>
                </div>
            </div>
            <div className="menu-side__song us-uk">
                <h1 style={{textAlign: "center"}}>Loading data...</h1>
            </div>
            <div className="menu-side__song edm">
                <h1 style={{textAlign: "center"}}>Loading data...</h1>
            </div>
        </div>
    )
}
export default LeftSideBar;