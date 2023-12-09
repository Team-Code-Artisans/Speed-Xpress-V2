import Image from "next/image"
import Link from "next/link"
import PrimaryButton from "../../ui/PrimaryButton"
import SecondaryButton from "../../ui/SecondaryButton"

const OrderNow = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 pb-20">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="grid grid-cols-2 gap-4 max-sm:order-last">
          <Image
            src={"/assets/images/worldwide.png"}
            className="rounded-full"
            width="640"
            height="640"
            alt="image 3"
          />
          <Image
            src={"/assets/images/cardboard.png"}
            className="rounded-xl"
            width="640"
            height="640"
            alt="image 2"
          />
          <div className="col-span-2 grid grid-cols-2">
            <div></div>
            <Image
              src={"/assets/images/mobile_truck.png"}
              className="rounded-xl"
              width="640"
              height="640"
              alt="image 3"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold capitalize">
            Order now and benefit up to{" "}
            <span className="text-blue-500">30% off</span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 text-gray-500 line-clamp-3">
            Users should be able to track the status of their payments within
            the website.
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
      </div>
    </section>
  )
}

export default OrderNow
