import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

function SortSelector() {
  return (
    <div style={{ paddingLeft: 10, paddingTop: 20 }}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order By: Relevance
        </MenuButton>
        <MenuList>
          <MenuItem>Hello</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}

export default SortSelector;
