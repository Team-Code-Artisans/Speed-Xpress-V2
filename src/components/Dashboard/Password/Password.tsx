import Image from "next/image";
import PasswordForm from "./PasswordForm";

const Password = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-6 lg:py-20 py-10">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="flex flex-col gap-8 bg-gray-200 dark:bg-gray-900 p-8 rounded-lg max-w-[40rem] w-full h-full">
          <div className="flex justify-between items-center gap-4">
            <h1 className="text-xl sm:text-2xl font-semibold whitespace-nowrap">
              RESET
              <span className="text-primary"> PASSWORD</span>
            </h1>
          </div>

          {/* Reset form */}
          <PasswordForm />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={"/assets/images/reset.png"}
            width={600}
            height={600}
            alt="reset"
            className="w-[30rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Password;
