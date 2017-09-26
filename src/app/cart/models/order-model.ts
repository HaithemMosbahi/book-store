import { OrderAddress } from './order-address';


export interface Order {
    firstName: string;
    lastName: string;
    email: string;
    shippingAddress: OrderAddress;
    billingAddress: OrderAddress;
}