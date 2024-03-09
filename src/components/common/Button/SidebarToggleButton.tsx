import styled from '@emotion/styled';
import { Button } from 'bmates-ui';

import { useSidebarStore } from '@/stores/sidebar';

import { ReactComponent as HanburgerMenuIcon } from '@/assets/icons/menu.svg';

const SidebarToggleButton = () => {
  const { isOpen, setIsOpen } = useSidebarStore();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <IconButton variant="outline" onClick={handleClick}>
      <HanburgerMenuIcon width="16" height="16" strokeWidth="1" />
    </IconButton>
  );
};
export default SidebarToggleButton;

const IconButton = styled(Button)`
  padding: 0.5rem;
`;
