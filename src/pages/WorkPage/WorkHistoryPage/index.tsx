import { AutoPagination, Button } from 'bmates-ui';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import AvatarMention from '@/components/common/Avatar/AvatarMention';
import { WorkHistoryType } from '@/types/work';
import { relativeTime } from '@/utils/time';

import * as S from './style';

const WorkHistoryPage = () => {
  const [histories, setHistories] = useState<WorkHistoryType[]>([]);
  const [searchParams] = useSearchParams();
  const pageNo: number = parseInt(searchParams.get('page')!) || 1;

  useEffect(() => {
    fetch('/api/work/0/history')
      .then(res => res.json())
      .then(data => {
        setHistories(data.histories);
      });
  }, []);

  return (
    <S.Container>
      <S.H1>History</S.H1>
      <S.HistoryList>
        {histories.map(history => (
          <S.HistoryListItem key={history.uid}>
            <S.HistoryContentLink to="" title={history.content}>
              {history.content}
            </S.HistoryContentLink>
            <AvatarMention userId={history.user.id} size="sm" />
            <div className="list-view">
              <span>{relativeTime(history.createdAt)}</span>
              <Button variant="outline">{history.uid}</Button>
            </div>
          </S.HistoryListItem>
        ))}
      </S.HistoryList>
      <S.HistoryFooter>
        <AutoPagination pageNo={pageNo} pageSize={8} pageGap={5} linkas={Link} />
      </S.HistoryFooter>
    </S.Container>
  );
};
export default WorkHistoryPage;
