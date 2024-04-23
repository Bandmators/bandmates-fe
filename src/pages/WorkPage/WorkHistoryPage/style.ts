import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
`;

export const H1 = styled.h1`
  margin-top: 0px;
`;

export const HistoryList = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HistoryListItem = styled.li`
  padding: 1rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid var(--gray-300);
  border-radius: 0.5rem;

  display: grid;
  grid-template-columns: 2.5fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    '. list-view'
    '. list-view';
  grid-gap: 4px;

  .list-view {
    grid-area: list-view;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
  }
`;

export const HistoryContentLink = styled(Link)`
  font-size: 1.125rem;
  font-weight: 500;
  /* margin-bottom: 0.5rem; */
  &:hover {
    text-decoration: underline;
  }
`;

export const HistoryFooter = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0rem;
`;
