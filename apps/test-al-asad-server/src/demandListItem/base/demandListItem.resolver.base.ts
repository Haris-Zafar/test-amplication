/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { DemandListItem } from "./DemandListItem";
import { DemandListItemCountArgs } from "./DemandListItemCountArgs";
import { DemandListItemFindManyArgs } from "./DemandListItemFindManyArgs";
import { DemandListItemFindUniqueArgs } from "./DemandListItemFindUniqueArgs";
import { CreateDemandListItemArgs } from "./CreateDemandListItemArgs";
import { UpdateDemandListItemArgs } from "./UpdateDemandListItemArgs";
import { DeleteDemandListItemArgs } from "./DeleteDemandListItemArgs";
import { DemandList } from "../../demandList/base/DemandList";
import { OrderItem } from "../../orderItem/base/OrderItem";
import { Product } from "../../product/base/Product";
import { PurchaseItem } from "../../purchaseItem/base/PurchaseItem";
import { DemandListItemService } from "../demandListItem.service";
@graphql.Resolver(() => DemandListItem)
export class DemandListItemResolverBase {
  constructor(protected readonly service: DemandListItemService) {}

  async _demandListItemsMeta(
    @graphql.Args() args: DemandListItemCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [DemandListItem])
  async demandListItems(
    @graphql.Args() args: DemandListItemFindManyArgs
  ): Promise<DemandListItem[]> {
    return this.service.demandListItems(args);
  }

  @graphql.Query(() => DemandListItem, { nullable: true })
  async demandListItem(
    @graphql.Args() args: DemandListItemFindUniqueArgs
  ): Promise<DemandListItem | null> {
    const result = await this.service.demandListItem(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DemandListItem)
  async createDemandListItem(
    @graphql.Args() args: CreateDemandListItemArgs
  ): Promise<DemandListItem> {
    return await this.service.createDemandListItem({
      ...args,
      data: {
        ...args.data,

        demandList: {
          connect: args.data.demandList,
        },

        orderItem: args.data.orderItem
          ? {
              connect: args.data.orderItem,
            }
          : undefined,

        product: {
          connect: args.data.product,
        },

        purchaseItem: args.data.purchaseItem
          ? {
              connect: args.data.purchaseItem,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => DemandListItem)
  async updateDemandListItem(
    @graphql.Args() args: UpdateDemandListItemArgs
  ): Promise<DemandListItem | null> {
    try {
      return await this.service.updateDemandListItem({
        ...args,
        data: {
          ...args.data,

          demandList: {
            connect: args.data.demandList,
          },

          orderItem: args.data.orderItem
            ? {
                connect: args.data.orderItem,
              }
            : undefined,

          product: {
            connect: args.data.product,
          },

          purchaseItem: args.data.purchaseItem
            ? {
                connect: args.data.purchaseItem,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => DemandListItem)
  async deleteDemandListItem(
    @graphql.Args() args: DeleteDemandListItemArgs
  ): Promise<DemandListItem | null> {
    try {
      return await this.service.deleteDemandListItem(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => DemandList, {
    nullable: true,
    name: "demandList",
  })
  async getDemandList(
    @graphql.Parent() parent: DemandListItem
  ): Promise<DemandList | null> {
    const result = await this.service.getDemandList(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => OrderItem, {
    nullable: true,
    name: "orderItem",
  })
  async getOrderItem(
    @graphql.Parent() parent: DemandListItem
  ): Promise<OrderItem | null> {
    const result = await this.service.getOrderItem(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Product, {
    nullable: true,
    name: "product",
  })
  async getProduct(
    @graphql.Parent() parent: DemandListItem
  ): Promise<Product | null> {
    const result = await this.service.getProduct(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => PurchaseItem, {
    nullable: true,
    name: "purchaseItem",
  })
  async getPurchaseItem(
    @graphql.Parent() parent: DemandListItem
  ): Promise<PurchaseItem | null> {
    const result = await this.service.getPurchaseItem(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
