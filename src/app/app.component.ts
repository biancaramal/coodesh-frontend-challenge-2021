
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/services/http.service';
import { MatTableDataSource } from '@angular/material/table';
import { Paciente } from 'src/interfaces/interfaces.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pacientes: any;

  //Table
  dataSource!: MatTableDataSource<Paciente>;
  displayedColumns = ['name', 'gender', 'birth', 'actions'];
  
  constructor(
    private http: HttpService
  ){}

  ngOnInit(): void {
    this.get();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  get(){
    this.http.get('/').subscribe((res: any) => {
      console.log(res);
      this.pacientes = res.results;

      this.dataSource = new MatTableDataSource(this.pacientes);
    });
  }

}
