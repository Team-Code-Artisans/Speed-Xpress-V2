import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { divisionData } from "@/data/divisionData";
import { DivisionType } from "@/types/DivisionType";

const SelectDivision = ({ division, setDivision }: DivisionType) => {
  return (
    <Autocomplete
      isRequired
      label="Select Division"
      defaultItems={divisionData}
      placeholder="Search division"
      defaultSelectedKey="Dhaka"
      className="max-w-xs"
      selectedKey={division}
      // @ts-ignore
      onSelectionChange={setDivision}
    >
      {(item) => (
        <AutocompleteItem key={item.name}>{item.name}</AutocompleteItem>
      )}
    </Autocomplete>
  );
};

export default SelectDivision;
