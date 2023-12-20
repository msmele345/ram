import React, { ReactElement } from "react";
import MemoryItem from "./MemoryItem";
import { Memory } from '../common/@types/types';


type MemoriesListProps = {
    memories: Memory[]
    handleDelete?: (id: number) => void;
}

function MemoriesList({memories = [], handleDelete}: MemoriesListProps): ReactElement {
  return (
    <div className="feedback-list">
        {
            memories.map(memory => (
             <MemoryItem
                key={memory.id}
                memory={
                    {
                     id: memory.id,
                     description: memory.description,
                     imgUrl: memory.imgUrl,
                     age: memory.age 
                   }
                }
             />
            ))
        }
    </div>
  )
}

export default MemoriesList