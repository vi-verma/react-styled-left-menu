import React from "react";
import "gantt-task-react/dist/index.css";
import { ViewMode } from "gantt-task-react";

export const ViewSwitcher = ({
  onViewModeChange,
  onViewListChange,
  isChecked,
  view,
}) => {
  return (
    <div>
      {ViewMode &&
        Object.values(ViewMode).map((i) => {
          return (
            <button
            key={i}
              style={{ background: view === i ? "grey" : undefined }}
              onClick={() => onViewModeChange(i)}
            >
              {i}
            </button>
          );
        })}

      <div >
        <label >
          <input
            type="checkbox"
            defaultChecked={isChecked}
            onClick={() => onViewListChange(!isChecked)}
          />
          <span />
        </label>
        Show Task List
      </div>
    </div>
  );
};
