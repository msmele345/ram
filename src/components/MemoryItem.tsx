import React from "react";
import Card from "../common/Card";

export type Memory = {
    id: number,
    description: string,
    imgUrl?: string,
    age: string
  };
  

type MemoryItemProps = {
    memory: Memory,
    handleDelete?: (id: number) => void;
}

const MemoryItem = ({memory, handleDelete}: MemoryItemProps) => {
    return (
        <Card>
            <div className="num-display">{memory.age ?? '0-2'}</div>
            <div className="text-display">{memory.description}</div>
        </Card>
    )
};

export default MemoryItem;