import { createContext } from 'react';
import { FeatureFlags } from '../Types/featureFlags';


// Define the context type
interface FeatureFlagContextType {
    flags: FeatureFlags;
    loading: boolean;
    error: Error | null;
}

// Create the context
export const FeatureFlagContext = createContext<FeatureFlagContextType | undefined>(undefined);


