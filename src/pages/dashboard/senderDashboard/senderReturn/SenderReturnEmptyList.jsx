
const SenderReturnEmptyList = () => {
    return (
      
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-lg sm:text-center sm:mx-auto">
        <b
          className="inline-block mb-4"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
            <svg
              className="w-10 h-10 text-orange-600"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
        </b>
        <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          <span className="relative inline-block">
          <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-32 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="6b0188f3-b7a1-4e9b-b95e-cad916bb3042"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#6b0188f3-b7a1-4e9b-b95e-cad916bb3042)"
                width="52"
                height="24"
              />
            </svg>
           
          </span>{' '}
          Right Now you have no <span className="text-orange-600">Return</span> product
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Best wishes for your company , Be stay with <span className="text-orange-600 font-bold">speedXpress</span>
        </p>
        <hr className="my-8 border-gray-300" />
    
        
      </div>
    </div>
       
    );
};

export default SenderReturnEmptyList;