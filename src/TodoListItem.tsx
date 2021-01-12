import React from 'react';
import { Interface } from 'readline';

interface TodoListItemProps {
    todo: {
        text: string;
        complete: boolean;
    };
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
    return <div>hi</div>;
};
