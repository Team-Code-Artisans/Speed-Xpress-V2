import { UpdateUserType, UserType } from "@/types/UserType";
import api from "../axios";
import { requestHandler } from "../requestHandler";

export const getAllUsers = requestHandler<void, UserType[]>(() =>
  api.get(`/users/all-users`)
);

export const getSingleUser = requestHandler<string, UserType>((email) =>
  api.get(`/users?email=${email}`)
);

export const getUserById = requestHandler<string, UserType>((id) =>
  api.get(`/users/${id}`)
);

export const saveUser = requestHandler<UserType, UserType>((data) =>
  api.post("/users/create-user", data)
);

export const updateUser = requestHandler<UpdateUserType, UserType>((params) => {
  const { id, data } = params || {};
  return api.put(`/users/update-user/${id}`, data);
});

export const deleteUserById = requestHandler<string, UserType>((id) =>
  api.delete(`/users/${id}`)
);
