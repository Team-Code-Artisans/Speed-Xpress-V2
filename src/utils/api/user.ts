import { UserDataType, UserType } from "@/types/UserType";
import api from "../axios";
import { requestHandler } from "../requestHandler";

export const getAllUsers = requestHandler<void, UserDataType[]>(() =>
  api.get(`/users/all-users`)
);

export const getSingleUser = requestHandler<string, UserDataType>((email) =>
  api.get(`/users?email=${email}`)
);

export const saveUser = requestHandler<UserType, UserType>((data) =>
  api.post("/users/create-user", data)
);

export const updateUser = requestHandler<UserType, UserType>((data) =>
  api.put("/users/update-user", data)
);

export const deleteUser = requestHandler<string, UserType>((id) =>
  api.delete(`/users/:${id}`)
);
