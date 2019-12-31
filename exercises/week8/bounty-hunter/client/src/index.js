import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AxiosContext from './AxoisContext'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(<BrowserRouter>
                    <AxiosContext>
                        <App />
                    </AxiosContext>
                </BrowserRouter>, document.getElementById('root'));
