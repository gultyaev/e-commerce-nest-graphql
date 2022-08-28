
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum OrderStatus {
    NEW = "NEW",
    PROCESSING = "PROCESSING",
    DONE = "DONE",
    CANCELLED = "CANCELLED"
}

export class OrderedProductsInput {
    productId: number;
    count: number;
}

export class OrderInput {
    shippingAddress: string;
    fullName: string;
    paymentMethod: string;
    orderedProducts: OrderedProductsInput[];
}

export class ProductInput {
    title: string;
    quantity: number;
    img: string;
    warehouseId: number;
}

export class UserInput {
    email: string;
    password: string;
}

export class WarehouseInput {
    title: string;
}

export class Order {
    id: number;
    shippingAddress: string;
    fullName: string;
    paymentMethod: string;
    status: OrderStatus;
    createdAt: string;
    products: OrderProduct[];
}

export class OrderProduct {
    product: Product;
    count: number;
}

export abstract class IQuery {
    abstract order(id: number): Nullable<Order> | Promise<Nullable<Order>>;

    abstract orders(status?: Nullable<Nullable<OrderStatus>[]>): Nullable<Nullable<Order>[]> | Promise<Nullable<Nullable<Order>[]>>;

    abstract product(id: number): Nullable<Product> | Promise<Nullable<Product>>;

    abstract products(): Nullable<Nullable<Product>[]> | Promise<Nullable<Nullable<Product>[]>>;

    abstract warehouses(): Nullable<Nullable<Warehouse>[]> | Promise<Nullable<Nullable<Warehouse>[]>>;

    abstract warehouse(id: number): Nullable<Warehouse> | Promise<Nullable<Warehouse>>;
}

export abstract class IMutation {
    abstract createOrder(order: OrderInput): Nullable<Order> | Promise<Nullable<Order>>;

    abstract updateOrder(id: number, newStatus: OrderStatus): Nullable<Order> | Promise<Nullable<Order>>;

    abstract createProduct(product: ProductInput): Nullable<Product> | Promise<Nullable<Product>>;

    abstract updateProduct(id: number, product: ProductInput): Nullable<Product> | Promise<Nullable<Product>>;

    abstract createUser(user: UserInput): NewUser | Promise<NewUser>;

    abstract authenticateUser(user: UserInput): JWT | Promise<JWT>;

    abstract addWarehouse(warehouse: WarehouseInput): Nullable<Warehouse> | Promise<Nullable<Warehouse>>;

    abstract updateWarehouse(id: number, warehouse: WarehouseInput): Nullable<Warehouse> | Promise<Nullable<Warehouse>>;
}

export class Product {
    id: number;
    title: string;
    quantity: number;
    createdAt: string;
    img: string;
    warehouseId: number;
    warehouse: Warehouse;
}

export class JWT {
    accessToken: string;
}

export class User {
    id: number;
    email: string;
    password: string;
}

export class NewUser {
    id: number;
    email: string;
}

export class Warehouse {
    id: number;
    title: string;
    products?: Nullable<Nullable<Product>[]>;
}

type Nullable<T> = T | null;
