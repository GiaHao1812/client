import MainRouter from "./MainRouter";
import AuthRouter from "./AuthRouter";
import { authSeletor, AuthState } from "../redux/reducers/auth";
import { useDispatch, useSelector } from "react-redux";

const Routers = () => {
  const auth: AuthState = useSelector(authSeletor);
  const dispatch = useDispatch();
  
  return !auth.token ? <AuthRouter /> : <MainRouter />;
};

export default Routers;
