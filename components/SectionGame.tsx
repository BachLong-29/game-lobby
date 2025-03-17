import React, { ReactNode } from "react";

interface IProps<T> {
  title: string;
  data: T[];
  renderItem: (value: T) => ReactNode;
}

const SectionGame = <T extends object>(props: IProps<T>) => {
  const { title, data, renderItem } = props;
  return (
    <>
      <h1>{title}</h1>
      <div className="game-list-grid">
        {data.map((item) => renderItem(item))}
      </div>
    </>
  );
};

export default SectionGame;
