import React from "react";
import classNames from "classnames";


/**
 * 條列 Credits 。
 * 
 * @foldable  若填入此屬性， Credits 就可以開啟/摺疊
 * 
 */
export default class Credits extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      isFold: true,
    }

  }

  toggleHandler = (e) => {
    const { isFold } = this.state;
    this.setState({ isFold: !isFold });
  }

  render() {

    const { isFold, } = this.state;
    const { foldable, children, } = this.props;

    const foldStateClass = classNames(
      "credit-list",
      foldable ?
        {
          fold: isFold,
          unfold: !isFold,
        } : {
          //
        }
    );

    return (
      <div className="project-text-container" onClick={this.toggleHandler}>

        <h2>Credits</h2>

        <div className={foldStateClass}>
          {children}
        </div>

        {
          (foldable && isFold) ? (
            <p className="credit-more">More</p>
          ) : (
            null
          )
        }

      </div>);
  }

}


Credits.defaultProps = {
  foldable: false,
};