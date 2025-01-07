import React from 'react';
import Grid from '@mui/material/Grid2';

import itemsData from '../data/items.json';
import ItemCard from './itemCard';

function ItemGrid() {

    const items = itemsData.items || itemsData;

    return (
        <div className="itemGridView">
            <Grid container spacing={2}>
                {items.map((item, index) => (
                    <Grid key={item.id || index} size={{ xs: 6, sm: 6, md: 4}}>
                        <ItemCard itemData={item} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default ItemGrid;