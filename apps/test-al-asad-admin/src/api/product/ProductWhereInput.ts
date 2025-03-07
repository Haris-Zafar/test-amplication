import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { CustomerProductPriceListRelationFilter } from "../customerProductPrice/CustomerProductPriceListRelationFilter";
import { DemandListItemListRelationFilter } from "../demandListItem/DemandListItemListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderItemListRelationFilter } from "../orderItem/OrderItemListRelationFilter";
import { PurchaseItemListRelationFilter } from "../purchaseItem/PurchaseItemListRelationFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { SupplierProductListRelationFilter } from "../supplierProduct/SupplierProductListRelationFilter";
import { TagsOnProductListRelationFilter } from "../tagsOnProduct/TagsOnProductListRelationFilter";

export type ProductWhereInput = {
  category?: CategoryWhereUniqueInput;
  company?: CompanyWhereUniqueInput;
  createdAt?: DateTimeFilter;
  customerPrices?: CustomerProductPriceListRelationFilter;
  demandListItem?: DemandListItemListRelationFilter;
  description?: StringNullableFilter;
  expiryDate?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  orderItems?: OrderItemListRelationFilter;
  purchaseItem?: PurchaseItemListRelationFilter;
  purchasePrice?: FloatFilter;
  reorderLevel?: IntNullableFilter;
  retailPrice?: FloatNullableFilter;
  sellPrice?: FloatFilter;
  size?: StringNullableFilter;
  sku?: StringFilter;
  stockQuantity?: IntFilter;
  supplierProducts?: SupplierProductListRelationFilter;
  tags?: TagsOnProductListRelationFilter;
  updatedAt?: DateTimeFilter;
  weight?: FloatNullableFilter;
  weightUnit?: "G" | "ML" | "KG" | "L";
};
