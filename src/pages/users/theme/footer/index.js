import { memo } from "react"
import './style.scss'
import { Link } from "react-router-dom"
import { BsFacebook, BsInstagram, BsFillPersonFill, BsCart2 } from "react-icons/bs"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer__about">
                            <h1 className="footer__about__logo">BlackSun Shop</h1>
                            <ul>
                                <li>Địa chỉ: 123 Thủ Đức</li>
                                <li>SĐT: 0848-977-898 </li>
                                <li>Email: ngoquangkhoa02@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="footer__widget">
                            <h6> Cửa hàng</h6>
                            <ul>
                                <li>
                                    <Link to="">Liên hệ</Link>
                                </li>
                                <li>
                                    <Link to="">Thông tin về chúng tôi</Link>
                                </li>
                                <li>
                                    <Link to="">Sản phẩm kinh doanh</Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Link to="">Thông tin tài khoản</Link>
                                </li>
                                <li>
                                    <Link to="">Giỏ hàng</Link>
                                </li>
                                <li>
                                    <Link to="">Danh sách ưa thích</Link>
                                </li>
                            </ul>


                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12">
                        <div className="footer__widget">
                            <h6>Khuyến mãi & ưu đãi</h6>
                            <p>Đăng ký nhận thông tin tại đây</p>
                            <form action="#">
                                <div className="input__group">
                                    <input type="text" placeholder="Nhập email"></input>
                                    <button type="submit" className="button__submit">Đăng ký</button>
                                </div>
                                <div className="footer__widget__social">
                                    <div>
                                        <BsFacebook />
                                    </div>
                                    <div>
                                        <BsInstagram />
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}
export default memo(Footer);