import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { divisionData } from "@/data/divisionData";

const SelectDivision = () => {
  return (
    <Autocomplete
      isRequired
      label="Select Division"
      defaultItems={divisionData}
      placeholder="Search division"
      defaultSelectedKey="Dhaka"
      className="max-w-xs"
    >
      {(item) => (
        <AutocompleteItem key={item.name}>{item.name}</AutocompleteItem>
      )}
    </Autocomplete>
  );
};

export default SelectDivision;
