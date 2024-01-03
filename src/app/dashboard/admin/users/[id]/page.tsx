import UserDetails from "@/components/Dashboard/Users/UserDetails";
import { getSingleUser } from "@/utils/api/user";
import { Divider } from "@nextui-org/react";
import Image from "next/image";

const UserDetailsPage = async ({ params }: { params: { id: string } }) => {
  const userResponse = await getSingleUser(params.id);

  return (
    <div className="lg:py-20 py-10 px-6 max-w-screen-xl mx-auto space-y-8">
      <h1 className="font-bold text-4xl">
        <span className="text-primary">USER</span> DETAILS
      </h1>
      <Divider />
      {userResponse.code === "success" && userResponse.data !== null ? (
        <UserDetails user={userResponse.data} />
      ) : (
        <div className="grid place-items-center">
          <Image
            className="w-[30rem]"
            src={"/assets/images/no_data.png"}
            width={600}
            height={600}
            alt="no data"
          />
          <h1 className="text-xl font-bold">CANNOT GET USER DATA</h1>
        </div>
      )}
    </div>
  );
};

export default UserDetailsPage;
