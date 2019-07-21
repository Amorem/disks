import React from "react";
import ShopData from "./ShopData";
import PreviewCollections from "../../components/preview-collections/PreviewCollections";

class ShopPage extends React.Component {
  state = {
    collections: ShopData
  };
  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollections key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
