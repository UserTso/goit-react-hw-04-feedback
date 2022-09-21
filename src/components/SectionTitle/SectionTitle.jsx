import React from 'react';
import PropTypes from 'prop-types';
import {Title, List, Item, Button} from './SectionTitle.styled';
import dataButton from './dataButton.json';

class SectionTitle extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
      };

handleClick = () => {
   this.setState(prevState => ({good: prevState.good +1, neutral: prevState.good +1, bad: prevState.good +1}))
}

    render() {
        return (
            <>
            <Title>Please leave feedback</Title>
                <List>{
                    dataButton.map(({id, title}) => {
                        return (
                            <Item key={id}>
                        <Button type="button" onClick={this.handleClick}>{title}</Button>
                    </Item>
                        )
                    })}
                    
                </List>
            </>
        )
    }
}

export default SectionTitle;