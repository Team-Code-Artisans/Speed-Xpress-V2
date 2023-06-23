import React from 'react'
import Logistics from '../../Assets/Images/logisticsfeature.png'

const AboutUs = () => {
    return (
        <div className='py-20'>

            <div className="pb-20">
                <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
                    <div className="lg:bg-gray-50 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
                        <div className="md:5/12 lg:w-1/2">
                            <img
                                src={Logistics}
                                alt="image"
                                loading="lazy"
                                width=""
                                height=""
                            />
                        </div>
                        <div className="md:7/12 lg:w-1/2">
                            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark">
                                Create an efficient and user-friendly platform for managing logistics operations.
                            </h2>
                            <p className="my-8 text-gray-600 dark:text-gray-300">
                                A logistics website is an online platform that is specifically designed to facilitate the management and coordination of various logistics activities within a supply chain. It serves as a centralized hub where stakeholders, including customers, suppliers, manufacturers, and logistics providers, can access and interact with relevant information and tools.
                            </p>
                            <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
                                <div className="mt-8 flex gap-4 md:items-center">
                                    <div className="w-12 h-12 flex gap-4 rounded-full bg-orange-100 dark:bg-orange-900/20">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 m-auto text-orange-500 dark:text-orange-400">
                                            <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="w-5/6">
                                        <h4 className="font-semibold text-lg text-gray-700 dark:text-orange-300">Automated Notifications</h4>
                                        <p className="text-gray-500 dark:text-gray-400">Automated notifications and updates regarding shipment status</p>
                                    </div>
                                </div>
                                <div className="pt-4 flex gap-4 md:items-center">
                                    <div className="w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 m-auto text-teal-600 dark:text-teal-400">
                                            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="w-5/6">
                                        <h4 className="font-semibold text-lg text-gray-700 dark:text-teal-300">Real Time Location</h4>
                                        <p className="text-gray-500 dark:text-gray-400">Manage the geographical aspects of their logistics operations</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="md:bg-gray-50 rounded-[4rem] text-gray-700 py-12 lg:mx-16 px-4">
                <div tabIndex={0} aria-label="group of cards" className="focus:outline-none px-4 lg:px-0">
                    <div className="mx-auto container flex flex-wrap px-2 lg:px-24">
                        <div tabIndex={0} aria-label="card 1" className="focus:outline-none flex sm:w-full md:w-1/2 lg:border-r-2 md:border-r-2 sm:border-r-0 border-orange-400 pb-10 lg:pt-10">
                            <div className="mr-5 hidden md:block">
                                <img src="https://img.icons8.com/?size=1x&id=83Qu3wqaSoKV&format=png" alt="drawer" />
                            </div>
                            <div className="md:w-9/12 lg:w-9/12">
                                <h2 tabIndex={0} className="focus:outline-none text-lg font-bold leading-5">Streamline Operations</h2>
                                <p tabIndex={0} className="focus:outline-none text-base leading-normal xl:w-10/12 pt-2">The website should aim to streamline logistics processes, such as inventory management, order tracking, and delivery scheduling. By centralizing and automating these tasks, the goal is to reduce errors, improve efficiency, and save time and resources.</p>
                            </div>
                        </div>
                        <div tabIndex={0} aria-label="card 2" className="focus:outline-none flex sm:w-full md:w-1/2 lg:pb-10 lg:pt-10">
                            <div className="sm:ml-0 md:ml-10 lg:ml-10 mr-5 hidden md:block">
                                <img src="https://img.icons8.com/?size=1x&id=xazBlgkNTu6a&format=png" alt="check" />
                            </div>
                            <div className="md:w-9/12 lg:w-9/12 ">
                                <h2 tabIndex={0} className="focus:outline-none text-lg font-bold leading-5">Enhance Visibility</h2>
                                <p tabIndex={0} className="focus:outline-none text-base leading-normal xl:w-10/12 pt-2">The website should provide real-time visibility into the logistics process, allowing users to track shipments, monitor inventory levels, and receive notifications and updates. The goal is to provide transparency and enable stakeholders to make informed decisions based on accurate and up-to-date information.</p>
                            </div>
                        </div>
                        <div tabIndex={0} aria-label="card 3" className="focus:outline-none flex sm:w-full md:w-1/2 lg:border-t-2 md:border-t-2 sm:border-t-0 lg:border-r-2 md:border-r-2 sm:border-r-0 border-orange-400 pt-10 lg:pb-20">
                            <div className="mr-5 hidden md:block">
                                <img src="https://img.icons8.com/?size=1x&id=55HA7rVy08xX&format=png" alt="html-tag" />
                            </div>
                            <div className="md:w-9/12 lg:w-9/12 ">
                                <h2 tabIndex={0} className="focus:outline-none text-lg font-bold leading-5">Improve Customer Experience</h2>
                                <p tabIndex={0} className="focus:outline-none text-base leading-normal xl:w-10/12 pt-2"> The website should prioritize the customer experience by offering features such as easy online ordering, clear shipment tracking, and responsive customer support. The goal is to provide a seamless and satisfying experience for customers, leading to increased customer satisfaction and loyalty.</p>
                            </div>
                        </div>
                        <div tabIndex={0} aria-label="card 4" className="focus:outline-none flex sm:w-full md:w-1/2 lg:border-t-2 md:border-t-2 sm:border-t-0 border-orange-400 pt-10 lg:pb-20">
                            <div className="sm:ml-0 md:ml-10 lg:ml-10 mr-5 hidden md:block">
                                <img src="https://img.icons8.com/?size=1x&id=FSapuq8PdZKX&format=png" alt="display" />
                            </div>
                            <div className="md:w-9/12 lg:w-9/12 ">
                                <h2 tabIndex={0} className="focus:outline-none text-lg font-bold leading-5">Optimize Supply Chain</h2>
                                <p tabIndex={0} className="focus:outline-none text-base leading-normal xl:w-10/12 pt-2">The website should enable effective management of the supply chain, including inventory control, warehouse management, and transportation planning. The goal is to optimize the flow of goods, reduce costs, minimize stockouts, and improve overall supply chain performance.</p>
                            </div>
                        </div>
                        <div tabIndex={0} aria-label="card 3" className="focus:outline-none flex sm:w-full md:w-1/2 lg:border-t-2 md:border-t-2 sm:border-t-0 lg:border-r-2 md:border-r-2 sm:border-r-0 border-orange-400 pt-10 lg:pb-20">
                            <div className="mr-5 hidden md:block">
                                <img src="https://img.icons8.com/?size=1x&id=1609&format=png" alt="html-tag" />
                            </div>
                            <div className="md:w-9/12 lg:w-9/12 ">
                                <h2 tabIndex={0} className="focus:outline-none text-lg font-bold leading-5">Foster Collaboration</h2>
                                <p tabIndex={0} className="focus:outline-none text-base leading-normal xl:w-10/12 pt-2">The website should facilitate collaboration between various stakeholders, such as suppliers, manufacturers, distributors, and customers. The goal is to enable seamless communication, data sharing, and coordination to enhance overall logistics efficiency and effectiveness.</p>
                            </div>
                        </div>
                        <div tabIndex={0} aria-label="card 4" className="focus:outline-none flex sm:w-full md:w-1/2 lg:border-t-2 md:border-t-2 sm:border-t-0 border-orange-400 pt-10 lg:pb-20">
                            <div className="sm:ml-0 md:ml-10 lg:ml-10 mr-5 hidden md:block">
                                <img src="https://img.icons8.com/?size=1x&id=wDJdM2XOkMFO&format=png" alt="display" />
                            </div>
                            <div className="md:w-9/12 lg:w-9/12 ">
                                <h2 tabIndex={0} className="focus:outline-none text-lg font-bold leading-5">Provide Analytics and Insights</h2>
                                <p tabIndex={0} className="focus:outline-none text-base leading-normal xl:w-10/12 pt-2">The website should incorporate data analytics capabilities to generate meaningful insights and reports. The goal is to empower decision-makers with actionable information, enabling them to identify trends, make data-driven decisions, and continuously improve logistics operations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default AboutUs