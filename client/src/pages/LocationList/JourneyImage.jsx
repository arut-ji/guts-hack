import React from 'react';
import styled from 'styled-components';
import BpkImage, { BORDER_RADIUS_STYLES } from 'bpk-component-image';
import { breakpointDesktop, breakpointTablet } from 'bpk-tokens/tokens/base.es6';

const Image = styled(BpkImage)`
	> div {
		padding-bottom: 0;
	}
`;

const PictureSection = styled.div`
	border-radius: 6px 6px 0 0;
	height: 200px;
	width: 100%;
	background-image: url(${(props) => props.url});
	background-size: cover;
`;

const JourneyImage = (props) => {
	return (
		<div>
			<PictureSection url={props.img} />
		</div>
	);
};

export default JourneyImage;
