import React from 'react'
import ListItems from './ListItems'
import JourneyItem from './JourneyImage'
import SearchForm from './SearchForm'
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: fit-content;
`;

const LocationListView = () => {
    return (

        <Container>
            <SearchForm/>
            <ListItems > </ListItems>
        </Container>
           
    )
}

export default LocationListView
