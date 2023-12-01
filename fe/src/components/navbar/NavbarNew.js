import ImaIcon3 from '../../assets/images/muanho.png'
import ImaIcon5 from '../../assets/images/logo-64x64.png'
import './css.css'
import React from "react";
import {Dropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useAuth} from "../../context/authContext";

export default function NavbarNew() {
    const {isLoggedIn} = useAuth();
    return (
        <header className="song-side__heading">
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
                    <div className="search__container" action="ac.mp3.zing.vn/complete">
                        <div className="search-btn">
                            <i className="bi bi-search"></i>
                        </div>
                        <input className="hide-on-mobile-tablet" type="text" name="search-song" id="search-song"
                               placeholder="Nhập tên bài hát" spellCheck={false} autoComplete="off"/>
                    </div>
                </div>
            </nav>

            <nav className="song-side__heading--right">
                <div className="song-side__heading--theme">
                    <span className="tooltip tooltip-bottom">Chủ đề</span>
                </div>
                <div className="song-side__heading--setting hide-on-mobile-tablet">
                    <i className="bi bi-gear"></i>
                    <span className="tooltip tooltip-bottom">Cài đặt</span>
                </div>
                <div className="song-side__heading--user dropdown">
                    {isLoggedIn ? (
                        <div className="navbar-custom-menu">
                            <ul className="nav navbar-nav">
                                <Dropdown>
                                    <Dropdown.Toggle variant="default" id="dropdown-basic">
                                        <img src={ImaIcon5} className="user-image" alt="User Image"/>
                                        <span className="hidden-xs" id="usernamePlaceholder"></span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>
                                            <img src="" className="img-circle" alt="User Image"/>
                                            <p id="user_name_role"></p>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <div className="pull-left">
                                                <a className="btn btn-default btn-flat">Thay đổi mật khẩu</a>
                                            </div>
                                            <div className="pull-right">
                                                <a className="btn btn-default btn-flat">Đăng xuất</a>
                                            </div>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </ul>
                        </div>
                    ) : (
                        <>
                            <button><Link to={'/login'}>abc</Link></button>
                        </>
                    )}
                </div>
            </nav>
        </header>
    )
}