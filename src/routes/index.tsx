import { Navigate, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Login from "../pages/auth/login";
import DashboardLayout from "../layout/dashboard";
import { dashboardRoutes } from "./dashboard";
import { ErrorBoundary } from "@ant-design/pro-utils";
import { PageLoading } from "@ant-design/pro-layout";
import { useUser } from "../context/UserContext";

const MainRoutes: React.FC = () => {
  const { userStatus } = useUser();

  return (
    <Routes>
      {/* Login Route */}
      <Route 
        path="/" 
        element={
          <ErrorBoundary>
            <Suspense fallback={<PageLoading />}>
              <Login />
            </Suspense>
          </ErrorBoundary>
        } 
      />
      
      {/* Admin Dashboard Routes */}
      <Route 
        path="/dashboard-admin" 
        element={
          <ErrorBoundary>
            <Suspense fallback={<PageLoading />}>
              <DashboardLayout />
            </Suspense>
          </ErrorBoundary>
        }
      >
        {/* Default redirect for dashboard */}
        <Route index element={<Navigate to="Ажилчдын-бүртгэл" replace />} />
        
        {/* Map all dashboard routes */}
        {dashboardRoutes.map((route) => (
          <Route
            key={route.key}
            path={route.path}
            element={
              <ErrorBoundary>
                <Suspense fallback={<PageLoading />}>
                  {route.element}
                </Suspense>
              </ErrorBoundary>
            }
          >
            {/* Handle nested routes (for subtabs) */}
            {route.children?.map((child) => (
              <Route
                key={child.key}
                path={child.path}
                element={
                  <ErrorBoundary>
                    <Suspense fallback={<PageLoading />}>
                      {child.element}
                    </Suspense>
                  </ErrorBoundary>
                }
              />
            ))}
          </Route>
        ))}
      </Route>

      {/* Cashier Dashboard Routes */}
      <Route 
        path="/dashboard-cashier" 
        element={
          <ErrorBoundary>
            <Suspense fallback={<PageLoading />}>
              <DashboardLayout />
            </Suspense>
          </ErrorBoundary>
        }
      >
        {/* Same structure as admin dashboard */}
        <Route index element={<Navigate to="Ажилчдын-бүртгэл" replace />} />
        
        {dashboardRoutes.map((route) => (
          <Route
            key={route.key}
            path={route.path}
            element={
              <ErrorBoundary>
                <Suspense fallback={<PageLoading />}>
                  {route.element}
                </Suspense>
              </ErrorBoundary>
            }
          >
            {route.children?.map((child) => (
              <Route
                
                key={child.key}
                path={child.path}
                element={
                  <ErrorBoundary>
                    <Suspense fallback={<PageLoading />}>
                      {child.element}
                    </Suspense>
                  </ErrorBoundary>
                }
              />
            ))}
          </Route>
        ))}
      </Route>

      <Route
        path="*"
        element={
          userStatus ? (
            <Navigate to="/dashboard-admin" replace />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
    </Routes>
  );
};

export default MainRoutes;