import { LoadingType } from "@/types/LoadingType";
import { Spinner } from "@nextui-org/react";

const Loading = ({ size = "lg", color = "current" }: LoadingType) => {
  return <Spinner size={size} color={color} />;
};

export default Loading;
