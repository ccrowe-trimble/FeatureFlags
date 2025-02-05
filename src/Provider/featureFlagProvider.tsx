import React, { useState, useEffect } from 'react';
import { IFeatureFlags } from '../Interfaces/IFeatureFlags';
import { FeatureFlagContext } from '../Context/featureFlagContext';

// Create the provider component

export const FeatureFlagProvider: React.FC<{ children: React.ReactNode; }> = ({ children }) => {
    const [flags, setFlags] = useState<IFeatureFlags>({} as IFeatureFlags);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchFlags = () => {
            setLoading(true);
            fetch('/featureFlags.json')
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch feature flags');
                    }
                    return response.json();
                })
                .then((data: IFeatureFlags) => {
                    setFlags(data);
                    setLoading(false);
                })
                .catch((error: Error) => {
                    console.error('Error fetching feature flags:', error);
                    setError(error);
                    setLoading(false);
                });
        };

        // Fetch flags initially
        fetchFlags();

        // Poll every 10 seconds (10,000 milliseconds)
        const intervalId = setInterval(fetchFlags, 10000);

        // Cleanup interval on unmount
        return () => clearInterval(intervalId);
    }, []);


    return (
        <FeatureFlagContext.Provider value={{ flags, loading, error }}>
            {children}
        </FeatureFlagContext.Provider>
    );
};
