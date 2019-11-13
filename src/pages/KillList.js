import React, { Component } from 'react'
import KillListMob from '../components/page/killListMob'
import killListContent from '../killListContent'
import './KillList.css'

class KillList extends Component {    
    render() {
        const contentValues = Object.values(killListContent);
        return (
            <div className='kill-list'>
                {contentValues.map(v => {
                    if(v.displayName){
                        return <KillListMob key={v.displayName} mob={v} />
                    }
                })}
            </div>
        )
    }
}

export default KillList;