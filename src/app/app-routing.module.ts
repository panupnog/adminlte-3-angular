import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from '@modules/main/main.component';
import {BlankComponent} from '@pages/blank/blank.component';
import {LoginComponent} from '@modules/login/login.component';
import {ProfileComponent} from '@pages/profile/profile.component';
import {RegisterComponent} from '@modules/register/register.component';
import {DashboardComponent} from '@pages/dashboard/dashboard.component';
import {AuthGuard} from '@guards/auth.guard';
import {NonAuthGuard} from '@guards/non-auth.guard';
import {ForgotPasswordComponent} from '@modules/forgot-password/forgot-password.component';
import {RecoverPasswordComponent} from '@modules/recover-password/recover-password.component';
import {PrivacyPolicyComponent} from '@modules/privacy-policy/privacy-policy.component';
import {MainMenuComponent} from '@pages/main-menu/main-menu.component';
import {SubMenuComponent} from '@pages/main-menu/sub-menu/sub-menu.component';
import { ProductListComponent } from '@pages/product-list/product-list.component';
import { ManagecctvComponent } from '@pages/managecctv/managecctv.component';
import { ListReheasalsComponent } from '@pages/list-reheasals/list-reheasals.component';
import { ManageWarehouseComponent } from '@pages/manage-warehouse/manage-warehouse.component';
import { DealProblemsComponent } from '@pages/deal-problems/deal-problems.component';
import { AssignTechnicianComponent } from '@pages/assign-technician/assign-technician.component';
import { UserManageComponent } from '@pages/user-manage/user-manage.component';
import { TechnicianManageComponent } from '@pages/technician-manage/technician-manage.component';
import { ReportComponent } from '@pages/report/report.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'blank',
                component: BlankComponent
            },
            {
                path: 'sub-menu-1',
                component: SubMenuComponent
            },
            {
                path: 'sub-menu-2',
                component: BlankComponent
            },
            {
                path: '',
                component: DashboardComponent
            },
            {
            path: 'product-list',
            component: ProductListComponent 
        },{
            path:'managecctv',
            component: ManagecctvComponent
        },
        {
            path:'list-reheasals',
            component: ListReheasalsComponent
        },
        {
            path:'manage-warehouse',
            component:ManageWarehouseComponent
        },
        {
            path:'deal-problems',
            component: DealProblemsComponent
        },
        {
            path:'assign-technician',
            component: AssignTechnicianComponent
        },
        {
            path:'user-manage',
            component: UserManageComponent
        },
        {
            path:'technician-manage',
            component: TechnicianManageComponent
        },
        {
            path:'report',
            component: ReportComponent
        }
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'recover-password',
        component: RecoverPasswordComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent,
        canActivate: [NonAuthGuard]
    },
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
