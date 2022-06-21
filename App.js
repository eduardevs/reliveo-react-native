<<<<<<< HEAD
import { AuthProvider } from './src/context/AuthContext';
import { AppNav } from './src/navigators/AppNav';

export default function App() {
    return (
        <AuthProvider>
            <AppNav />
        </AuthProvider>
    );
}
=======
import { RootStack } from "./src/navigators/RootStack";
import IndexSynchro from "./src/containers/synchro/indexSynchro";

export default function App() {
  return (
      <IndexSynchro />
)}

>>>>>>> bc1ab34 (patch import)
