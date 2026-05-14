import AppRouter from './router/AppRouter'
import { AuthProvider } from './contexts/AuthContext'
import { ProfileOnboarding } from './components/ui/ProfileOnboarding'

function App() {
  return (
    <AuthProvider>
      <ProfileOnboarding />
      <AppRouter />
    </AuthProvider>
  )
}

export default App
