import React, { type ComponentProps, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { headerData } from "@src/data";
import classNames from "classnames";

type HeaderProps = {
  type?: string
  location?: string
  title?: string
}

type HeaderState = {
  showHeaderLink: boolean
  hideHeader: boolean
}

const routeToPath = (route?: string): string => {
  if (!route) return "/"
  if (route === "/") return "/"
  return route
}

export default class Header extends React.Component<HeaderProps, HeaderState> {
  private lastScrollTop = 0

  constructor(props: HeaderProps) {
    super(props);

    this.state = {
      showHeaderLink: false,
      hideHeader: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (_event: Event) => {
    const scrollTop = document.documentElement.scrollTop;
    const delta = this.lastScrollTop - scrollTop;
    this.lastScrollTop = scrollTop;

    if (Math.abs(delta) > 10) {
      const v = delta <= 0;
      this.setState({
        hideHeader: v,
      });
    }
  }

  toggleHeaderLinkHandler = () => {
    const { showHeaderLink } = this.state;
    this.setState({ showHeaderLink: !showHeaderLink });
  }

  render() {
    const { type } = this.props;
    const { showHeaderLink, hideHeader } = this.state;

    return (
      <div className={classNames("header", { "falling-down-header": hideHeader })} >

        <div className="title-conatainer">
          <Link to={routeToPath(headerData.links[0].link)}>
            <img src="/logo/logo.png" />
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
                <div className="header-link-item" key={item.link}>
                  <Link
                    to={routeToPath(item.link)}
                    className={classNames("header-link", { 'header-link-active': isLocation })}>
                    {item.title}
                  </Link>
                  {/* {index + 1 < headerData.links.length ? <span className="header-link-spliter">|</span> : null} */}
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}