import style from './MRating.module.css'
import { useState } from 'react';
import { Rating } from '@mui/material'

const MRating = ({title}) => {

    const [value, setValue] = useState(0);

    return (
       <div className={style.rating}>
            <h3>{title}</h3>
            <Rating name="simple-controlled" value={value} size='large' onChange={(event, newValue) =>
                {
                    setValue(newValue);
                }}
            />
       </div>
        
    )
}

export default MRating