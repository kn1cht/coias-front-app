import React from 'react';
import { Button } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import FileModal from '../component/FileModal';

export const Explore_prepare = () => {
    const menunames = [ 
                        {"id" : 1, "name": "ファイル"},
                        {"id": 2, "name": "軌道修正"},
                        {"id" : 3, "name" : "ビニングマスク"},
                        {"id": 4, "name": "画像変換"},
                        {"id" : 5, "name" : "光源検出"},
                        {"id" : 6,"name" : "自動検出" },
                        {"id" : 7, "name" : "全自動処理"}
                    ];

    return(
        <div>
            <ul className='coias-ul' >
            {menunames.map(item => 
            {
                if(item.id === 1){
                    return <li key={item.id} className="coias-li"><FileModal/></li>;
                }else {
                    return <li key={item.id} className="coias-li"><Button variant="success">{item.name}</Button></li>;
                }
            })}
            </ul>
        </div>
    
    )
};

export default withRouter(Explore_prepare);