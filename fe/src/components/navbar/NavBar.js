import {Link} from "react-router-dom";
import { Dropdown } from 'react-bootstrap';
import {useAuth} from "../../context/authContext";

export default function NavBar() {
    const {isLoggedIn} = useAuth();
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="#">Hidden brand</a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <div>
                            {isLoggedIn ? (
                                <div className="navbar-custom-menu">
                                    <ul className="nav navbar-nav">
                                        <li className="dropdown user user-menu" id="user-main">
                                            <Dropdown>
                                                <Dropdown.Toggle variant="default" id="dropdown-basic">
                                                    <img src="" className="user-image" alt="User Image" />
                                                    <span className="hidden-xs" id="usernamePlaceholder"></span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item>
                                                        <img src="" className="img-circle" alt="User Image" />
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
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                <>
                                    <button>
                                        <Link to={'/login'}>abc</Link>
                                    </button>
                                    <button>
                                        <Link to={'/register'}>xyz</Link>
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
