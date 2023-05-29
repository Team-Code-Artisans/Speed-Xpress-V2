import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const ParcelList = () => {
    return (
        <div>
        
            {/* code of table for order list  */}


            <div>
            
            <div className="bg-white p-8 rounded-md w-full">
                <div className=" lg:flex items-center justify-between pb-6">
                    <div>
                        <h2 className="text-gray-600 font-semibold text-3xl">All Products <span className="text-orange-600">Order</span></h2>

                        <span className="text-xs">All products item</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex bg-gray-100 items-center p-2 rounded-md border w-60 lg:w-96">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fillRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clipRule="evenodd" />
                            </svg>
                            <input className="bg-gray-100 outline-none ml-1 block " type="text" name="" id="" placeholder="search by TRAKING ID ..."/>
                        </div>
                            <div className="lg:ml-5 ml-5 space-x-8">
                                <button className="bg-orange-600 hover:bg-orange-800 active:bg-gray-800 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer text-xs lg:text-base">Find order</button>
                            </div>
                        </div>
                </div>
                    <div>
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                <table className="min-w-full leading-normal overflow-scroll">

                                    {/* table header  */}

                                    <thead>
                                      <TableHeader></TableHeader>
                                    </thead>


                                    {/* table body  */}
                                    <tbody>
                                        <TableRow></TableRow>
                                        <TableRow></TableRow>
                                        <TableRow></TableRow>
                                        <TableRow></TableRow>
                                        <TableRow></TableRow>
                                        <TableRow></TableRow>
                                    </tbody>
                                </table>




                                <div
                                    className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                    <span className="text-xs xs:text-sm text-gray-900">
                                        Showing 1 to 10 of 50 orders
                                    </span>
                                    <div className="inline-flex mt-2 xs:mt-0">
                                        <button
                                            className="text-sm text-indigo-50 transition duration-150 hover:bg-orange-600 bg-gray-800 font-semibold py-2 px-4 rounded-l">
                                            Prev
                                        </button>
                                        &nbsp; &nbsp;
                                        <button
                                            className="text-sm text-indigo-50 transition duration-150 hover:bg-orange-600 bg-gray-800 font-semibold py-2 px-4 rounded-r">
                                            Next
                                        </button>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParcelList;