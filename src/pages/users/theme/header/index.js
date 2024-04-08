import { memo, useState } from "react"
import './style.scss'
import { BsFacebook, BsInstagram, BsFillPersonFill, BsCart2 } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom"
import { formartter } from "../../../../utils/formatter";
import { ROUTERS } from "../../../../utils/router";


const Header = () => {

    const [isShowCategories, setisShowCategories] = useState(true);

    const [menus,] = useState([
        {
            name: "Trang Chủ",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Cửa hàng",
            path: ROUTERS.USER.PRODUCTS,
        },
        {
            name: "Sản Phẩm",
            path: "",
            isShowSubMenu: false,
            child: [
                {
                    name: "Nam",
                    path: "",
                },
                {
                    name: "Nữ",
                    path: "",
                },
                {
                    name: "Trẻ em",
                    path: "",
                },
            ]
        },
        {
            name: "Bài Viết",
            path: "",
        },
        {
            name: "Liên Hệ",
            path: "",
        },

    ])

    return (
        <>
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-6 header__top_left">
                            <ul>
                                <li>ngoquangkhoa02@gmail.com</li>
                                <li>Miễn phí ship cho đơn từ {formartter(200000)}</li>
                            </ul>


                        </div>
                        <div className="col-6 header__top_right ">
                            <ul>
                                <li>
                                    <Link to={"https://facebook.com/kngo2k2"}>
                                        <BsFacebook />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <BsInstagram />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <BsFillPersonFill />
                                    </Link>
                                    <span>Đăng nhập</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-3">
                        <div className="header__logo">
                            <h1>BlackSun Shop</h1>

                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <nav className="header__menu">
                            <ul>
                                {menus?.map((menu, menuKey) => {
                                    return (
                                        <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                            <Link to={menu?.path}>{menu?.name}</Link>
                                            {
                                                menu.child && (
                                                    <ul className="header__menu__dropdown">
                                                        {menu.child.map((childItem, childKey) => (
                                                            <li key={`${menuKey}-${childKey}`}>
                                                                <Link to={childItem.path}>{childItem.name}</Link>
                                                            </li>
                                                        ))}
                                                        <li>
                                                            <Link></Link>
                                                        </li>
                                                    </ul>

                                                )
                                            }
                                        </li>
                                    );
                                })}
                            </ul>

                        </nav>
                    </div>
                    <div className="col-xl-3 col-lg-3">
                        <div className="header__cart">
                            <div className="header__cart__price">
                                <span>{formartter(100000000)}</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to="#">
                                        <BsCart2 /> <span>5</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
            <div className="container">
                <div className="row categories__container">
                    <div className="col-lg-3 categories">
                        <div className="categories__all" onClick={() => setisShowCategories(!isShowCategories)}>
                            <IoMenu />
                            Danh sách sản phẩm
                        </div>
                        <ul className={isShowCategories ? "" : "hidden"}>
                            <li>
                                <Link to="">Áo</Link>
                            </li>
                            <li>
                                <Link to="">Quần</Link>
                            </li>
                            <li>
                                <Link to="">Đầm và váy</Link>
                            </li>
                            <li>
                                <Link to="">Đồ bộ thể thao</Link>
                            </li>
                            <li>
                                <Link to="">Trang phục đặc biệt</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-9 search__container">
                        <div className="search__form">
                            <form>
                                <input type="name" value="" placeholder="Bạn đang tìm gì?"></input>
                                <button type="submit">Tìm kiếm</button>
                            </form>
                        </div>
                        <div className="search__phone">
                            <div className="search__phone__icon">
                                <FaPhone />
                            </div>
                            <div className="search__phone__text">
                                <p>0123.456.789</p>
                                <span>Hỗ trợ 24/7</span>

                            </div>
                        </div>
                        <div className="item">
                            <div className="item__text">
                                <span>Quần áo thời trang</span>
                                <h2>Thời thượng, phù hợp</h2>
                                <h2>với mọi đối tượng</h2>
                                <p>Miễn phí giao hàng tận nơi</p>
                                <Link to="" className="primary_btn">
                                    Mua ngay
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default memo(Header);