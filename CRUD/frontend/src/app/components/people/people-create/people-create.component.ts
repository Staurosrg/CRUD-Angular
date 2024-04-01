import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import { PeopleService } from '../people.service';

@Component({
	selector: 'app-people-create',
	templateUrl: './people-create.component.html',
	styleUrl: './people-create.component.css'
})
export class PeopleCreateComponent implements OnInit {
	constructor(private peopleService:PeopleService,
		private router:Router){}
	ngOnInit(): void {
		
	}
	createPeople(): void{
		this.peopleService.showMessage('Pessoa criada com sucesso')
	}
	cancel(): void{
		this.router.navigate(['/peoples'])
	}
}
