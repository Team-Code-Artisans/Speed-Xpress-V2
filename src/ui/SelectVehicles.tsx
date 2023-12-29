import { vehicleData } from "@/data/vehicleData";
import { VehiclePropsType } from "@/types/FormTypes";
import { Select, SelectItem } from "@nextui-org/react";

const SelectVehicles = ({ vehicle, setVehicle, variant }: VehiclePropsType) => {
  return (
    <Select
      isRequired
      disallowEmptySelection
      label="Vehicle Type"
      variant={variant}
      placeholder="Select a Vehicle"
      selectedKeys={[vehicle]}
      className="w-full"
      onChange={(e) => setVehicle(e.target.value)}
    >
      {vehicleData.map((vehicle) => (
        <SelectItem key={vehicle.name} value={vehicle.name}>
          {vehicle.name}
        </SelectItem>
      ))}
    </Select>
  );
};

export default SelectVehicles;
