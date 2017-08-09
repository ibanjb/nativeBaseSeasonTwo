import React from 'react';
import getTheme from './native-base-theme/components';

export default class CustomTheme extends React.Component {
    render() {
        return (
            <StyleProvider  style={getTheme()}>
            <Container>
                <Content>
                ...                                           
                </Content>
            </Container>
            </StyleProvider>
        );
    }
}