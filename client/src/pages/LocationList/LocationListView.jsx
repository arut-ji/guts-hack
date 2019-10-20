import React, {useState, useEffect} from 'react'
import ListItems from './ListItems'
import JourneyItem from './JourneyImage'
import SearchForm from './SearchForm'
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';
import styled from 'styled-components'
import {usePosition} from '../../shared/hooks/use-location.hook';
import {useParams} from 'react-router-dom';
import useQuery from '../../shared/hooks/use-query.hook';
import {items} from './data.mock';
import {JourneyService} from '../../services/journey.service'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: fit-content;
`;

const ListWrapper = styled.div`
  min-height: 50vh;
  > div {
    margin: 4px auto;
  }
`;

const LocationListView = () => {
    const query = useQuery();
    const [destination, setDestination] = useState(query.get('to') || '');
    const [origin, setOrigin] = useState(query.get('from') || '');

    const [displayList, setDisplayList] = useState(items);

    useEffect(() => {
      if(destination.length > 0) {
        JourneyService.fetchByLocation({location: destination})
          .then((result) => {
            console.log(result)
            setDisplayList([result])
          })
      }

    }, []);

    return (
        <Container>
            <SearchForm
              origin={origin}
              destination={destination}
            />
            <ListWrapper>
              <ListItems
                items={displayList}
              />
            </ListWrapper>
        </Container>
    )
}

export default LocationListView
