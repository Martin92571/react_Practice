import React from 'react';
import styles from './studentGrdeTable.module.css';
const sgt=(props)=>{
    console.log(props.tables)
    const tables=props.tables.map((p)=>{
        return (<div>
                 <div className={`${styles.inline}  ${styles.color} ${styles.padding} ${styles.width}`}> {p.name}</div>
                 <div  className={`${styles.inline} ${styles.color} ${styles.padding}  ${styles.width}`}> {p.course}</div>   
                 <div  className={`${styles.inline}  ${styles.color} ${styles.padding}  ${styles.width}`}> {p.grade}</div>
                </div>)
    })
    return(
        <div>
            {tables}
        </div>

    //  {tables}
    
    );
}

export default sgt;