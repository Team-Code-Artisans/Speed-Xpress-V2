import { FiPackage } from "react-icons/fi"
import { MdShareLocation } from "react-icons/md"
import { RiCustomerService2Line } from "react-icons/ri"

const Feature = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 pb-20">
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:py-12 lg:px-8 border border-gray-200 dark:border-gray-800 rounded-2xl">
        <div className="flex md:flex-row flex-col justify-between sm:flex-row gap-8">
          <h2 className="lg:text-4xl font-bold text-4xl lg:max-w-md">
            Deliver Your <span className="text-primary">Logistic</span> Safely &
            Quickly
          </h2>
          <div className="flex justify-start lg:justify-center items-center">
            <span className="w-1 h-16 bg-primary mr-4"></span>
            <p className="text-lg font-medium max-w-sm text-gray-500">
              This is reason why you should use our service instead of using
              other shipping agency.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="block bg-gray-50 dark:bg-gray-900 rounded-lg p-8 pr-10 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10">
            <FiPackage className="text-4xl text-primary" />

            <h2 className="mt-4 text-2xl font-semibold mb-5">
              Always Protected Your Packages
            </h2>

            <p className="mt-1 text-sm mb-3 text-gray-500">
              We will guarantee the safety of your Packages from the time the
              goods are delivered to their destination
            </p>
          </div>

          <div className="block bg-gray-50 dark:bg-gray-900 rounded-lg p-8 pr-10 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10">
            <MdShareLocation className="text-4xl text-primary" />

            <h2 className="mt-4 text-2xl font-semibold mb-5">
              You Can Live Tracking Your Package
            </h2>

            <p className="mt-1 text-sm mb-3 text-gray-500">
              You can monitor your goods easily, precisely and in real time
              anywhere and anytime.
            </p>
          </div>

          <div className="block bg-gray-50 dark:bg-gray-900 rounded-lg p-8 pr-10 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10">
            <RiCustomerService2Line className="text-4xl text-primary" />

            <h2 className="mt-4 text-2xl font-semibold mb-5">
              Out Customer Service Will Be There For 24/7
            </h2>

            <p className="mt-1 text-sm mb-3 text-gray-500">
              We provide customer service that will serve you if you have a
              problem with your packages.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature
