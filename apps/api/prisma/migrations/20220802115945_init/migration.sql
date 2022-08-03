-- CreateTable
CREATE TABLE "Warehouse" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "warehouseId" INTEGER NOT NULL,
    CONSTRAINT "Product_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "Warehouse" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
