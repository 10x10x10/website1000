import React from "react";
import loadingAnim from "../animations/loading.json";
import * as LottieReact from 'lottie-react';

const Lottie = LottieReact.default || LottieReact;

type LoadingProps = {
  isLoading?: boolean
}

function Loading({ isLoading = false }: LoadingProps) {

    const loadingElement = (<div className="loading-conatiner">
        {typeof Lottie === 'function' ? (
          <Lottie
              animationData={loadingAnim}
              style={{ width: 64, height: 64 }}
              loop={true}
              autoplay={true}
          />
        ) : (
          <div style={{ width: 64, height: 64 }} />
        )}
    </div>);

    return isLoading ? loadingElement : null;
}

export default Loading;