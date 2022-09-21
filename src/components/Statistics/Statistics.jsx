import React from 'react';
import PropTypes from 'prop-types';
import {Title, List, Item, Label, Quantity} from './Statistics.styled';
import dataStatistics from './dataStatistics';



export default class Statistics extends React.Component {
    
    render() {
        return (
            <>
            <Title>Statistics</Title>
                <List>{
                    dataStatistics.map(({id, label, quantity}) => {
                        return (
                            <Item key={id}>
                        <Label>{label}: </Label>
                        <Quantity>{quantity}</Quantity>
                    </Item>
                        )
                    })}
                    
                </List>
            </>
        )
    }
}

