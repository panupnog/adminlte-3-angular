import {AppState} from '@/store/state';
import {UiState} from '@/store/ui/state';
import {Component, HostBinding, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppService} from '@services/app.service';
import {Observable} from 'rxjs';

const BASE_CLASSES = 'main-sidebar elevation-4';
@Component({
    selector: 'app-menu-sidebar',
    templateUrl: './menu-sidebar.component.html',
    styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit {
    @HostBinding('class') classes: string = BASE_CLASSES;
    public ui: Observable<UiState>;
    public user;
    public menu = MENU;

    constructor(
        public appService: AppService,
        private store: Store<AppState>
    ) {}

    ngOnInit() {
        this.ui = this.store.select('ui');
        this.ui.subscribe((state: UiState) => {
            this.classes = `${BASE_CLASSES} ${state.sidebarSkin}`;
        });
        this.user = this.appService.user;
    }
}

export const MENU = [
    {
        name: 'หน้าหลัก',
        path: ['/dashboard']
    },
    {
        name: 'รายการสินค้า',
        path: ['/product-list']
    },
    {
        name: 'จัดการข้อมูลอุปกรณ์',
        children: [
            {
                name: 'จัดการข้อมูลกล้องวงจรปิด',
                path: ['managecctv']
            },

            {
                name: 'จัดการคลังสินค้า',
                path: ['manage-warehouse']
            }

        ]
    },
    {
        name: 'แจ้งซ่อม',
        children: [
            {
                name: 'จัดการประเภทปัญหา',
                path: ['deal-problems']
            }
            ,

            {
                name: 'ส่งต่อข้อมูลให้ช่าง',
                path: ['assign-technician']
            }

        ]
    }, {
        name: 'รายการแจ้งซ่อม',
        path: ['/list-reheasals']
    },
    {
        name: 'จัดการข้อมูลผู้ใช้งาน',
        path: ['user-manage']
    },
    {
        name: 'จัดการข้อมูลช่าง',
        path: ['technician-manage']
    },
    {
        name: 'รายงาน',
        path: ['report']
    },
    
    // {
    //     name: 'Main Menu',
    //     children: [
    //         {
    //             name: 'Sub Menu',
    //             path: ['/sub-menu-1']
    //         },

    //         {
    //             name: 'Blank',
    //             path: ['/sub-menu-2']
    //         }

    //     ]
    // }
    
];
