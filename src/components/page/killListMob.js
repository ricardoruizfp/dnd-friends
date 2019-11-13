import React from 'react';
import notFound from '../../assets/not-found.jpg';
import './killListMob.css';

export default function killListMob(props) {
    const { mob } = props;

    let displayImage = notFound;
    if (mob.imagePath) {
        displayImage = require(`../../assets/killListImages/${mob.imagePath}`);
    }

    return (
        <div className='kill-list-mob'>
            <div className='kill-list-mob-title'>{mob.displayName}</div>
            <div className='kill-list-mob-image-container'><img className='kill-list-mob-image' alt='' src={displayImage} /></div>
            <div className='kill-list-mob-flavor'>{mob.flavor}</div>
            {mob.killCount > 1 && <div className='kill-list-mob-kill-count'>{mob.killCount}</div>}
        </div>
    )
}
