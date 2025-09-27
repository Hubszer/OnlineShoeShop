const Item = ({product}) => {
    return (
        <div className="item">
            <p>
                {product.id}. {product.name}. {product.price}
            </p>
        </div>
    );
}


export default Item;