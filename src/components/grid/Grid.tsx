import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../redux/Store';

import Block from '../block/Block';
import './Grid.css';

export const Grid = () => {
    const gridState = useSelector((state: RootState) => state.value);
    const dispatch = useDispatch();

    return (
        <div id='puzzle-grid'>
            {gridState.flat().map((val: number | string, idx: number) => 
                <Block location={{
                        row: Math.floor(idx / 3), 
                        col: idx % 3
                    }}
                    value={val}
                    key={idx} 
                    />)
            }
        </div>
    );
};

export default Grid;
