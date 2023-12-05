import { format, parseISO } from 'date-fns';
import fr from 'date-fns/locale/fr';

interface DateProps {
  dateString: string;
}

const Date = ({ dateString }: DateProps) => {
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
