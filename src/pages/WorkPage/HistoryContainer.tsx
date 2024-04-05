import styled from '@emotion/styled';
import { Button } from 'bmates-ui';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import AvatarMention from '@/components/common/Avatar/AvatarMention';
import { WorkHistoryType } from '@/types/work';
import { relativeTime } from '@/utils/time';

const HistoryContainer = () => {
  const [histories, setHistories] = useState<WorkHistoryType[]>([]);

  useEffect(() => {
    fetch('/api/work/0/history')
      .then(res => res.json())
      .then(data => {
        setHistories(data.histories);
      });
  }, []);

  return (
    <Container>
      <H1>History</H1>
      <HistoryList>
        {histories.map(history => (
          <HistoryListItem key={history.uid}>
            <HistoryContentLink to="" title={history.content}>
              {history.content}
            </HistoryContentLink>
            <AvatarMention userId={history.user.id} size="sm" />
            <div className="list-view">
              <span>{relativeTime(history.createdAt)}</span>
              <Button variant="outline">{history.uid}</Button>
            </div>
          </HistoryListItem>
        ))}
      </HistoryList>
    </Container>
  );
};
export default HistoryContainer;

const Container = styled.div`
  width: 100%;
`;

const H1 = styled.h1`
  margin-top: 0px;
`;

const HistoryList = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const HistoryListItem = styled.li`
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

// display: grid;
// /* grid-template-columns: 1fr 3fr 1fr; */
// grid-template-rows: repeat(2, auto);
// grid-template-areas:
//   'selection status primary metadata actions'
//   'selection status main-content metadata actions';

// grid-template-columns: min-content min-content minmax(30%, 1fr) minmax(0px, max-content) min-content;
// grid-column-gap: 8px;
// grid-row-gap: 8px;
// min-height: 2rem;

const HistoryContentLink = styled(Link)`
  font-size: 1.125rem;
  font-weight: 500;
  /* margin-bottom: 0.5rem; */
  &:hover {
    text-decoration: underline;
  }
`;
