import ThemeSwitch from "@/ui/ThemeSwitch";
import Image from "next/image";
import VerifyForm from "./VerifyForm";

const Settings = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-6 lg:py-20 py-10">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="bg-white dark:bg-gray-900 p-8 rounded-lg max-w-[40rem] w-full h-full grid lg:grid-cols-3 gap-x-4 gap-y-12">
          <div className="flex flex-col gap-8 col-span-2">
            <div className="flex justify-between items-center gap-4">
              <h1 className="text-xl sm:text-2xl font-semibold whitespace-nowrap">
                VERIFY
                <span className="text-primary"> ACCOUNT</span>
              </h1>
            </div>

            {/* Verify form */}
            <VerifyForm />
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex justify-between items-center gap-4">
              <h1 className="text-xl sm:text-2xl font-semibold whitespace-nowrap">
                DARK
                <span className="text-primary"> MODE</span>
              </h1>
            </div>

            {/* Switch theme */}
            <ThemeSwitch />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={"/assets/images/settings.png"}
            width={600}
            height={600}
            alt="settings"
            className="w-[30rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Settings;
