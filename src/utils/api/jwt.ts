import { JWTUserType } from "@/types/UserType";
import api from "../axios";
import { requestHandler } from "../requestHandler";

export const postJwt = requestHandler<JWTUserType, string>((data) =>
  api.post("/jwt", data)
);
