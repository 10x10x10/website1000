import React from "react";
import Link from "next/link";
import { headerData } from "../../data.js";
import classNames from "classnames";

export default class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showHeaderLink: false,
    }
  }

  toggleHeaderLinkHandler = () => {
    const { showHeaderLink } = this.state;
    this.setState({ showHeaderLink: !showHeaderLink });
  }

  render() {

    const { type } = this.props;
    const { showHeaderLink } = this.state;

    return (
      <div className="header">

        <div className="title-conatainer">
          <Link href={headerData.links[0].link}>
            <a>
              <h1 className="title">1000 Cheng</h1>
            </a>
          </Link>
        </div>

        <div className="flex-space"></div>

        <div className="header-link-btn" onClick={this.toggleHeaderLinkHandler}>
          {
            (showHeaderLink) ? (
              <img src="/icons/clear.svg" className="header-link-btn-clear" />
            ) : (
              <img src="/icons/menu.svg" />
            )
          }
        </div>

        <div
          className={classNames("header-link-container", { 'm-header-link-container-show': showHeaderLink })}
          onClick={this.toggleHeaderLinkHandler}
        >
          {
            headerData.links.map((item, index) => {
              const isLocation = item.type === type;
              return (
                <>
                  <Link href={isLocation ? '' : item.link} key={item.link}>
                    <a className={classNames("header-link", { 'header-link-acitve': isLocation })}>
                      {item.title}
                    </a>
                  </Link>
                  {index + 1 < headerData.links.length ? <span className="header-link-spliter">|</span> : null}
                </>);
            })
          }
        </div>
      </div>);
  }
}