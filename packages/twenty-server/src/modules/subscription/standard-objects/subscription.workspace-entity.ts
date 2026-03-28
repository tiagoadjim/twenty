import {
  type ActorMetadata,
  type CurrencyMetadata,
  FieldMetadataType,
} from 'twenty-shared/types';

import { BaseWorkspaceEntity } from 'src/engine/twenty-orm/base.workspace-entity';
import { type FieldTypeAndNameMetadata } from 'src/engine/workspace-manager/utils/get-ts-vector-column-expression.util';
import { type EntityRelation } from 'src/engine/workspace-manager/workspace-migration/types/entity-relation.interface';
import { type CompanyWorkspaceEntity } from 'src/modules/company/standard-objects/company.workspace-entity';
import { type PersonWorkspaceEntity } from 'src/modules/person/standard-objects/person.workspace-entity';
import { type SubscriptionPlanWorkspaceEntity } from 'src/modules/subscription-plan/standard-objects/subscription-plan.workspace-entity';

const STATUS_FIELD_NAME = 'status';

export const SEARCH_FIELDS_FOR_SUBSCRIPTION: FieldTypeAndNameMetadata[] = [
  { name: STATUS_FIELD_NAME, type: FieldMetadataType.SELECT },
];

export class SubscriptionWorkspaceEntity extends BaseWorkspaceEntity {
  status: string;
  startDate: Date | null;
  renewalDate: Date | null;
  priceOverride: CurrencyMetadata | null;
  notes: string | null;
  position: number;
  createdBy: ActorMetadata;
  updatedBy: ActorMetadata;
  subscriptionPlan: EntityRelation<SubscriptionPlanWorkspaceEntity> | null;
  subscriptionPlanId: string | null;
  company: EntityRelation<CompanyWorkspaceEntity> | null;
  companyId: string | null;
  person: EntityRelation<PersonWorkspaceEntity> | null;
  personId: string | null;
  searchVector: string;
}
