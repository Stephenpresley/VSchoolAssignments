import React from 'react'
import ColorBoxes from './ColorBoxes'

const App = () => {
    const style = {
        border: '#101 solid 2px',
        display: 'flexBox',
        textAlign: 'center'
    }
    return (
        
        <div style={style}>
            <ColorBoxes backgroundColor='red' title='T1' subtitle="S1" info='Info1'/>
            <ColorBoxes backgroundColor='blue' title='T2' subtitle='S2' info='Info2'/>
            <ColorBoxes backgroundColor='#bada55' title='T3' subtitle='S3' info='Info3'/>
            <ColorBoxes backgroundColor='#c55' title='T4' subtitle='S4' info='Info4'/>
            <ColorBoxes backgroundColor='purple' title='T5' subtitle='S5' info='Info5'/>
            <ColorBoxes backgroundColor='grey' title='T6' subtitle='S6' info='Info6'/>
            <ColorBoxes backgroundColor='pink' title='T7' subtitle='S7' info='Info7'/>
            <ColorBoxes backgroundColor='crimson' title='T8' subtitle='S8' info='Info8'/>
            <ColorBoxes backgroundColor='darkblue' title='T9' subtitle='S9' info='Info9'/>
            <ColorBoxes backgroundColor='aqua' title='T10' subtitle='S10' info='Info10'/>
        </div>
    )
}

export default App