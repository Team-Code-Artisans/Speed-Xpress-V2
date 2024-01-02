import { SelectShopType } from "@/types/ShopType";
import { Select, SelectItem } from "@nextui-org/react";

const SelectShop = ({
  shop,
  shops,
  setShop,
  variant = "bordered",
}: SelectShopType) => {
  return (
    <Select
      isRequired
      disallowEmptySelection
      label="Select Shop"
      variant={variant}
      placeholder="Select a shop"
      selectedKeys={[shop]}
      className="w-full"
      onChange={(e) => setShop(e.target.value)}
    >
      {shops.map((shop) => (
        <SelectItem key={shop.name} value={shop.name}>
          {shop.name}
        </SelectItem>
      ))}
    </Select>
  );
};

export default SelectShop;
