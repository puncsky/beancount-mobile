import { getFeatureFlags } from "@/common/feature-flags/data/quries";
import { useQuery } from "react-apollo";
import { FeatureFlags } from "@/common/feature-flags/data/__generated__/FeatureFlags";

type FlagMap = {
  spendingReportSubscription?: boolean;
};

export const useFeatureFlags = (userId: string): FlagMap => {
  const { data } = useQuery<FeatureFlags>(getFeatureFlags, {
    variables: {
      userId,
    },
  });

  return {
    spendingReportSubscription: data?.featureFlags?.spendingReportSubscription,
  };
};
