import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { FaQuoteRight } from "react-icons/fa";

const reviews = [
  {
    Name: "Michael Johnson",
    Profession: "Manufacturing Manager",
    ReviewDetails:
      "I've been using Speed Xpress for our logistics needs, and they have been an absolute game-changer. The website's user-friendly interface and real-time tracking have made it a breeze to manage our shipments. Highly recommend!",
    img: "/assets/images/man1.png",
  },
  {
    Name: "Sarah Thompson",
    Profession: "Small Business Owner",
    ReviewDetails:
      "I can't say enough good things about Speed Xpress. As a small business owner, their logistics services have been a lifesaver. Their attention to detail and commitment to customer satisfaction are unparalleled!",
    img: "/assets/images/women1.png",
  },
  {
    Name: "David Peterson",
    Profession: "Online Retailer",
    ReviewDetails:
      "Speed Xpress has revolutionized our shipping process. Their comprehensive logistics solutions have simplified our operations, allowing us to focus on growing our online retail business. We couldn't be happier with their services!",
    img: "/assets/images/man2.png",
  },
  {
    Name: "Jennifer Lee",
    Profession: "Freelance Designer",
    ReviewDetails:
      "I rely on Speed Xpress for all my shipping needs, and they never disappoint. Their logistics website is a dream to use - simple, intuitive, and efficient. Highly recommended for freelancers and small businesses!",
    img: "/assets/images/women2.png",
  },
];

const Review = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 pb-20 space-y-10">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold capitalize text-center">
        What our <span className="text-primary">client </span>says
      </h1>

      <div className="grid lg:grid-cols-2 gap-4">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="px-5 py-8 border dark:border-gray-800 border-gray-200 rounded shadow max-w-2xl"
          >
            <div className="block md:flex justify-center items-center gap-6">
              <Image
                width={600}
                height={600}
                src={review.img}
                alt="image"
                className="block w-32 object-cover h-32"
              />
              <div className="text-left">
                <div className="flex justify-between">
                  <p className="py-3.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <AiFillStar
                        key={star}
                        className="inline-block text-primary"
                      />
                    ))}
                  </p>
                  <FaQuoteRight size={"2rem"} className="text-primary" />
                </div>
                <p className="text-gray-600 text-sm">{review.ReviewDetails}</p>
                <h5 className="text-lg font-medium py-2.5">
                  By <span className="text-primary">{review.Name}</span>
                </h5>
                <p className="text-gray-600 text-sm">{review.Profession}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
