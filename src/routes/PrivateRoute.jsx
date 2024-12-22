import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
