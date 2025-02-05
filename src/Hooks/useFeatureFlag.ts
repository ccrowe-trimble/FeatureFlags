import { useContext } from 'react';
import { FeatureFlagContext } from '../Context/featureFlagContext';
import { FeatureFlags } from '../Types/featureFlags';

// Custom hook to use the feature flag context

export const useFeatureFlag = (flag: keyof FeatureFlags): boolean | undefined => {
    const context = useContext(FeatureFlagContext);
    if (context === undefined) {
        throw new Error('useFeatureFlag must be used within a FeatureFlagProvider');
    }
    return context.flags[flag];
};
