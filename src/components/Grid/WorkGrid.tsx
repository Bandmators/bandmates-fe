import styled from '@emotion/styled';

import { minContainer } from '@/libs/media';

const WorkGrid = {
  Main: styled.div`
    width: 100%;
    ${minContainer.tablet('dashboard-container')} {
      width: calc(100% - 15.5rem);
    }
  `,
  Sub: styled.div`
    margin-left: 0px;
    min-width: 100%;
    flex: 0 0 auto;
    ${minContainer.tablet('dashboard-container')} {
      margin-left: auto;
      min-width: 14rem;
      flex: 0 0 14rem;
    }
  `,
};
export default WorkGrid;
