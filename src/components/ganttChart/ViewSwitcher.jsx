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
              style={{ background: view === i ? "grey" : "" }}
              onClick={() => onViewModeChange(i)}
            >
              {i}
            </button>
          );
        })}

      <div className="Switch">
        <label className="Switch_Toggle">
          <input
            type="checkbox"
            defaultChecked={isChecked}
            onClick={() => onViewListChange(!isChecked)}
          />
          <span className="Slider" />
        </label>
        Show Task List
      </div>
    </div>
  );
};
