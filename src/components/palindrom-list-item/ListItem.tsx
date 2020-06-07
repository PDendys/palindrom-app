import React from 'react';

import { IPalindromItem } from 'types';

interface IProps {
    idx: number,
    item: IPalindromItem
}

const ListItem: React.FC<IProps> = ({idx, item}: IProps) => {
    return (
        <tr className={item.isPalindrome ? 'bg-success' : 'bg-danger'}>
            <th className="text-white" scope="row">{idx + 1}</th>
            <td className="text-white">{item.sentence}</td>
            <td className="text-white">{item.isPalindrome ? 'true' : 'false'}</td>
        </tr>
    );
}

export default ListItem;
