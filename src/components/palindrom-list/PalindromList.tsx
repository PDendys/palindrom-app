import React from 'react';
import { useSelector } from 'react-redux';

import { IPalindromItem, IStore } from 'types';

import ListItem from 'components/palindrom-list-item/ListItem';

const PalindromList: React.FC = () => {
    const palindromList = useSelector((state: IStore) => state.palindrom.list);
    return (
        <table className="table table-striped table-borderless">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Word / sentence</th>
                    <th scope="col">Is palindrome</th>
                </tr>
            </thead>
            <tbody>
            {
                palindromList.map((item: IPalindromItem, idx: number) =>
                    <ListItem
                        key={idx}
                        idx={idx}
                        item={item}
                    />
                )
            }
            </tbody>
        </table>
    );
}

export default React.memo(PalindromList);
