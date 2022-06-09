import React from "react";
import Button from "../Button/Button";
import { BsPlusLg } from "react-icons/bs";

const Tenants = () => {
  return (
    <div>
      <Button
        label="Add Tenant"
        type="sucess"
        icon={<BsPlusLg />}
        onClick={() => alert("Tenants")}
      />
    </div>
  );
};

export default Tenants;
