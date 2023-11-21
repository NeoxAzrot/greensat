import { format, parseISO } from 'date-fns';
import fr from 'date-fns/locale/fr';

const Date = ({ dateString }: { dateString: string }) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, 'd MMMM, yyyy', {
        locale: fr,
      })}
    </time>
  );
};

export default Date;
