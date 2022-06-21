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
import BottomNav from "./src/containers/bottomNav/bottomNav";

export default function App() {
  return (
      <BottomNav />
)}

>>>>>>> bc1ab34 (patch import)
