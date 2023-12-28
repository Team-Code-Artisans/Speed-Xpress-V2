import api from "../axios";
import { requestHandler } from "../requestHandler";

export const postJwt = requestHandler<string, string>((data) =>
  api.post("/jwt", data)
);
