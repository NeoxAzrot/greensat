import { format, parseISO } from 'date-fns';

const PostDate = ({ dateString }: { dateString: string }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'MMMM d, yyyy')}</time>;
};

export default PostDate;
