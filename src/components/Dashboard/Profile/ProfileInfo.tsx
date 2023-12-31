"use client";

import { useUserInfo } from "@/hooks/useUserInfo";
import Loading from "@/ui/Loading";

const ProfileInfo = () => {
  const { isLoading, userInfo } = useUserInfo();

  return (
    <>
      {isLoading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 sm:gap-8 gap-4">
            <>
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
                {userInfo?.name}
              </h1>
            </>
            <>
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <h1 className="text-lg sm:text-xl">{userInfo?.email}</h1>
            </>
            <>
              <label htmlFor="number" className="text-sm">
                Number
              </label>
              <h1 className="text-lg sm:text-xl whitespace-nowrap">
                {userInfo?.number}
              </h1>
            </>
            <>
              <label htmlFor="address" className="text-sm">
                Address
              </label>
              <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
                {userInfo?.address}
              </h1>
            </>
            <>
              <label htmlFor="division" className="text-sm">
                Division
              </label>
              <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
                {userInfo?.division}
              </h1>
            </>
            <>
              <label htmlFor="district" className="text-sm">
                District
              </label>
              <h1 className="text-lg sm:text-xl whitespace-nowrap capitalize">
                {userInfo?.district}
              </h1>
            </>
            <>
              <label htmlFor="account" className="text-sm">
                Account
              </label>
              <h1 className="text-lg sm:text-xl whitespace-nowrap uppercase text-primary font-semibold">
                {userInfo?.role}
              </h1>
            </>
          </div>
        </>
      )}
    </>
  );
};

export default ProfileInfo;
