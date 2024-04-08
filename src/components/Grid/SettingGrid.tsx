import styled from '@emotion/styled';

import { minContainer } from '@/libs/media';

const SettingGrid = {
  Menu: styled.div`
    flex: 0 0 auto;
    min-width: 100%;
    margin: 1rem 0rem;
    ${minContainer.tablet('dashboard-container')} {
      flex: 0 0 14rem;
      min-width: 12rem;
    }
    ${minContainer.desktop('dashboard-container')} {
      flex: 0 0 17rem;
      min-width: 17rem;
    }
  `,
  Content: styled.div`
    width: 100%;
    padding: 1rem;
    ${minContainer.tablet('dashboard-container')} {
      width: calc(100% - 15rem);
      margin-left: auto;
    }
    ${minContainer.desktop('dashboard-container')} {
      width: calc(100% - 18rem);
      margin-left: auto;
    }
  `,
};
export default SettingGrid;
