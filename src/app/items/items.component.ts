import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { GlobService } from 'src/_core/publicService.Service';
import { IItemModel } from './model/Iitem_Model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  AddForm: FormGroup;
  EditForm: FormGroup;
loader:boolean=true;
  tableData:IItemModel[]=[];
  constructor(private _serv:GlobService,private _formbuilder: FormBuilder,
    public _dialogService: DialogService,
    public _confirmationService :ConfirmationService,
    private _messageService: MessageService) {
      this.AddForm = this._formbuilder.group({
        name:[Validators.required],
        desc:[]
      });
      this.EditForm = this._formbuilder.group({
        id:[Validators.required],
        name:[Validators.required],
        desc:[]
      });
     }

  ngOnInit(): void {
this.getAll();
  }
  getAll(){
    this._serv.get("items").subscribe(s=>{this.tableData=s;
    this.loader=false;
    });
  }
  addDialog=false;
  editDialog=false;
  deleteDialog=false;

  showEditDialog(){}
  showDeleteDialog (){
  this.deleteDialog=true;

    this._confirmationService.confirm({
      message: 'item will be deleted, click ok for confirm',
      accept: () => {
         this._messageService.add({severity:'success', summary:' success  ', 
         detail:'successfull'});
      },
      reject:()=>{
        this._messageService.add({severity:'error', summary:'  Error ', 
        });

      }
  });
  }

  showAddDialog (){
this.addDialog=true;

}
addNewItem(){
  this._serv.post("items",this.AddForm.value).subscribe({
next:(res)=>{
    this._messageService.add({severity:'success', summary:' success  ', 
         detail:'successfull'});
  this.tableData.push(res);

},
error:(e)=>{console.log(e)},

  })

}
}
