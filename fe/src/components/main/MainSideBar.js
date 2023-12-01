import LeftSideBar from "../letsiderbar/Left-SideBar";
import ImaIcon3 from "../../assets/images/muanho.png";
import Footer from "../footer/Footer";
import React, {useEffect} from "react";
import NavbarNew from "../navbar/NavbarNew";

const MainSideBar = () => {
    useEffect(() => {
        const $ = document.querySelector.bind(document);
        const songSide = $('.song-side');
        const heading = $('.song-side__heading');
        const bannerTitle = $('.song-side__banner--title');
        const bannerContent = $('.song-side__banner--content');

        const handleScroll = (e) => {
            heading.classList.toggle('sticky', e.target.scrollTop > 0);
            bannerTitle.classList.toggle('fade-out', e.target.scrollTop > 0);
            bannerContent.classList.toggle('fade-out', e.target.scrollTop > 0);
        };

        if (songSide) {
            songSide.addEventListener('scroll', handleScroll);
            return () => {
                // Cleanup the event listener when the component is unmounted
                songSide.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);
    return(
        <header>
            <LeftSideBar></LeftSideBar>
            <div className="song-side">
               <NavbarNew></NavbarNew>
                {/*<div className="search__result">*/}
                {/*    <a href="" className="search__result--item">*/}
                {/*        <div className="result__item--img">*/}
                {/*            <img src={ImaIcon} alt="Song Image"/>*/}
                {/*        </div>*/}
                {/*        <div className="result__item--content">*/}
                {/*            <h3 className="content__title">*/}
                {/*                Hoa Bằng Lăng Remix*/}
                {/*            </h3>*/}
                {/*            <h4 className="content__subtitle">*/}
                {/*                Nguyễn Văn Giàu*/}
                {/*            </h4>*/}
                {/*        </div>*/}
                {/*    </a>*/}

                {/*</div>*/}

                <div className="song-side__container active">
                    <div className="song-side__banner">
                        <div className="song-side__banner--title">
                            Alan Walker - End of Time
                        </div>
                        <div className="song-side__banner--content">
                            You were the shadow to my light Did you feel us Another start You
                            fade Away afraid our aim is out of sight Wanna see us Alive
                        </div>
                        <div className="song-side__banner--btn">
                            <button className="banner__btn-play">Play</button>
                            <button className="banner__btn-follow glow-on-hover">Follow</button>
                        </div>
                    </div>
                    <div className="song-side__playlist">
                        <div className="song-side__playlist--popular">
                            <div className="playlist__popular--title">Có Thể Bạn Muốn Nghe</div>
                            <div className="playlist__popular--arrow">
                                <i className="bi bi-arrow-left" id="left-scroll-playlist"></i>
                                <i className="bi bi-arrow-right" id="right-scroll-playlist"></i>
                            </div>
                        </div>
                        <div className="song-side__playlist--carousel">
                            <a href="." className="playlist__carousel-item">
                                <div className="playlist__carousel-item--img">
                                    <img src={ImaIcon3} alt="#"/>
                                    <i className="bi bi-play-circle"></i>
                                </div>
                                <div className="playlist__carousel-item--title">
                                    Hoa Bằng Lăng Remix (Single)
                                </div>
                                <div className="playlist__carousel-item--subtitle">
                                    Nguyễn Văn Giàu
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="song-side__new-release">
                        <div className="song-side__playlist--popular">
                            <div className="playlist__popular--title">Mới Phát Hành</div>
                        </div>
                        <div className="song-side__playlist--carousel">
                            <div className="swiper swiper__new-release">
                                Additional required wrapper
                                <div className="swiper-wrapper">
                                    Slides
                                    <div className="song-side__new-release--item swiper-slide">
                                        <div className="song-side__new-release--thumbnail">
                                            <img
                                                src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/3/8/f/6/38f6c01056fbbe19ae00c018b8dec874.jpg"
                                                alt=''/>
                                            <i className="bi bi-play-circle"></i>
                                        </div>
                                        <div className="song-side__new-release--content">
                                            <div className="new-release__info">
                                                <div className="new-release__info--title">Trai Tài Gái Sắc</div>
                                                <div className="new-release__info--subtitle">NB3 Hoài Bảo</div>
                                            </div>
                                            <div className="new-release__time">
                                                <div className="new-release__time--rank">#1</div>
                                                <div className="new-release__time--date">26.04.2022</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                If we need navigation buttons
                                <div className="swiper-button-prev"></div>
                                <div className="swiper-button-next"></div>
                            </div>

                        </div>
                    </div>
                    <div className="song-side__singer">
                        <div className="song-side__playlist--popular">
                            <div className="playlist__popular--title">Ca Sĩ Nổi Bật</div>
                            <div className="playlist__popular--arrow">
                                <i className="bi bi-arrow-left" id="left-scroll-singer"></i>
                                <i className="bi bi-arrow-right" id="right-scroll-singer"></i>
                            </div>
                        </div>
                        <div className="song-side__playlist--carousel">
                            <a className="playlist__carousel-item--circle">
                                <div className="carousel-item__circle--img">
                                    <img
                                        src="https://vangiau-cover.vercel.app/img/CauHenCauThe.png"
                                        alt="#"
                                    />
                                    <i className="bi bi-play-circle"></i>
                                </div>
                                <div className="carousel-item__circle--name">Văn Giàu Nguyễn</div>
                            </a>
                        </div>
                    </div>
                    <div className="song-side__chart">
                        <div className="song-side__chart--wrapper">
                            <div className="song-side__playlist--popular">
                                <div className="playlist__popular--title">
                                    #ZingChart
                                    <i className="bi bi-play-circle-fill"></i>
                                </div>
                            </div>
                            <div className="song-side__playlist--carousel chart">
                                <div className="chart__legend-box">
                                    <div className="chart__legend-box--item">
                                        <div className="legend-box__item-number">2
                                        </div>
                                        <div className="legend-box__item-song">
                                            <div className="legend-box__item-song--thumbnail">
                                                <img
                                                    src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/1/8/0/7/1807c6b5fcc7058a14e1a288801221c7.jpg"
                                                    width="50px" alt=''/>
                                            </div>
                                            <div className="legend-box__item-song--info">
                                                <div className="song__info-title">
                                                    Sau Lưng Anh Có Em
                                                </div>
                                                <div className="song__info-subtitle">
                                                    Thiều Bảo Trăm
                                                </div>
                                            </div>
                                            <div className="legend-box__item-song--percent">
                                                30%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="chart__main">
                                    <canvas id="myChart" style={{width: "100%", maxWidth: "600px"}}></canvas>
                                </div>
                            </div>
                            <div className="song-side__chart--overlay"></div>
                        </div>
                    </div>
                    <Footer/>
                </div>
                <div className="song-side__container">
                    <div className="song-side__container--personal">
                        <div className="container__personal--heading">
                            <img src={ImaIcon3} alt="Avatar"/>
                            <span className="personal__name-user">Nguyễn Văn Giàu</span>
                        </div>
                        <div className="container__personal--body">
                            <ul className="personal__navbar">
                                <li className="personal__navbar-item active">Tổng Quan</li>
                                <li className="personal__navbar-item">Bài Hát</li>
                                <li className="personal__navbar-item">Playlist</li>
                                <li className="personal__navbar-item">Album</li>
                                <li className="personal__navbar-item">MV</li>
                                <li className="personal__navbar-item">Ca Sĩ</li>
                            </ul>
                        </div>
                        <div className="container__personal--wrapper-item active">
                            <div className="container__personal--control">
                                <div className="personal__title--left">
                                    <span>Bài Hát</span>
                                    <i className="bi bi-chevron-right"></i>
                                </div>
                                <div className="personal__title--right">
                                    <button>
                                        <i className="bi bi-play-fill"></i>
                                        Phát Tất Cả
                                    </button>
                                </div>
                            </div>
                            <div className="container__personal--song">
                                <div className="personal__song--animate">
                                    <ul className="song__animate-img">
                                        <li className="song__animate-img--item first">
                                            <img
                                                src="https://vangiau-cover.vercel.app/img/TinhAnh.jpg"
                                                alt=""
                                            />
                                        </li>
                                        <li className="song__animate-img--item second">
                                            <img
                                                src="https://vangiau-cover.vercel.app/img/ThichThiDen.jpg"
                                                alt=""
                                            />
                                        </li>
                                        <li className="song__animate-img--item third">
                                            <img
                                                src="https://vangiau-cover.vercel.app/img/TapCoDon.jpg"
                                                alt=""
                                            />
                                        </li>
                                        <li className="song__animate-img--item third">
                                            <img
                                                src="https://vangiau-cover.vercel.app/img/HoaBangLangRemix.jpg"
                                                alt=""
                                            />
                                        </li>
                                        <li className="song__animate-img--item third">
                                            <img
                                                src="https://vangiau-cover.vercel.app/img/TrucXinh.jpg"
                                                alt=""
                                            />
                                        </li>
                                        <li className="song__animate-img--item third">
                                            <img
                                                src="https://vangiau-cover.vercel.app/img/DungNoiLoiChiaTayKhiEmVanConYeu.jpg"
                                                alt=""
                                            />
                                        </li>
                                    </ul>
                                </div>
                                <div className="personal__song--list">
                                    <div className="personal__song--list-item active">
                                        <div className="song__list-item--left">
                                            <i className="bi bi-music-note-beamed"></i>
                                            <div className="song__list-item--left-thumbnail">
                                                <div className="music-play__wave active">
                                                    <div className="music-play__wave-item"></div>
                                                    <div className="music-play__wave-item"></div>
                                                    <div className="music-play__wave-item"></div>
                                                </div>
                                                <img src={ImaIcon3} alt="#"/>
                                            </div>
                                            <div className="list-item__left--card-info">
                                                <span className="card-info__title">Hello World</span>
                                                <span className="card-info__subtitle">Alan Walker</span>
                                            </div>
                                        </div>
                                        <div className="song__list-item--content">
                                            <span>Hello World (Single)</span>
                                        </div>
                                        <div className="song__list-item--right">
                                            <span>04:50</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container__personal--wrapper-item active">
                            <div className="container__personal--control">
                                <div className="personal__title--left">
                                    <span>Playlist</span>
                                    <i className="bi bi-chevron-right"></i>
                                </div>
                                <div className="personal__title--right">
                                    <div className="playlist__popular--arrow playlist-personal">
                                        <i className="bi bi-arrow-left"></i>
                                        <i className="bi bi-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="song-side__playlist--carousel playlist">

                            </div>
                        </div>
                        <div className="container__personal--wrapper-item active">
                            <div className="container__personal--control">
                                <div className="personal__title--left">
                                    <span>Album</span>
                                    <i className="bi bi-chevron-right"></i>
                                </div>
                                <div className="personal__title--right">
                                    <div className="playlist__popular--arrow album-personal">
                                        <i className="bi bi-arrow-left"></i>
                                        <i className="bi bi-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="song-side__playlist--carousel album">

                            </div>
                        </div>
                        <div className="container__personal--wrapper-item active">
                            <div className="container__personal--control">
                                <div className="personal__title--left">
                                    <span>MV</span>
                                    <i className="bi bi-chevron-right"></i>
                                </div>
                                <div className="personal__title--right">
                                    <div className="playlist__popular--arrow mv-personal">
                                        <i className="bi bi-arrow-left"></i>
                                        <i className="bi bi-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="song-side__playlist--carousel mv">
                                <div className="playlist__mv-item">
                                    <div className="playlist__mv-item--video">
                                        <video id="video"
                                               src="https://api.mp3.zing.vn/api/streaming/video/ZWBICDCO/1080"
                                               width="330" height="186" controls
                                               poster="https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_webp/thumb_video/d/6/e/6/d6e6201323fed8fb16886a3f428fc4f7.jpg">
                                        </video>
                                    </div>
                                    <div className="playlist__mv-item--info">
                                        <div className="mv-item__info--thumbnail">
                                            <img
                                                src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/5/a/b/45ab1296d73b215629fcbab092687d4c.jpg"
                                                alt=""/>
                                        </div>
                                        <div className="mv-item__info--content">
                                            <div className="info__content-title">Túp Liều Vàng</div>
                                            <div className="info__content-subtitle">Nguyễn Đình Vũ</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container__personal--wrapper-item active">
                            <div className="container__personal--control">
                                <div className="personal__title--left">
                                    <span>Ca Sĩ</span>
                                    <i className="bi bi-chevron-right"></i>
                                </div>
                                <div className="personal__title--right">
                                    <div className="playlist__popular--arrow singer-personal">
                                        <i className="bi bi-arrow-left"></i>
                                        <i className="bi bi-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="song-side__playlist--carousel singer">
                                <div className="playlist__singer-item">
                                    <img
                                        src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/huong-ly.png"
                                        alt="#"/>
                                    <div className="playlist__singer-item--btn">
                                        <i className="bi bi-check-lg"></i>
                                        <span>Đã quan tâm</span>
                                    </div>
                                </div>
                                <div className="playlist__singer-item">
                                    <img
                                        src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/karik.png"
                                        alt="#"/>
                                    <div className="playlist__singer-item--btn">
                                        <i className="bi bi-check-lg"></i>
                                        <span>Đã quan tâm</span>
                                    </div>
                                </div>
                                <div className="playlist__singer-item">
                                    <img
                                        src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/justatee.png"
                                        alt="#"/>
                                    <div className="playlist__singer-item--btn">
                                        <i className="bi bi-check-lg"></i>
                                        <span>Đã quan tâm</span>
                                    </div>
                                </div>
                                <div className="playlist__singer-item">
                                    <img
                                        src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/hoa-minzy.png"
                                        alt="#"/>
                                    <div className="playlist__singer-item--btn">
                                        <i className="bi bi-check-lg"></i>
                                        <span>Đã quan tâm</span>
                                    </div>
                                </div>
                                <div className="playlist__singer-item">
                                    <img
                                        src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/onlyc.png"
                                        alt="#"/>
                                    <div className="playlist__singer-item--btn">
                                        <i className="bi bi-check-lg"></i>
                                        <span>Đã quan tâm</span>
                                    </div>
                                </div>
                                <div className="playlist__singer-item">
                                    <img
                                        src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/mr-siro.png"
                                        alt="#"/>
                                    <div className="playlist__singer-item--btn">
                                        <i className="bi bi-check-lg"></i>
                                        <span>Đã quan tâm</span>
                                    </div>
                                </div>
                                <div className="playlist__singer-item">
                                    <img
                                        src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/chi-dan.png"
                                        alt="#"/>
                                    <div className="playlist__singer-item--btn">
                                        <i className="bi bi-check-lg"></i>
                                        <span>Đã quan tâm</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="song-side__container">
                    <div className="song-side__container--slider">
                        <div className="swiper swiper__banner">
                            Additional required wrapper
                            <div className="swiper-wrapper">
                                Slides
                                <div className="swiper-slide">
                                    <img
                                        src="https://avatar-ex-swe.nixcdn.com/slideshow-web/2022/04/19/f/7/0/6/1650339221004.jpg"
                                        alt=""/>
                                </div>
                                <div className="swiper-slide">
                                    <img
                                        src="https://avatar-ex-swe.nixcdn.com/slideshow-web/2022/04/21/4/0/f/1/1650511092735.jpg"
                                        alt=""/>
                                </div>
                                <div className="swiper-slide">
                                    <img
                                        src="https://avatar-ex-swe.nixcdn.com/slideshow-web/2022/04/22/f/4/8/8/1650627480162.jpg"
                                        alt=""/>
                                </div>
                                <div className="swiper-slide">
                                    <img
                                        src="https://avatar-ex-swe.nixcdn.com/slideshow-web/2022/04/19/f/7/0/6/1650365706875.jpg"
                                        alt=""/>
                                </div>
                            </div>
                            <div className="swiper-pagination"></div>
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                            <div className="swiper-scrollbar"></div>
                        </div>
                    </div>
                    <div className="song-side__playlist">
                        <div className="song-side__playlist--popular">
                            <div className="playlist__popular--title">Radio Nổi Bật</div>
                            <div className="playlist__popular--arrow">
                                <i className="bi bi-arrow-left" id="left-scroll-playlist"></i>
                                <i className="bi bi-arrow-right" id="right-scroll-playlist"></i>
                            </div>
                        </div>
                        <div className="song-side__playlist--carousel radio">
                            <a className="playlist__carousel-item--circle">
                                <div className="carousel-item__circle--img">
                                    <img
                                        src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/1/4/6/b/146b49d11cc9b3bc591823bfedb8bce2.jpg"
                                        alt="#"
                                    />
                                    <i className="bi bi-play-circle"></i>
                                </div>
                                <div className="carousel-item__circle--host">
                                    <img
                                        src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/f/d/7/9/fd79808d2180de9a421afa6aff38953e.jpg"
                                        alt="#"
                                    />
                                </div>
                                <div className="carousel-item__circle--title">VPOP</div>
                                <div className="carousel-item__circle--subtitle">900 đang nghe</div>
                            </a>
                            <a className="playlist__carousel-item--circle">
                                <div className="carousel-item__circle--img">
                                    <img
                                        src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/4/7/4/d/474d782672bcbaaac54100ceb4ccf31d.jpg"
                                        alt="#"
                                    />
                                    <i className="bi bi-play-circle"></i>
                                </div>
                                <div className="carousel-item__circle--host">
                                    <img
                                        src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/0/8/2/5/0825d8cd559dee502625a25d540c636a.jpg"
                                        alt="#"
                                    />
                                </div>
                                <div className="carousel-item__circle--title">XONE Radio</div>
                                <div className="carousel-item__circle--subtitle">521 đang nghe</div>
                            </a>
                            <a className="playlist__carousel-item--circle">
                                <div className="carousel-item__circle--img">
                                    <img
                                        src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/4/8/c/e/48cefd41cfc03533d52303190f47e6ef.jpg"
                                        alt="#"
                                    />
                                    <i className="bi bi-play-circle"></i>
                                </div>
                                <div className="carousel-item__circle--host">
                                    <img
                                        src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/1/3/0/5/1305cd954d22d89fef4354301613fd68.jpg"
                                        alt="#"
                                    />
                                </div>
                                <div className="carousel-item__circle--title">Bolero</div>
                                <div className="carousel-item__circle--subtitle">550 đang nghe</div>
                            </a>
                            <a className="playlist__carousel-item--circle">
                                <div className="carousel-item__circle--img">
                                    <img
                                        src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/f/2/2/bf223818f85e7fe129091b415038ca6c.jpg"
                                        alt="#"
                                    />
                                    <i className="bi bi-play-circle"></i>
                                </div>
                                <div className="carousel-item__circle--host">
                                    <img
                                        src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/b/f/3/b/bf3bf87a788a5d0b8719c6feee774a2e.jpg"
                                        alt="#"
                                    />
                                </div>
                                <div className="carousel-item__circle--title">Rap Việt</div>
                                <div className="carousel-item__circle--subtitle">1k đang nghe</div>
                            </a>
                            <a className="playlist__carousel-item--circle">
                                <div className="carousel-item__circle--img">
                                    <img
                                        src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/f/b/0/efb05fb9097a7057aecef6ecb62bff5a.jpg"
                                        alt="#"
                                    />
                                    <i className="bi bi-play-circle"></i>
                                </div>
                                <div className="carousel-item__circle--host">
                                    <img
                                        src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/0/9/9/3/0993b3110c60ba6518fceeba9913d20d.jpg"
                                        alt="#"
                                    />
                                </div>
                                <div className="carousel-item__circle--title">Acoustic</div>
                                <div className="carousel-item__circle--subtitle">767 đang nghe</div>
                            </a>
                            <a className="playlist__carousel-item--circle">
                                <div className="carousel-item__circle--img">
                                    <img
                                        src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/d/4/f/f/d4ffcd5734d4dae6266fec08719324f0.jpg"
                                        alt="#"
                                    />
                                    <i className="bi bi-play-circle"></i>
                                </div>
                                <div className="carousel-item__circle--host">
                                    <img
                                        src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/b/0/d/a/b0da7c8ecd6521337682f3a86fa0170f.jpg"
                                        alt="#"
                                    />
                                </div>
                                <div className="carousel-item__circle--title">US-UK</div>
                                <div className="carousel-item__circle--subtitle">882 đang nghe</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default MainSideBar;