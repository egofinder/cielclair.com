interface IParams {
  productId: string;
}

const ProductDetailPage = ({ params }: { params: IParams }) => {
  return <div>{params.productId}</div>;
};

export default ProductDetailPage;
