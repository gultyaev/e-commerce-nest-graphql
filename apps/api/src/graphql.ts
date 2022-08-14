
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class ProductInput {
    title: string;
    quantity: number;
    warehouseId: number;
}

export class WarehouseInput {
    title: string;
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

export abstract class IQuery {
    abstract product(id: number): Nullable<Product> | Promise<Nullable<Product>>;

    abstract products(): Nullable<Nullable<Product>[]> | Promise<Nullable<Nullable<Product>[]>>;

    abstract warehouses(): Nullable<Nullable<Warehouse>[]> | Promise<Nullable<Nullable<Warehouse>[]>>;

    abstract warehouse(id: number): Nullable<Warehouse> | Promise<Nullable<Warehouse>>;
}

export abstract class IMutation {
    abstract createProduct(product: ProductInput): Nullable<Product> | Promise<Nullable<Product>>;

    abstract updateProduct(id: number, product: ProductInput): Nullable<Product> | Promise<Nullable<Product>>;

    abstract addWarehouse(warehouse: WarehouseInput): Nullable<Warehouse> | Promise<Nullable<Warehouse>>;

    abstract updateWarehouse(id: number, warehouse: WarehouseInput): Nullable<Warehouse> | Promise<Nullable<Warehouse>>;
}

export class Warehouse {
    id: number;
    title: string;
    products?: Nullable<Nullable<Product>[]>;
}

type Nullable<T> = T | null;
