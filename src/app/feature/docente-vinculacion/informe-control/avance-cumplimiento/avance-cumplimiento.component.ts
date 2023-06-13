import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { jsPDF } from "jspdf";
import 'jspdf-autotable';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AvanceCumplimientoService } from 'src/app/service/avanze_cumplimiento/avance-cumplimiento.service';
import { AvanzeCumplimientoModels } from 'src/app/models/avanze/avanze_cumplimiento/avanze_cumplimiento';

@Component({
  selector: 'app-avance-cumplimiento',
  templateUrl: './avance-cumplimiento.component.html',
  styleUrls: ['./avance-cumplimiento.component.css']
})
export class AvanceCumplimientoComponent implements OnInit, OnDestroy, AfterViewInit {
  form!: FormGroup;
  id?: string;
  title!: string;
  loading = false;
  submitting = false;
  submitted = false;
  addAvanzeForm: avanzeForm = new avanzeForm();
  avanzeList: any = [];
  idTodelete: number = 0;
  idToupdate: number = 0;
  public doc: any;
  @ViewChild("avanzeForm")

  avanzeForm!: NgForm;

  isSubmitted: boolean = false;
  post: AvanzeCumplimientoModels = {
    id: 0,
    resumen: '',
    indicadores: '',
    medios: '',
    observacion: '',

  };
  constructor(
    // private avanceCumplimientoHttpService:AvanceCumplimientoHttpService
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private httpProvider: AvanceCumplimientoService
    // private alertService: AlertService
  ) { }





  // avance: AvanceCumplimiento = [4];


  esvacio: Boolean = false;


  ngOnInit(): void {


    this.getAllAvanze();


  }
  ngAfterViewInit() {
    // aqui
  }
  ngOnDestroy() {

  }

  public pdf() {
    var d = new Date();
    var s = new Date();
    var dia = s.getUTCDate();
    var ed = this.id
    const month_value = d.getMonth();

    var months = new Array(12);
    months[0] = "Enero";
    months[1] = "Febrero";
    months[2] = "Marzo";
    months[3] = "Abril";
    months[4] = "Mayo";
    months[5] = "Junio";
    months[6] = "Julio";
    months[7] = "Agosto";
    months[8] = "Septiembre";
    months[9] = "Octubre";
    months[10] = "Noviembre";
    months[11] = "Diciembre";

    // var fir =this.reportReport[0].nombres.charAt(0);
    // var ult =this.reportReport[0].nombres.charAt(this.reportReport[0].nombres.length - 1);

    //numeros aleatorios//
    var data = []

    this.doc = new jsPDF('p', 'pt');
    let rows: never[] = [];

    const pageContent = (data: any) => {
      // HEADER
      this.doc.setFontSize(16);
      // this.doc.setFontStyle('bold');
      this.doc.text('INSTITUTO SUPERIOR TECNOLÓGICO', 175, 85);
      this.doc.text('D E   T U R I S M O   Y	P A T R I M O N I O', 155, 115);
      this.doc.text('“Y A V I R A C”', 255, 145);

      this.doc.setFontSize(7);
      this.doc.text('Quito- Ecuador', 215, 165);

      this.doc.setFontSize(11);  
      // this.doc.setFontStyle('bold');
      this.doc.text('DEPARTAMENTO DE VINCULACIÓN CON LA  SOCIEDAD :', 180, 210);
      // this.doc.setFontSize(11);
      // this.doc.setFontStyle('normal');
      // this.doc.text('VINCULACIÓN CON LA  SOCIEDAD', 280, 210);

      this.doc.setFontSize(11);
      // this.doc.setFontStyle('bold');
      this.doc.text('CARRERA:', 155, 230);
      this.doc.setFontSize(10);
      // this.doc.setFontStyle('normal');
      this.doc.text('TECNOLOGÍA EN DESARROLLO DE SOFTWARE', 205, 230);

      this.doc.setFontSize(8);
      this.doc.text('NOMBRE DEL PROYECTO:', 160, 185);
      this.doc.setFontSize(7);
      this.doc.text('IMPLEMENTACIÓN DE UN SISTEMA WEB QUE PERMITA DAR A CONOCER LOS SERVICIOS Y PRODUCTOS QUE OFRECE LA FUNDACIÓN NACIONAL DE PARÁLISIS CEREBRAL “FUNAPACE”', 280, 185, { maxWidth: 200, align: 'justify' });

      this.doc.setFontSize(8);
      this.doc.text('COORDINADOR DE CARRERA:', 45, 295);
      this.doc.setFontSize(7);
      this.doc.text('ING. DIEGO YANEZ', 175, 295);
      this.doc.setFontSize(10);

      this.doc.setFontSize(8);
      this.doc.text('ACTORES:/TUTORES:', 45, 315);
      this.doc.setFontSize(7);
      this.doc.text('BYRON MORENO / YOGLEDIS HERRERA', 175, 315);
      this.doc.setFontSize(10);


      this.doc.setFontSize(8);
      this.doc.text('INSTITUCIÓN BENEFICIARIA:', 45, 335);
      this.doc.setFontSize(7);
      this.doc.text('FUNDACIÓN NACIONAL DE PARÁLISIS CEREBRAL FUNAPACE', 175, 335);
      this.doc.setFontSize(10);


      this.doc.setFontSize(8);
      this.doc.text('COORDINADOR(ES) INSTITUCIÓN BENEFICIARIA:', 45, 355);
      this.doc.setFontSize(7);
      this.doc.text('DIEGO YANEZ', 250, 355);
      this.doc.setFontSize(10);


      this.doc.setFontSize(8);
      this.doc.text('CODIGO DEL PROYECTO:', 45, 375);
      this.doc.setFontSize(7);
      this.doc.text('IST Yavirac-VC-DS-002-2023', 175, 375);
      this.doc.setFontSize(10);


      this.doc.setFontSize(8);
      this.doc.text('CODIGO DEL PROYECTO:', 45, 375);
      this.doc.setFontSize(7);
      this.doc.text('IST Yavirac-VC-DS-002-2023', 175, 375);
      this.doc.setFontSize(10);


      this.doc.setFontSize(8);
      this.doc.text('Quito-Ecuador', 185, 450);
      this.doc.setFontSize(8);
      this.doc.text('MAYO - 2023', 185, 470);

    }




    // this.doc.autoTable({
    //   addPageContent: pageContent,

    //   head: [['Name', 'Email', 'Country']],

    //   body: [
    //     ['David', 'david@example.com', 'Sweden'],
    //     ['Castille', 'castille@example.com', 'Spain'],
    //     // ...
    //   ],
    //   startY: 400,
    //   // Default for all columns
    //   styles: { overflow: 'ellipsize', cellWidth: 'wrap' },
    //   // Override the default above for the text column
    //   columnStyles: { text: { cellWidth: 'auto' } },

    // })

    this.doc.autoTable({
      addPageContent: pageContent,
    })

    this.doc.save("table.pdf");




  }
  public bodyRows(rowCount: any) {
    rowCount = rowCount || 10
    var body = []
    for (var j = 1; j <= rowCount; j++) {
      body.push({
        id: j,
        name: 'jose',
        email: 'joseostaiza  ',
        city: 'quito',
        expenses: 'd',
      })
    }
    return body
  }
  public addAvanze(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.addAvanze(this.addAvanzeForm).subscribe(async data => {

        if (data.data.avanze != null && data.data.avanze != null) {
          if (data.status === 'success') {
            setTimeout(() => {
              window.location.reload();
            }, 500);
          }
        }

      },
        async error => {
          console.log(error.message);

          // setTimeout(() => {
          //   this.router.navigate(['/Home']);
          // }, 500);
        });
    }
  }

  public getAllAvanze() {
    this.httpProvider.getAvanze().subscribe((data: any) => {



      if (data.data.avanzes != null && data.data.avanzes != null) {
        var resultData = data.data.avanzes;
        if (resultData) {
          console.log(resultData);

          this.avanzeList = resultData;
        }
      }
    },
      (error: any) => {
        if (error) {
          if (error.status == 404) {
            if (error.error && error.error.message) {
              this.avanzeList = [];
            }
          }
        }
      });
  }

  public openDeleteModal(id: number) {

    this.idTodelete = id;
  }

  public openUpdateModal(id: number) {
    this.idToupdate = id;

    this.getById(id);

  }
  public getById(id: number) {
    this.httpProvider.getAvanzeById(id).subscribe((data) => {
      console.log(data);

      this.post = data.data.avanze[0];


    });
  }

  public update() {
    this.httpProvider.updateAvanze(this.idToupdate, this.post)
      .subscribe({
        next: (data) => {
          console.log(data);

          window.location.reload();
        },
        error: (err) => {
          console.log(err);
        }
      })
  }
  public delete() {
    this.httpProvider.deleteAvanzeById(this.idTodelete).subscribe((data: any) => {
      console.log(data);
      if (data.status === 'success') {
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }
    },
      (error: any) => { });
  }

}
export class avanzeForm {
  resumen: string = "";
  indicadores: string = "";
  medios: string = "";
  observacion: string = "";
}