
import './App.css'
import { useFeatureFlag } from './Hooks/useFeatureFlag'



function App() {
    const enableFeature1 = useFeatureFlag('enableFeature1');
    const enableFeature2 = useFeatureFlag('enableFeature2');

    return (
        <>
            <h1>Feature Flags</h1>

            {enableFeature1 && <h2>Feature1 Enabled</h2>}
            {!enableFeature1 && <h2>Feature1 Disabled</h2>}

            <hr />

            {enableFeature2 && <h2>Feature2 Enabled</h2>}
            {!enableFeature2 && <h2>Feature2 Disabled</h2>}

        </>
    )
}

export default App
