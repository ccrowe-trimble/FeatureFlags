import { useContext } from 'react';
import { FeatureFlagContext } from '../Context/featureFlagContext';
import { IFeatureFlags } from '../Interfaces/IFeatureFlags';

// Custom hook to use the feature flag context

export const useFeatureFlag = (flag: keyof IFeatureFlags): boolean | undefined => {
    const context = useContext(FeatureFlagContext);
    if (context === undefined) {
        throw new Error('useFeatureFlag must be used within a FeatureFlagProvider');
    }
    return context.flags[flag];
};
