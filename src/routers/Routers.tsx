import MainRouter from "./MainRouter";
import AuthRouter from "./AuthRouter";

const Routers = () => {
  return 1 < 2 ? <AuthRouter /> : <MainRouter />;
};

export default Routers;
