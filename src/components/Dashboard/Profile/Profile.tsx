import Image from "next/image";
import UpdateProfileButton from "./UpdateProfileButton";

const Profile = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 lg:py-20 py-10">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="flex flex-col gap-8 bg-gray-200 dark:bg-gray-900 p-8 rounded-lg max-w-[40rem] w-full h-full">
          <div className="flex justify-between items-center gap-4">
            <h1 className="text-xl sm:text-2xl font-semibold whitespace-nowrap">
              PROFILE
              <span className="text-primary"> INFO</span>
            </h1>
            <UpdateProfileButton />
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <h1 className="text-lg sm:text-xl whitespace-nowrap">Name</h1>
            </div>
            <div>
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <h1 className="text-lg sm:text-xl whitespace-nowrap">Name</h1>
            </div>
            <div>
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <h1 className="text-lg sm:text-xl whitespace-nowrap">Name</h1>
            </div>
            <div>
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <h1 className="text-lg sm:text-xl whitespace-nowrap">Name</h1>
            </div>
            <div>
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <h1 className="text-lg sm:text-xl whitespace-nowrap">Name</h1>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={"/assets/images/profile.png"}
            width={600}
            height={600}
            alt="profile"
            className="w-[30rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
