import { Button, message } from "antd";
import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/firebaseConfig";
import handleAPI from "../apis/handleAPI";
import { addAuth } from "../redux/reducers/authReducer";
import { localDataNames } from "../constants/appInfor";

const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
provider.setCustomParameters({
  login_hint: "giahaobanh2004@gmail.com",
});


interface Props {
  isRemember: boolean;
}
const SocialLogin = (props : Props) => {

  const {isRemember} = props;

  const [isLoading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleWithGoogle = async () => {
    setLoading(true);

    try {
      const result = await signInWithPopup(auth, provider);

      if (result) {
        const user = result.user;
       if(user){
         const data =  { 
             name: user.displayName,
             email: user.email,
         };

         const api = `/auth/google-login`;
         try {
          const res:any = await handleAPI(api ,  data , "post");
          message.success(res.message)
          dispatch(addAuth(res.data))
          
          
          if (isRemember) {
            localStorage.setItem(localDataNames.authData, JSON.stringify(res.data));
          }
         } catch (error:any) {
          console.log(error.message)
          message.error(error.message)
         }finally{
          setLoading(false)
         }
       }
      } else {
        console.log("Can not login with google");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button
        loading={isLoading}
        onClick={handleWithGoogle}
        style={{
          width: "100%",
        }}
        size="large"
        icon={
          <img
            width={24}
            height={24}
            src="https://img.icons8.com/fluency/48/google-logo.png"
            alt="google-logo"
          />
        }
      >
        Google
      </Button>
    </div>
  );
};

export default SocialLogin;
