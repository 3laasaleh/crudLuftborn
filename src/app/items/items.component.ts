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
  addForm: FormGroup;
  editForm: FormGroup;
loader:boolean=true;
  tableData:IItemModel[]=[];
  constructor(private _serv:GlobService,private _formbuilder: FormBuilder,
    public _dialogService: DialogService,
    public _confirmationService :ConfirmationService,
    private _messageService: MessageService) {
      this.addForm = this._formbuilder.group({
        name:['',Validators.required],
        desc:[]
      });
      this.editForm = this._formbuilder.group({
        id:[],
        name:[Validators.required],
        desc:[]
      });
     }

  ngOnInit(): void {
this.getAll();
  }
  getAll(){
    this._serv.get("items").subscribe(s=>{
      this.tableData=s;
      console.log(s);
    this.loader=false;
    });
  }
  addDialog=false;
  editDialog=false;
  deleteDialog=false;
  deleteId=0;

  showEditDialog(item:IItemModel){

    this.editForm.controls['id'].setValue(item.id);
    this.editForm.controls['name'].setValue(item.name);
    this.editForm.controls['desc'].setValue(item.desc);
    this.editDialog=true;
  }
  showDeleteDialog (item:IItemModel){
    this.deleteId=item.id;
  this.deleteDialog=true;

    this._confirmationService.confirm({
      message: 'item will be deleted, click ok for confirm',
      accept: () => {
        this.deleteItem();
         this._messageService.add({severity:'success', summary:' success  ', 
         detail:'successfull'});
  this.getAll();
      },
      reject:()=>{
  this.getAll();
        this._messageService.add({severity:'error', summary:'  Error ', 
        });

      }
  });
  }
 deleteItem(){

    this._serv.delete("items",this.deleteId).subscribe({
  next:(res)=>{
      this._messageService.add({severity:'success', summary:' success  ', 
           detail:'successfull'});
           this.getAll();
           this.deleteDialog=false;
  },
  error:(e)=>{console.log(e)},
  
    })
  
  }
  updateItem(){
  
    this._serv.put("items",this.editForm.value).subscribe({
  next:(res)=>{
      this._messageService.add({severity:'success', summary:' success  ', 
           detail:'successfull'});
           this.getAll();
  this.editDialog=false;

  
  },
  error:(e)=>{console.log(e)},
  
    })
  
  }
addNewItem(){
  this._serv.post("items",this.addForm.value).subscribe({
next:(res)=>{
    this._messageService.add({severity:'success', summary:' success  ', 
         detail:'successfull'});
  this.tableData.push(res);
  this.addDialog=false;


},
error:(e)=>{console.log(e)},

  })

}
}
