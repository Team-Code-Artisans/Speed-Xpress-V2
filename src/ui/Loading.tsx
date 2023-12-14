import { LoadingType } from "@/types/LoadingType";
import { Spinner } from "@nextui-org/react";

const Loading = ({ size = "sm" }: LoadingType) => {
  return <Spinner size={size} color="current" />;
};

export default Loading;
