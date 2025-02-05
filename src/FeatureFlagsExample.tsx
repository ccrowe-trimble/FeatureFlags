import { useFeatureFlag } from "./Hooks/useFeatureFlag";

function FeatureFlagsExample() {

    const enableFeature1 = useFeatureFlag('enableFeature1');
    const enableFeature2 = useFeatureFlag('enableFeature2');

    return (
        <>
            {enableFeature1 && <h2>Feature1 Enabled</h2>}
            {!enableFeature1 && <h2>Feature1 Disabled</h2>}

            <hr />

            {enableFeature2 && <h2>Feature2 Enabled</h2>}
            {!enableFeature2 && <h2>Feature2 Disabled</h2>}

            <hr />
            <i>You can modify the feature flags in /public/featureFlags.json</i>, this page should auto refresh every second, the flags are re-read every 10 seconds.
            <hr />
            {new Date().toLocaleTimeString()}
        </>
    )
}

export default FeatureFlagsExample;
