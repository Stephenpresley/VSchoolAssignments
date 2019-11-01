import React from 'react';

const Badge = (props) => {
    let {fName, lName, email, birthPlace, phone, favFood, about, index} = props

    const formStyle2 = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '20px',
        alignItems: 'center'
    }
    const style2 = {
        textAlign: 'center',
        margin: '20px'
    }
    const styles2 = {
        border: '5px solid #1a1a1a',
        borderRadius: '5px',
        width: '60%',
        margin: '20px 20% 0 20%',
        textAlign: 'center'
    }

        return (
            <div style={styles2}>
                <div>
                    { index % 2 === 0
                        ? <div style={{backgroundColor: 'red', textAlign: 'left', fontSize: '25px'}}><b>Badge:</b></div>
                        : <div style={{backgroundColor: 'blue', textAlign: 'left', fontSize: '25px'}}><b>Badge:</b></div>
                    }
                </div>
                <div style={formStyle2}>
                    <div style={{display: 'flex'}}>Name: <div style={{marginLeft: '10px'}}> {fName} {lName}</div></div>
                    <div style={{display: 'flex'}}>Phone: <div style={{marginLeft: '10px'}}> {phone}</div></div>
                    <div style={{display: 'flex'}}>Place of Birth: <div style={{marginLeft: '10px'}}> {birthPlace}</div></div>
                    <div style={{display: 'flex'}}>Favorite Food: <div style={{marginLeft: '10px'}}> {favFood}</div></div>
                    <div style={{display: 'flex'}}>Email: <div style={{marginLeft: '10px'}}> {email}</div></div>
                </div>
                <div style={style2}>
                    <textarea style={{resize: 'none', marginBottom: '20px'}} name="about" cols="100" rows="8" value={about} readOnly></textarea>
                </div>
            </div>
        )
};

export default Badge;