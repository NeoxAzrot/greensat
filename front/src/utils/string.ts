interface TruncateWithEllipsesProps {
  content: string;
  maxLength?: number;
}

export const truncateWithEllipses = ({ content, maxLength = 100 }: TruncateWithEllipsesProps) => {
  if (content.length > maxLength) {
    return `${content.slice(0, maxLength)}...`;
  }

  return content;
};
