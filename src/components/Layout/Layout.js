import React from 'react'

import Aux from '../../hoc/Aux/Aux'
import Toolbar from '../Toolbar/Toolbar'
import './Layout.scss'

const layout = props => (
    <Aux>
        <Toolbar
            displaySearch={props.displaySearch}
            searchInitialValue={props.searchInitialValue}
            displayGoBack={props.showBackBotton}
        />
        <main>
            {props.children}
        </main>
    </Aux>
)

export default layout