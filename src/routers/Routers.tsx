import { Spin } from "antd";
import MainRouter from "./MainRouter";
import AuthRouter from "./AuthRouter";
import { useEffect, useState } from "react";
import { localDataNames } from "../constants/appInfor";
import { addAuth, authSeletor, AuthState } from "../redux/reducers/authReducer";
import { useDispatch, useSelector } from "react-redux";

const Routers = () => {
  const [isLoading, setIsLoading] = useState(false);

  const auth: AuthState = useSelector(authSeletor);
  const dispatch = useDispatch();
  // console.log(auth);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = localStorage.getItem(localDataNames.authData);
    res && dispatch(addAuth(JSON.parse(res)));
  };

  return isLoading ? <Spin /> : !auth.token ? <AuthRouter /> : <MainRouter />;
};

export default Routers;
