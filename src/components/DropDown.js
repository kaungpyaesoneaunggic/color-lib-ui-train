import React from "react";
import { Nav, Dropdown } from "react-bootstrap";

const DropdownMenu = () => {
  return (
    <Dropdown.Menu>
      <Dropdown.Item>Menu 1</Dropdown.Item>
      <Dropdown.Item>Menu 2</Dropdown.Item>
      <Dropdown.Item>Menu 3</Dropdown.Item>
    </Dropdown.Menu>
  );
};

export default DropdownMenu;