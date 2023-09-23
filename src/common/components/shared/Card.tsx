import React, { ReactNode } from "react";

interface CardProps {
  title: string;
  subtitle?: string;
  body: ReactNode;
  colBody?: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, subtitle, body, colBody }) => {
  return (
    <div
      className={`p-[20px] ${
        colBody ? "flex items-center justify-between" : ""
      } rounded-[12px] bg-white border border-[#E1DDDD] `}
    >
      <div className="basis-1/2">
        <div className="pb-[15px] space-y-3">
          <h2 className="text-[25px] font-medium">{title}</h2>
          <p>{subtitle}</p>
        </div>
        {body}
      </div>
      {colBody}
    </div>
  );
};

export default Card;
