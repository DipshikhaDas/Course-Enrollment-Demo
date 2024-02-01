import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { FormData } from "@/components/interfaces/FormDataInterface";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  userType: yup.string().required("User type is required"),
});

export const useRegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleRegistration = async (formData: FormData) => {
    try {
      const response = await axios.post(
        "http://192.168.13.126:3000/users/public/signup",
        formData
      );
      console.log(response.data);
      alert(`Signup successful`);
    } catch (error: any) {
      console.error(error);
      alert(`Signup failed: ${error?.response?.data?.message}`);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    handleRegistration,
  };
};
