import React,{useState} from 'react';
import {
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Dropdown,
} from "reactstrap";

const User = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const user = props.user;
  return (
    <tr key={user.id}>
      <td>{user.user_id}</td>
     
      <td>{user.user_name}</td>
      <td>{user.user_email}</td>
      <td>{user.user_mobile} </td>
      <td>
        <Dropdown
          toggle={() => {
            setDropdownOpen(!dropdownOpen);
          }}
          isOpen={dropdownOpen}
          className="modal_Dropdown"
        >
          <DropdownToggle className="dropdown_btn">
          </DropdownToggle>
          <DropdownMenu>
            <span onClick={() => props.openEditModal(user.id)}>
              <DropdownItem>
               
                Edit
              </DropdownItem>
            </span>
 
            <DropdownItem onClick={() => UserModal(user.id)}>
          
              Details
            </DropdownItem>
  
          </DropdownMenu>
        </Dropdown>
      </td>
    </tr>
  );
}

export default User