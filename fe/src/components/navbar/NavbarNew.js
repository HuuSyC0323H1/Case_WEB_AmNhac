import ImaIcon3 from '../../assets/images/muanho.png'
import ImaIcon5 from '../../assets/images/logo-64x64.png'
import './css.css'
import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../context/authContext";

export default function NavbarNew() {
    const {isLoggedIn, logout} = useAuth();
    const navigate = useNavigate();
    const handleLogOut = async () => {
        await logout();
        navigate('/login')
    }
    return (<header className="song-side__heading">
        <nav className="song-side__heading--left">
            <ul className="song-side__heading--tabs">
                <li className="tab-item active">Trang chủ</li>
                <li className="tab-item">Cá nhân</li>
                <li className="tab-item">Khám phá</li>
            </ul>
            <div className="song-side__heading--search">
                <div className="mobile__heading--menu">
                    <i className="bi bi-music-note-list"></i>
                </div>
                <div className="mobile__heading--logo">
                    <img src={ImaIcon3} alt="Zing MP3"/>
                </div>
                <div className="search__container">
                    <div className="search-btn">
                        <i className="bi bi-search"></i>
                    </div>
                    <input className="hide-on-mobile-tablet" type="text" name="search-song" id="search-song"
                           placeholder="Nhập tên bài hát" spellCheck={false} autoComplete="off"/>
                </div>
            </div>
        </nav>

        <nav className="song-side__heading--right">
            <div className="song-side__heading--setting hide-on-mobile-tablet">
                <i className='bx bx-cog'></i>
                <span className="tooltip tooltip-bottom">Cài đặt</span>
            </div>
            <div className="song-side__heading--user dropdown">
                {isLoggedIn ? (
                    <div className="dropdown">
                        <img className="dropdown-toggle" data-bs-toggle="dropdown" src={ImaIcon5} alt=""/>
                        <div className="dropdown-menu user-dropdown">
                            <Link to='/user' role="button" tabIndex="0">
                                <div className="user-info">
                                    <img src={ImaIcon5} alt=""/>
                                    <span className="user-name" dir="auto">
                                        Hữu Sỹ
                                    </span>
                                </div>
                            </Link>
                            <hr/>
                            <div className="user-actions">
                                <div className="action-item">
                                    <i className="x1b0d499 xep6ejk"></i>
                                    <span className="" dir="auto">
                                        Cài đặt &amp; quyền riêng tư
                                    </span>
                                </div>
                                <div className="action-item">
                                    <i className=""></i>
                                    <span className="" dir="auto">
                                        Trợ giúp &amp; hỗ trợ
                                    </span>
                                </div>
                                <div className="action-item">
                                    <i className="x1b0d499 xep6ejk"></i>
                                    <span className="" dir="auto">
                                        Màn hình &amp; trợ năng
                                    </span>
                                </div>
                            </div>
                            <div className="user-actions">
                                <div className="action-item">
                                    <i className=""></i>
                                    <span className="" dir="auto">
                                        Đóng góp ý kiến
                                    </span>
                                </div>
                                <div className="action-item" data-nocookies="true" onClick={handleLogOut}>
                                    <i className=""></i>
                                    <span className="" dir="auto">
                                        Đăng xuất
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                        <div className="button-signin">
                            <Link to='/login' style={{textDecoration:"none"}}>Sign In</Link>
                        </div>
                )}
            </div>

        </nav>
    </header>)
}