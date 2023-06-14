import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineShop,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GoSignOut } from "react-icons/go";
import { MdInsertEmoticon, MdPayment } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider";
import MerchantDropDrown from "./MerchantDropdown";

const MerchantNav = ({ mobile }) => {
  return (
    <>
      <li>
        <NavLink
          to="/dashboard/merchant"
          className={({ isActive }) =>
            `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 ${mobile ? `text-black` : "text-gray-100"
            } ${isActive && `text-rose-600`}}`
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/merchant/deliveries"
          className={({ isActive }) =>
            `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 ${mobile ? `text-black` : "text-gray-100"
            } ${isActive && `text-rose-600`}}`
          }
        >
          Deliveries
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/merchant/invoices"
          className={({ isActive }) =>
            `font-medium tracking-wide  transition-colors duration-200 hover:text-orange-600 hover:underline underline-offset-4 ${mobile ? `text-black` : "text-gray-100"
            } ${isActive && `text-rose-600`}}`
          }
        >
          Invoices
        </NavLink>
      </li>
      <li>
        <Link
          to={"/dashboard/merchant/create-parcel"}
          className="bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-lg"
        >
          Create Parcel
        </Link>
      </li>
      <li>
        <MerchantDropDrown />
      </li>
    </>
  );
};

export default MerchantNav;
