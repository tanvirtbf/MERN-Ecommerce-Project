import CommonForm from "@/components/common/form";
import { registerFormControls } from "@/config";
import { useToast } from "@/hooks/use-toast";
import { registerUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

const AuthRegister = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { toast } = useToast()

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(registerUser(formData)).then((data)=> {
      // console.log(data)
      if(data?.payload?.success) {
        toast({
          title : data?.payload?.message,
        })
        navigate('/auth/login')
      }
    })
  };

  console.log(formData)

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create new account
        </h1>
        <p className="mt-2">Already have an account?</p>
        <Link
          className="font-medium text-primary hover:underline ml-2"
          to={"/auth/login"}
        >
          Login
        </Link>
      </div>
      <CommonForm
        formControls={registerFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default AuthRegister;
