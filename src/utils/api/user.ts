import api from "../axios";
import { requestHandler } from "../requestHandler";
import { UserType } from "@/types/UserType";

export const getAllUsers = requestHandler<string, UserType[]>(() =>
  api.get(`/users`)
);

export const getSingleUser = requestHandler<string, UserType>((email) =>
  api.get(`/users/${email}`)
);

export const saveUser = requestHandler<{}, UserType>((data) =>
  api.post("/users", data)
);

export const updateUser = requestHandler<string, UserType>((data) =>
  api.put("/users", data)
);
