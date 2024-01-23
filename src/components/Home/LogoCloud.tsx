import Image from "next/image";

const LogoCloud = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 pb-20 space-y-10">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold capitalize text-center">
        Owr Awesome <span className="text-primary">Partners</span>
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="rounded-lg bg-white dark:bg-gray-900 py-2 px-4 flex items-center justify-center shadow-lg">
          <Image
            src={"/assets/images/logo/ajkerdeal.png"}
            className="w-40 h-18 contrast-200"
            width={600}
            height={600}
            alt="logo"
          />
        </div>
        <div className="rounded-lg bg-white dark:bg-gray-900 py-2 px-4 flex items-center justify-center shadow-lg">
          <Image
            src={"/assets/images/logo/paperfly.png"}
            className="w-48 h-18"
            width={600}
            height={600}
            alt="logo"
          />
        </div>
        <div className="rounded-lg bg-white dark:bg-gray-900 py-2 px-4 flex items-center justify-center shadow-lg">
          <Image
            src={"/assets/images/logo/daraz.png"}
            className="w-40 h-16"
            width={600}
            height={600}
            alt="logo"
          />
        </div>
        <div className="rounded-lg bg-white dark:bg-gray-900 py-2 px-4 flex items-center justify-center shadow-lg">
          <Image
            src={"/assets/images/logo/pathao.png"}
            className="w-40 h-18 contrast-200"
            width={600}
            height={600}
            alt="logo"
          />
        </div>
        <div className="rounded-lg bg-white dark:bg-gray-900 py-2 px-4 flex items-center justify-center shadow-lg">
          <Image
            src={"/assets/images/logo/redx.png"}
            className="w-40 h-16 contrast-200"
            width={600}
            height={600}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
