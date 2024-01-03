import { UserType } from "@/types/UserType";
import { Divider } from "@nextui-org/react";

const UserDetails = ({ user }: { user: UserType }) => {
  return (
    <div className="grid md:grid-cols-2 gap-4 lg:gap-8">
      {/* User info */}
      <div className="space-y-4 p-6 sm:p-8 dark:bg-gray-900 bg-gray-200 rounded-lg">
        <h1 className="text-xl font-medium">USER INFO</h1>
        <Divider />
        <div>
          <label htmlFor="name" className="text-sm">
            Name:
          </label>
          <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
            {user?.name || ""}
          </h1>
        </div>
        <div>
          <label htmlFor="email" className="text-sm">
            Email:
          </label>
          <h1 className="text-lg sm:text-xl">{user?.email || ""}</h1>
        </div>
        <div>
          <label htmlFor="role" className="text-sm">
            User Role:
          </label>
          <h1 className="text-lg sm:text-xl uppercase">{user?.role || ""}</h1>
        </div>
        <div>
          <label htmlFor="user id" className="text-sm">
            User ID:
          </label>
          <h1 className="text-lg sm:text-xl">{user._id || ""}</h1>
        </div>
      </div>

      {/* Address info */}
      <div className="space-y-4 p-6 sm:p-8 dark:bg-gray-900 bg-gray-200 rounded-lg">
        <h1 className="text-xl font-medium">USER ADDRESS</h1>
        <Divider />
        <div>
          <label htmlFor="division" className="text-sm">
            Division:
          </label>
          <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
            {user?.division || ""}
          </h1>
        </div>
        <div>
          <label htmlFor="district" className="text-sm">
            District:
          </label>
          <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
            {user?.district || ""}
          </h1>
        </div>
        <div>
          <label htmlFor="address" className="text-sm">
            Address:
          </label>
          <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
            {user?.address || ""}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
