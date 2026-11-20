import type { ReactNode } from "react";

interface ListProps<T> {
  title?: string;
  item: string;
  data?: T[];
  renderItem?: (item: T, index: number) => ReactNode;
  children?: ReactNode;
  listClassName?: string;
}

function List<T>({ title, item, data, renderItem, children, listClassName }: ListProps<T>) {
  return (
    <div className={item}>
      {title && <h2 className={`${item}-title`}>{title}</h2>}
      {data && renderItem ? (
        <ul className={listClassName || `${item}-list`}>{data.map(renderItem)}</ul>
      ) : (
        children
      )}
    </div>
  );
}

export default List;
