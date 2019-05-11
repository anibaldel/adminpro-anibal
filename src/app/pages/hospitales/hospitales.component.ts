import { Component, OnInit } from '@angular/core';
import { Hospital } from 'src/app/models/hospital.model';
import { HospitalService } from '../../services/service.index';
import Swal from 'sweetalert2';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styles: []
})
export class HospitalesComponent implements OnInit {

  hospitales: Hospital[] = [];

  constructor(
    public _hospitalService: HospitalService,
    public _modalUploadService: ModalUploadService
  ) { }

  ngOnInit() {
    this.cargarHospitales();
    this._modalUploadService.notificacion
          .subscribe( () => this.cargarHospitales () );
  }

  buscarHospital(termino: string) {

    if ( termino.length <= 0) {
      this.cargarHospitales();
      return;
    }
    this._hospitalService.buscarHospital( termino )
          .subscribe( hospitales => this.hospitales = hospitales );
  }

  cargarHospitales() {
    this._hospitalService.cargarHospitales()
          .subscribe( hospitales => this.hospitales = hospitales );
  }


  guardarHospital( hospital: Hospital) {

    this._hospitalService.actualizarHospital( hospital )
          .subscribe();
  }

  borrarHospital( hospital: Hospital) {

    this._hospitalService.borrarHospital( hospital._id )
          .subscribe( () => this.cargarHospitales() );
  }

  crearHospital() {
    Swal.fire({
      type: 'info',
      title: 'Crear hospital',
      text: 'Ingrese nombre del hospital',
      input: 'text',
    inputAttributes: {
    autocapitalize: 'off'
  },
      showCancelButton: true

    }).then( (result ) => {

      if ( !result.value || result.value.length === 0 ) {
        return;
      }

      this._hospitalService.crearHospital( result.value )
              .subscribe( () => this.cargarHospitales() );
    });
  }

  actualizarImagen( hospital: Hospital) {

    this._modalUploadService.mostarModal( 'hospitales', hospital._id );

  }

}
