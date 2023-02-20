import { ItemType } from "./item";

export interface CardType extends Pick<ItemType, 'name' | 'price' | 'url'> {
    img: string;
    size: 'sm' | 'md' | 'lg'
}