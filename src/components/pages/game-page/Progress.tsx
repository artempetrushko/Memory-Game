import React from "react";

interface ProgressProps {
  value: number;
  max: number;
}

export const Progress: React.FC<ProgressProps> = ({value, max}) => {
    return (
      <>
        <div className="progress-wrapper">
          <div className="progress" style={{width: `${value / max * 100}%`}}></div>
        </div>
        <p className="progress-description">Открыто {value} / {max}</p>
      </>
    );
  }