import React from 'react';

const images = require.context('../img/projects', false, /\.(png|jpe?g|webp)$/);

function ItemCard(props) {
    const itemData = props.itemData;

    let image;
    image = images(`./${itemData.img}`);

    return (
        <div className="item glass">
            <div className='gridImageWrap'>
                <img src={image} alt={itemData.title} />
            </div>
            <div className='gridContentWrap scrim'>
                <div className='textWrap'>
                    <div className='itemCardTitle'>
                        <h1>{itemData.title}</h1>
                    </div>
                    <div className='itemCardDetails'>
                        <hr class="solid"/>
                        <p>HTML • CSS</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;