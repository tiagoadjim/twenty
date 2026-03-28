import {
  type ActorMetadata,
  type CurrencyMetadata,
  FieldMetadataType,
} from 'twenty-shared/types';

import { BaseWorkspaceEntity } from 'src/engine/twenty-orm/base.workspace-entity';
import { type FieldTypeAndNameMetadata } from 'src/engine/workspace-manager/utils/get-ts-vector-column-expression.util';
import { type EntityRelation } from 'src/engine/workspace-manager/workspace-migration/types/entity-relation.interface';
import { type SubscriptionWorkspaceEntity } from 'src/modules/subscription/standard-objects/subscription.workspace-entity';

const NAME_FIELD_NAME = 'name';

export const SEARCH_FIELDS_FOR_SUBSCRIPTION_PLAN: FieldTypeAndNameMetadata[] = [
  { name: NAME_FIELD_NAME, type: FieldMetadataType.TEXT },
];

export class SubscriptionPlanWorkspaceEntity extends BaseWorkspaceEntity {
  name: string;
  price: CurrencyMetadata | null;
  billingCycle: string;
  description: string | null;
  position: number;
  createdBy: ActorMetadata;
  updatedBy: ActorMetadata;
  subscriptions: EntityRelation<SubscriptionWorkspaceEntity[]>;
  searchVector: string;
}
