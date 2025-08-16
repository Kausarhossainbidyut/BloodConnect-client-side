import axios from "axios";

const useAxiosPublic = () => {
  const instance = axios.create({
    baseURL: "https://assignment12khb.vercel.app",
  });

  return instance;
};

export default useAxiosPublic;
