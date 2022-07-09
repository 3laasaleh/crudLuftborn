import { NgModule } from "@angular/core";
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {InputNumberModule} from 'primeng/inputnumber';
import {DataViewModule} from 'primeng/dataview';
import {TabViewModule} from 'primeng/tabview';
import {SidebarModule} from 'primeng/sidebar';
import {CalendarModule} from 'primeng/calendar';
import {ToolbarModule} from 'primeng/toolbar';
import {MenuModule} from 'primeng/menu';
import {TabMenuModule} from 'primeng/tabmenu';
import {PanelModule} from 'primeng/panel';
import {DividerModule} from 'primeng/divider';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {DialogService} from 'primeng/dynamicdialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {PasswordModule} from 'primeng/password';
@NgModule({
    imports:[MenubarModule,ButtonModule,InputTextModule,InputNumberModule,DataViewModule,
        PanelModule, DividerModule,ProgressSpinnerModule,  MenuModule, TabViewModule,
        CalendarModule,DropdownModule,InputTextareaModule,DialogModule,
        SidebarModule,ToolbarModule,TabMenuModule,TableModule,DynamicDialogModule,
        ConfirmDialogModule,ToastModule,PasswordModule
            ],
    exports:[MenubarModule,ButtonModule,InputTextModule,InputNumberModule,DataViewModule,
        PanelModule, DividerModule,ProgressSpinnerModule,  MenuModule, TabViewModule,
        CalendarModule,DropdownModule,InputTextareaModule,DialogModule,
        SidebarModule,ToolbarModule,TabMenuModule,TableModule,DynamicDialogModule,
        ConfirmDialogModule,ToastModule,PasswordModule
    ],
    providers: [DialogService,ConfirmationService,MessageService]
})



export class NGPrimeModule {}