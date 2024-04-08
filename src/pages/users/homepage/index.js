import { memo } from "react"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import shirtImg from "../../../assets/users/images/categories/shirt_banner.jpg"
import "./style.scss"

const HomePage = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const sliderItems = [
        {
            bgImg: shirtImg,
            name: "Áo",
        },
        {
            bgImg: shirtImg,
            name: "Quần",
        },
        {
            bgImg: shirtImg,
            name: "Đồ thể thao",
        },
        {
            bgImg: shirtImg,
            name: "Đặc biệt",
        },
    ]
    return (
        <div className="container container__categories__slider">
            <Carousel responsive={responsive} className="categories__slider">
                {sliderItems.map((item, key) => (
                    <div className="categories__slider__item"
                        style={{ backgroundImage: `url(${item.bgImg})`, objectFit: "contain" }}
                        key={key}>
                        <p>{item.name}</p>
                    </div>
                ))}


            </Carousel>
        </div>



    )
}
export default memo(HomePage);