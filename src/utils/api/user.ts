import api from "../axios";
import { requestHandler } from "../requestHandler";
import { UserType } from "@/types/UserType";

export const getAllUsers = requestHandler<void, UserType[]>(() =>
  api.get(`/users/all-users`)
);

export const getSingleUser = requestHandler<string, UserType>((email) =>
  api.get(`/users?email=${email}`)
);

export const saveUser = requestHandler<{}, UserType>((data) =>
  api.post("/users/create-user", data)
);

export const updateUser = requestHandler<{}, UserType>((data) =>
  api.put("/users/update-user", data)
);

export const deleteUser = requestHandler<string, UserType>((id) =>
  api.delete(`/users/:${id}`)
);
