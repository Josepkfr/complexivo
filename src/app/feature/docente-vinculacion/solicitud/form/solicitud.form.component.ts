import {SolicitudHttpService} from "../../../../service/docente-vinculacion/solicitud/solicitud-http.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {
  ProyectoParticipanteHttpService
} from "../../../../service/proyecto/participante/proyecto-participante-http.service";
import {SolicitudModels} from "../../../../models/docente-vinculacion/solicitud/solicitud";
import {ProyectoParticipanteModels} from "../../../../models/proyecto/ProjectParticipant/proyecto-participante.moduls";
import {Subscription} from "rxjs";
import {Component, OnInit} from "@angular/core";
import { MyErrorStateMatcher } from "src/app/shared/matcher/error-state-matcher";
import { ProyectoModels } from "src/app/models/proyecto/proyecto.models";
import { ProyectoService } from "src/app/service/proyecto/proyecto.service";
import { format } from "date-fns";

@Component({
  selector: 'app-solicitud-form',
  templateUrl: './solicitud.form.component.html',
  styleUrls: ['./solicitud.form.component.css'],
})
export class SolicitudFormComponent implements OnInit {

  currentSolicitude: SolicitudModels = {} as SolicitudModels;
  currentProyectoParticipante: ProyectoParticipanteModels = {} as ProyectoParticipanteModels;
  proyectoParticipante: ProyectoParticipanteModels[] = [];
  paramsSubscription: Subscription;
  formGroup: FormGroup;
  title = 'Asignar Estudiante';
  loading = true;
  selectedProject: any;


  constructor(
    private solicitudeHttpService: SolicitudHttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private proyectoParticipanteHttpService: ProyectoParticipanteHttpService,
    private proyectoService: ProyectoService,
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.getProyectoParticipante();
    this.getProyectos();
    this.paramsSubscription = this.activatedRoute.params.subscribe((params: Params) => {
      if (params['id']) {
        this.title = 'Asignar Estudiante';
        this.getSolicitudById(params['id']);
      } else {
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      }
    });
  }

  buildForm(): void {
    this.formGroup = this.formBuilder.group({
      approval_date: ['', Validators.nullValidator],
      project_id: ['', Validators.required],
      //created_at: ['', [Validators.required, Validators.pattern(/^(\\d{4}-\\d{2}-\\d{2})/)]],
      created_by:this.formBuilder.group({
        id:[0],
        email:[''],
        person:this.formBuilder.group({
          name:[''],
          identification:[''],
          last_names:[''],
        })
      })
    });
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      const id = this.currentSolicitude.id || 0;
      this.solicitudeHttpService.asignarSolicitud(id, this.formGroup.value).subscribe(
        (response: any) => {
          if (response.status === 'success') {
            console.log('Relación actualizada correctamente');
            this.router.navigate(['system/solicitud/list']);
          }
        },
        (error: any) => {
          console.log('Error al actualizar la relación:', error.message);
        }
      );
    }
  }

  getProyectoParticipante(): void {
    this.proyectoParticipanteHttpService.getProyectoParticipante().subscribe((rest:any) => {
      this.proyectoParticipante = rest.data.projectParticipants;
    });
  }

  getSolicitudById(id: number): void {
    this.loading = true;
    this.solicitudeHttpService.getSolicitudById(id).subscribe({
      next: (response: any) => {
        if (response.status === 'success') {
          this.currentSolicitude = response.data.solicitudes;
          this.formGroup.patchValue(this.currentSolicitude);
        }
      },
      error: (error: any) => {
        console.log('Error al obtener la solicitud:', error.message);
      },
      complete: () => {
        this.loading = false;
      }
    });
  }


  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
    this.sub?.unsubscribe();
  }

  //combobox

  // validators
  proyectosFormControl = new FormControl('', [Validators.required]);

  //Validación de errores en el formulario
  matcher = new MyErrorStateMatcher();

  proyectos: ProyectoModels[] = [];


  onProjectSelected(project_id: string) {
    const selectedProject = this.proyectos.find(project => project.id === parseInt(project_id));
    this.solicitudeHttpService.setSelectedProject(selectedProject);
  }

  private sub?: Subscription;
  //propiedad privada que contiene una referencia a la suscripción que se crea cuando roleFormControl cambia el valor.
  onTouchedCb?: () => void;
  writeValue(obj: any): void {
    obj && this.proyectosFormControl.setValue(obj.id);
  }
  //registra una función que será llamada cuando el valor de los roleFormControl cambia
  registerOnChange(fn: any): void {
    this.sub = this.proyectosFormControl.valueChanges.subscribe(fn);
  }


  //registra una función que será llamada cuando se toque el control. La función se almacena en la onTouchedCbpropiedad para su uso posterior
  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }
  // este método se usa para habilitar o deshabilitar el control según el isDisabledState booleano pasado.
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.proyectosFormControl.disable() : this.proyectosFormControl.enable();
  }

  getProyectos(): void {
    this.proyectoService.getProyecto().subscribe((res: any) => {
      if (res.status === 'success') {
        this.proyectos = res.data.projects;
      }
    });
  }

  //fecha
  obtenerFechaActual() {
    const fecha = new Date();
    const fechaFormateada = format(fecha, "'Quito,' d 'de' MMMM 'del' yyyy");

    return fechaFormateada;
  }

}
