import React from "react";
import Button from "../Button/Button";
import { BsPlusLg } from "react-icons/bs";
import { useModal } from "../../hooks/useModal";
import Modal from "../Modal/Modal";
import { Table } from "./Table";
import { data } from "./data";
import "./Tenants.scss";

const Tenants = () => {
  const { isShown, toggle } = useModal();
  const content = <React.Fragment>Hey, I'm a model.</React.Fragment>;

  return (
    <div>
      <Button
        label="Add Tenant"
        type="sucess"
        icon={<BsPlusLg />}
        onClick={toggle}
        className="Tenants-button_margin"
      />
      <Modal
        isShown={isShown}
        hide={toggle}
        modalContent={content}
        headerText="Hola"
      />
      <Table data={data} />
    </div>
  );
};

export default Tenants;
