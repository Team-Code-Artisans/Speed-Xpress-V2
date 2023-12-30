import { districtData } from "@/data/districtData";
import { divisionData } from "@/data/divisionData";
import { DistrictPropsType } from "@/types/FormTypes";
import { Select, SelectItem } from "@nextui-org/react";

const SelectDistrict = ({
  division,
  district,
  setDistrict,
  variant = "bordered",
}: DistrictPropsType) => {
  // Find the division object
  const selectedDivision = divisionData.find(
    (divisionItem) => divisionItem.name === division
  );

  // Filter districts based on the selected division
  const filteredDistricts = districtData.filter(
    (item) => item.division_id === selectedDivision?.id
  );

  return (
    <Select
      isRequired
      disallowEmptySelection
      label="District"
      variant={variant}
      placeholder="Select a District"
      selectedKeys={[district]}
      className="w-full"
      onChange={(e) => setDistrict(e.target.value)}
    >
      {filteredDistricts.map((district) => (
        <SelectItem key={district.name} value={district.name}>
          {district.name}
        </SelectItem>
      ))}
    </Select>
  );
};

export default SelectDistrict;
