import Image from "next/image"
import Link from "next/link"
import PrimaryButton from "../ui/PrimaryButton"
import SecondaryButton from "../ui/SecondaryButton"

const OrderPlace = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 pb-10">
      <div className="md:grid grid-cols-2 gap-10">
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold capitalize">
            Customers can place <span className="text-primary">Orders</span>{" "}
            online
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 text-gray-500 line-clamp-3">
            Customers can place orders online, streamlining the order process
            and reducing the need for manual intervention.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 md:justify-start">
            <PrimaryButton>
              <Link href={"/login"}>Get Stated</Link>
            </PrimaryButton>
            <SecondaryButton>
              <Link href={"/register"}>Order Now</Link>
            </SecondaryButton>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Image
            src={"/assets/images/section2.png"}
            width={600}
            height={600}
            alt="image"
            className="w-[30rem]"
          />
        </div>
      </div>
    </section>
  )
}

export default OrderPlace
