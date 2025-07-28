
import { ApplicationRoutes } from "@/routes";
import Navbar from "@/component/common/Navbar";
// import { ApplicationRoutes } from '../routes';
function MainLayout() {
  return (
    <>
      <Navbar/>
      <div className="pt-15">
      <ApplicationRoutes />

      </div>
    </>
  );
}

export default MainLayout;
