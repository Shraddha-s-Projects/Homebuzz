import { Routes, RouterModule } from "@angular/router";
import { MainLayoutComponent } from "./layout/main-layout/main-layout.component";
import { AgentLayoutModule } from "./layout/agent-layout/agent-layout.module";
import { AgentLayoutComponent } from "./layout/agent-layout/agent-layout.component";
import { AuthGuard } from "./core/services/auth-guard.service";
import { AdminLayoutComponent } from "./layout/admin-layout/admin-layout.component";
import { UserProfileModule } from "./pages/user-profile/user-profile.module";

const appRoutes: Routes = [
  //{ path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: "", redirectTo: "dashboard", pathMatch: "full" },

  //No layout routes : start
  { path: "login", loadChildren: "./pages/login/login.module#LoginModule" },
  { path: "", loadChildren: "./pages/login/login.module#LoginModule", pathMatch: "full" },
  { path: "logout", loadChildren: "./pages/logout/logout.module#LogoutModule" },
  { path: "resetpassword", loadChildren: "./pages/resetpassword/resetpassword.module#ResetpasswordModule" },
  { path: "signup", loadChildren: "./pages/signup/signup.module#SignupModule" },
  { path: "verify/account/:emailHash", loadChildren: "./pages/verify/verify.module#VerifyModule" },
  { path: "verify/account/:codeHash/:emailHash", loadChildren: "./pages/verify/verify.module#VerifyModule" },
  { path: "verify", loadChildren: "./pages/verify/verify.module#VerifyModule" },
  { path: "verify-email/account/:emailHash", loadChildren: "./pages/verify-email/verify-email.module#VerifyEmailModule" },
  {
    path: "edit-user/:userId", 
    loadChildren: "./pages/user-profile/user-profile.module#UserProfileModule",
    canActivate: [AuthGuard],
    data: { roles: ["Agent", "Admin", "Customer", "Agent_Admin"] }
  },
  {
    path: "file-upload", 
    loadChildren: "./pages/file-upload/file-upload.module#FileUploadModule",
    canActivate: [AuthGuard],
    data: { roles: ["Admin"] }
  },
  //No layout routes : End

  //User Dashboard layout : Start
  // {
  //   path: "",
  //   component: MainLayoutComponent,
  //   children: [
  //     {
  //       path: "dashboard",
  //       loadChildren: "./pages/dashboard/dashboard.module#DashboardModule",
  //       canActivate: [AuthGuard],
  //       data: { roles: ["Agent", "Admin", "Customer", "Visitor"] }
  //     },
  //     {
  //       path: "dashboard/:pageName/:UserId",
  //       loadChildren: "./pages/dashboard/dashboard.module#DashboardModule",
  //       canActivate: [AuthGuard],
  //       data: { roles: ["Agent", "Admin", "Customer", "Visitor"] }
  //     },
  //   ]
  // },
  //User Dashboard layout : End

  // search result page layout: Start
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: "./pages/dashboard/dashboard.module#DashboardModule",
        // canActivate: [AuthGuard],
        // data: { roles: ["Agent", "Admin", "Customer", "Visitor", "Agent_Admin"] }
      },
      {
        path: "dashboard/:pageName",
        loadChildren: "./pages/dashboard/dashboard.module#DashboardModule",
        // canActivate: [AuthGuard],
        // data: { roles: ["Agent", "Admin", "Customer", "Visitor", "Agent_Admin"] }
      },
      {
        path: "dashboard/:pageName/:UserId",
        loadChildren: "./pages/dashboard/dashboard.module#DashboardModule",
        // canActivate: [AuthGuard],
        // data: { roles: ["Admin", "Customer"] }
      },
      {
        path: "dashboard/:pageName/:address/:Id",
        loadChildren: "./pages/dashboard/dashboard.module#DashboardModule",
        // canActivate: [AuthGuard],
        // data: { roles: ["Agent", "Admin", "Customer", "Visitor", "Agent_Admin"] }
      },
      {
        path: "dashboard/:pageName/:address/:Id/:RandomNo",
        loadChildren: "./pages/dashboard/dashboard.module#DashboardModule",
        // canActivate: [AuthGuard],
        // data: { roles: ["Agent", "Admin", "Customer", "Visitor", "Agent_Admin"] }
      },
      {
        path: "property",
        loadChildren: "./pages/search-result-page/search-result-page.module#SearchResultPageModule",
        // canActivate: [AuthGuard],
        // data: { roles: ["Agent", "Admin", "Customer", "Visitor", "Agent_Admin"] }
      },
      {
        path: "property/:pageName/:address",
        loadChildren: "./pages/search-result-page/search-result-page.module#SearchResultPageModule",
        // canActivate: [AuthGuard],
        // data: { roles: ["Admin", "Customer"] }
      },
      {
        path: "property/:pageName/:address/:Id",
        loadChildren: "./pages/search-result-page/search-result-page.module#SearchResultPageModule",
        // canActivate: [AuthGuard],
        // data: { roles: ["Agent", "Admin", "Customer", "Visitor", "Agent_Admin"] }
      },
      {
        path: "property/:pageName/:address/:Id/:RandomNo",
        loadChildren: "./pages/search-result-page/search-result-page.module#SearchResultPageModule",
        // canActivate: [AuthGuard],
        // data: { roles: ["Agent", "Admin", "Customer", "Visitor", "Agent_Admin"] }
      },
      {
        path: "property/:pageName",
        loadChildren: "./pages/search-result-page/search-result-page.module#SearchResultPageModule",
        // canActivate: [AuthGuard],
        // data: { roles: ["Agent", "Admin", "Customer", "Visitor", "Agent_Admin"] }
      },
    ]
  },
  // search result page layout: Start

  // Agent layout: Start
  {
    path: "agent",
    component: AgentLayoutComponent,
    children: [
      {
        path: "signup",
        loadChildren: "./pages/agent-pages/agent-signup/agent-signup.module#AgentSignupModule",
        // canActivate: [AuthGuard],
        // data: { roles: ["Agent", "Admin", "Agent_Admin"] }
      },
      {
        path: "dashboard",
        loadChildren: "./pages/agent-pages/agent-dashboard/agent-dashboard.module#AgentDashboardModule",
        canActivate: [AuthGuard],
        data: { roles: ["Agent", "Admin", "Agent_Admin"] }
      },
      {
        path: "dashboard/:pageName/:RandomNo",
        loadChildren: "./pages/agent-pages/agent-dashboard/agent-dashboard.module#AgentDashboardModule",
        canActivate: [AuthGuard],
        data: { roles: ["Agent", "Admin", "Agent_Admin"] }
      },
      {
        path: "dashboard/:pageName/:address/:Id/:RandomNo",
        loadChildren: "./pages/agent-pages/agent-dashboard/agent-dashboard.module#AgentDashboardModule",
        canActivate: [AuthGuard],
        data: { roles: ["Agent", "Admin", "Agent_Admin"] }
      },
    ]
  },

  // Agent layout: Start
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: "./pages/admin-pages/admin-dashboard/admin-dashboard.module#AdminDashboardModule",
        // canActivate: [AuthGuard],
        // data: { roles: ["Agent", "Admin", "Agent_Admin"] }
      }
    ]
  },

  // Agent layout: End

  // otherwise redirect to Login
  { path: "**", loadChildren: "./pages/login/login.module#LoginModule" }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: false, onSameUrlNavigation: "reload" });
