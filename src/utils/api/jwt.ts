import { JWTUserType } from "@/types/UserType";
import api from "../axios";
import { requestHandler } from "../requestHandler";

export const postJwt = requestHandler<JWTUserType, JWTUserType>((data) =>
  api.post("/jwt", data)
);
