import { createContext } from 'react';
import { IFeatureFlags } from '../Interfaces/IFeatureFlags';


// Define the context type
interface FeatureFlagContextType {
    flags: IFeatureFlags;
    loading: boolean;
    error: Error | null;
}

// Create the context
export const FeatureFlagContext = createContext<FeatureFlagContextType | undefined>(undefined);


