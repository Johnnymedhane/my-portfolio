import List from "../../ui/List";
import { TimelineItem } from "./TimelineItem";


export function Timeline({ title, list, icon }) {
  return (
    <div className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <i className={`fa-solid ${icon}`}></i>
        </div>
        <h3 className="h3">{title}</h3>
      </div>
      <List item="timeline" data={list} renderItem={(item) => (
        <TimelineItem key={item.description} item={item} />
      )} />
    </div>
  );
}

