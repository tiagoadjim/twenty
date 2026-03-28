import { ViewType, ViewKey } from 'twenty-shared/types';

import { type FlatView } from 'src/engine/metadata-modules/flat-view/types/flat-view.type';

import {
  createStandardViewFlatMetadata,
  type CreateStandardViewArgs,
} from 'src/engine/workspace-manager/twenty-standard-application/utils/view/create-standard-view-flat-metadata.util';

export const computeStandardSubscriptionPlanViews = (
  args: Omit<CreateStandardViewArgs<'subscriptionPlan'>, 'context'>,
): Record<string, FlatView> => {
  return {
    allSubscriptionPlans: createStandardViewFlatMetadata({
      ...args,
      objectName: 'subscriptionPlan',
      context: {
        viewName: 'allSubscriptionPlans',
        name: 'All {objectLabelPlural}',
        type: ViewType.TABLE,
        key: ViewKey.INDEX,
        position: 0,
        icon: 'IconList',
      },
    }),
    subscriptionPlanRecordPageFields: createStandardViewFlatMetadata({
      ...args,
      objectName: 'subscriptionPlan',
      context: {
        viewName: 'subscriptionPlanRecordPageFields',
        name: 'Subscription Plan Record Page Fields',
        type: ViewType.FIELDS_WIDGET,
        key: null,
        position: 0,
        icon: 'IconList',
      },
    }),
  };
};
