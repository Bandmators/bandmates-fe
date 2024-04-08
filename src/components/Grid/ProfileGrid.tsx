import styled from '@emotion/styled';

import { minContainer } from '@/libs/media';

const ProfileGrid = {
  Profile: styled.div`
    margin-left: 0px;
    flex: 0 0 auto;
    min-width: 100%;
    ${minContainer.tablet('dashboard-container')} {
      flex: 0 0 18rem;
      min-width: 18rem;
    }
  `,
  Content: styled.div`
    width: 100%;
    ${minContainer.tablet('dashboard-container')} {
      width: calc(100% - 20rem);
      margin-left: auto;
    }
  `,
};
export default ProfileGrid;
