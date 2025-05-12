import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { RootState } from '../store';
import { useEffect } from 'react';

const withAuth = (WrappedComponent: any, accessType: 'public' | 'private') => {
    const AuthenticatedComponent = (props: any) => {
      const router = useRouter();
      const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  
      useEffect(() => {
        if (accessType === 'private' && !isAuthenticated) {
          router.replace('/login');
        } else if (accessType === 'public' && isAuthenticated) {
          router.replace('/orders');
        }
      }, [isAuthenticated, router]);
  
      return <WrappedComponent {...props} />;
    };
  
    return AuthenticatedComponent; 
  };
  

export default withAuth;
