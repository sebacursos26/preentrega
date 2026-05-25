import { Item } from "../Item/Item";

export const ItemDetail = ({ item }) => {
    return (
        <Item {...item}>
            <button className="btn-primary"> Agregar al carito</button>
        </Item>
    );
};