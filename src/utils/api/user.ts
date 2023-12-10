import api from "../axios";
import { requestHandler } from "../requestHandler";
import { User } from "@/types/UserType";

export const getAllUsers = requestHandler<string, User[]>(() =>
  api.get(`/users`)
);

export const getSingleUser = requestHandler<string, User>((email) =>
  api.get(`/users/${email}`)
);

export const saveUser = requestHandler<string, User>((data) =>
  api.post("/users", data)
);

export const updateUser = requestHandler<string, User>((data) =>
  api.put("/users", data)
);
