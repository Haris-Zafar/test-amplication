/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  CustomerProductPrice as PrismaCustomerProductPrice,
  Customer as PrismaCustomer,
  Product as PrismaProduct,
} from "@prisma/client";

export class CustomerProductPriceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CustomerProductPriceCountArgs, "select">
  ): Promise<number> {
    return this.prisma.customerProductPrice.count(args);
  }

  async customerProductPrices(
    args: Prisma.CustomerProductPriceFindManyArgs
  ): Promise<PrismaCustomerProductPrice[]> {
    return this.prisma.customerProductPrice.findMany(args);
  }
  async customerProductPrice(
    args: Prisma.CustomerProductPriceFindUniqueArgs
  ): Promise<PrismaCustomerProductPrice | null> {
    return this.prisma.customerProductPrice.findUnique(args);
  }
  async createCustomerProductPrice(
    args: Prisma.CustomerProductPriceCreateArgs
  ): Promise<PrismaCustomerProductPrice> {
    return this.prisma.customerProductPrice.create(args);
  }
  async updateCustomerProductPrice(
    args: Prisma.CustomerProductPriceUpdateArgs
  ): Promise<PrismaCustomerProductPrice> {
    return this.prisma.customerProductPrice.update(args);
  }
  async deleteCustomerProductPrice(
    args: Prisma.CustomerProductPriceDeleteArgs
  ): Promise<PrismaCustomerProductPrice> {
    return this.prisma.customerProductPrice.delete(args);
  }

  async getCustomer(parentId: string): Promise<PrismaCustomer | null> {
    return this.prisma.customerProductPrice
      .findUnique({
        where: { id: parentId },
      })
      .customer();
  }

  async getProduct(parentId: string): Promise<PrismaProduct | null> {
    return this.prisma.customerProductPrice
      .findUnique({
        where: { id: parentId },
      })
      .product();
  }
}
