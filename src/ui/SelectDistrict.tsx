import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { districtData } from "@/data/districtData";
import { DistrictType } from "@/types/FormTypes";

const SelectDistrict = ({ district, setDistrict }: DistrictType) => {
  return (
    <Autocomplete
      isRequired
      label="Select District"
      defaultItems={districtData}
      placeholder="Search district"
      defaultSelectedKey="Dhaka"
      className="max-w-xs"
      selectedKey={district}
      // @ts-ignore
      onSelectionChange={setDistrict}
    >
      {(item) => (
        <AutocompleteItem key={item.name}>{item.name}</AutocompleteItem>
      )}
    </Autocomplete>
  );
};

export default SelectDistrict;
