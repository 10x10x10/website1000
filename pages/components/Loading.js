import React from "react";
import PropTypes from 'prop-types';
import loadingAnim from "../../src/animations/loading.json";

import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

function Loading(props) {

    const { isLoading, } = props;

    const loadingElement = (<div className="loading-conatiner">
        <Lottie
            animationData={loadingAnim}
            style={{ width: 64, height: 64 }}
            loop={true}
            autoplay={true}
        />
    </div>);

    return (isLoading ? loadingElement : null);
}

Loading.propTypes = {
    isLoading: PropTypes.bool.isRequired,
}

Loading.defaultProps = {
    isLoading: false,
};

Loading.getInitialProps = async () => Loading.defaultProps;


export default Loading;