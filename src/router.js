import { ROUTERS } from "./utils/router";
import Homepage from "./pages/users/homepage";
import { Routes, Route } from "react-router-dom";
import MasterLayout from "./pages/users/theme/masterLayout";
import ProfilePage from "./pages/users/profilepage";

const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: Homepage, // Sử dụng tên component thay vì truyền vào JSX
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: ProfilePage // Sử dụng tên component thay vì truyền vào JSX
        }
    ];

    return (
        <MasterLayout>
            <Routes>
                {userRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={<item.component />} />
                ))}
            </Routes>
        </MasterLayout>
    );
}

const RouterCustom = () => {
    return renderUserRouter();
};

export default RouterCustom;
