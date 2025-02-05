
import './App.css'
import { useEffect, useState } from 'react';
import FeatureFlagsExample from './FeatureFlagsExample';



function App() {
    const [key, setKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setKey(prevKey => prevKey + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <h1>Feature Flags</h1>
            <FeatureFlagsExample key={key} />
        </>
    );
}

export default App
