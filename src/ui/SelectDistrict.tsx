import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { districtData } from "@/data/districtData";

const SelectDistrict = () => {
  return (
    <Autocomplete
      isRequired
      label="Select Division"
      defaultItems={districtData}
      placeholder="Search your district"
      defaultSelectedKey="Dhaka"
      className="max-w-xs"
    >
      {(item) => (
        <AutocompleteItem key={item.name}>{item.name}</AutocompleteItem>
      )}
    </Autocomplete>
  );
};

export default SelectDistrict;
