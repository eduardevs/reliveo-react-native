import {AuthProvider} from './src/context/AuthContext';
import {AppNav} from './src/navigators/AppNav';
import {SyncEventProvider} from "./src/context/SyncEventContext";

export default function App() {

    return (
        <AuthProvider>
            <SyncEventProvider>
                <AppNav/>
            </SyncEventProvider>
        </AuthProvider>
    );
}
