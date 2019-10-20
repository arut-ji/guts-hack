import React from 'react'
import ListItems from './ListItems'
import JourneyItem from './JourneyImage'
import SearchForm from './SearchForm'
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';
import styled from 'styled-components'
import {usePosition} from '../../shared/hooks/use-location.hook'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: fit-content;
`;

const LocationListView = () => {

    const [lat, long, error] = usePosition();
    console.log(lat, long)
    return (

        <Container>
            <SearchForm/>
            <ListItems/>
        </Container>

    )
}

export default LocationListView
