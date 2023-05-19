import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

/* import de rutas */
import { FeatureRoutingModule } from './feature-routing.module';

/* import de componentes shared */
import { ModuleHeaderComponent } from '../shared/header/module.header.component';
import { NoContentComponent } from '../shared/no-content/no-content.component';
import { SpinnerComponent } from '../shared/loader/spinner/spinner.component';
import { MaterialModule } from '../shared/material/material.module';
import { PaginationComponent } from '../shared/pagination/pagination.component';

/* import de componente perfil */
import { ProfileMainComponent } from '../auth/profile/main/main.component';
import { ProfileSidebarComponent } from '../auth/profile/sidebar/sidebar.component';
import { ProfileSecurityComponent } from '../auth/profile/seguridad/seguridad.component';
import { ProfilePersonalDataComponent } from '../auth/profile/general/general.component';
import { ProfileBreadcrumbsComponent } from '../auth/profile/breadcrumbs/breadcrumbs.component';

/* import de componentes de personal */
import { PersonalBreadcrumbsComponent } from './personal/header/breadcrumbs/personal.breadcrumbs.component';
import { PersonalTabsComponent } from './personal/header/tabs/personal.tabs.component';

/* import de componentes de usuarios */
import { UsuariosBreadcrumbsComponent } from './personal/usuarios/breadcrumbs/usuario.breadcrumbs.component';
import { UsuariosFormComponent } from './personal/usuarios/form/usuario.form.component';
import { UsuariosListComponent } from './personal/usuarios/list/usuario.list.component';
import { UsuariosArchivedComponent } from './personal/usuarios/archived/usuario.archived.component';

/* import de componentes de roles */
import { RolesBreadcrumbsComponent } from './personal/roles/breadcrumbs/rol.breadcrumbs.component';
import { RolesFormComponent } from './personal/roles/form/rol.form.component';
import { RolesListComponent } from './personal/roles/list/rol.list.component';
import { RolesArchivedComponent } from './personal/roles/archived/rol.archived.component';
import { RolesComboboxComponent } from './personal/roles/combobox/rol.combobox.component';

/* import de componentes de permisos */
import { PermisosListComponent } from './personal/roles/permisos/list/permiso.list.component';
import { PermisosListCheckboxComponent } from './personal/roles/permisos/list-checkbox/permiso.list.checkbox.component';

/* import de pipes */
import { FullNameFirstMiddlePipe } from '../shared/pipes/full-name-first-middle.pipe';
import { FullNameShortPipe } from '../shared/pipes/full-name-short.pipe';
import { NameInitialsPipe } from '../shared/pipes/name-initials.pipe';
import { NamesSurnamesCompletePipe } from '../shared/pipes/names-surnames-complete.pipe';
import { CapitalizePipe } from '../shared/pipes/capitalize.pipe';
import { TimeAgoPipe } from '../shared/pipes/time-ago.pipe';
import { AgePipe } from '../shared/pipes/age.pipe';

import { HasPermissionsDirective } from '../auth/has-permission.directive';

import { CantonsComboboxComponent } from '../shared/comboboxes/división-territorial/cantones/cantones.combobox.component';
import { ParishesComboboxComponent } from '../shared/comboboxes/división-territorial/parroquias/parroquias.combobox.component';
import { ProvincesComboboxComponent } from '../shared/comboboxes/división-territorial/provincias/provincias.combobox.component';
import { GendersComboboxComponent } from '../shared/comboboxes/generos/generos.combobox.component';
import { IdentificationTypesComboboxComponent } from '../shared/comboboxes/tipos-identificacion/tipos-identificacion.combobox.component';
import { UploadComponent } from './upload/upload.component';

import { PortafolioListComponent } from './portafolio/list/portafolio-list.component';
import { PortafolioBreadcrumbsComponent } from './portafolio/header/breadcrumbs/portafolio-breadcrumbs.component';
import { PortafolioTabsComponent } from './portafolio/header/tabs/portafolio-tabs.component';
import { PortafolioFormComponent } from './portafolio/form/portafolio-form.component';
import { PortafolioArchivedComponent } from './portafolio/archived/portafolio-archived.component';
import { OficialDocumentsStatesComboboxComponent } from '../shared/comboboxes/oficial-documents-state/oficial-documents-state.combobox.component';
import { SolicitudBreadcrumbsComponent } from './docente-vinculacion/solicitud/header/breadcrumbs/solicitud.breadcrumbs.component';
import { OficiosArchivedComponent } from './docente-vinculacion/solicitud/archived/oficios-archived.component';
import { OficiosFormComponent } from './docente-vinculacion/solicitud/form/oficio.form.component';
import { SolicitudTabsComponent } from './docente-vinculacion/solicitud/header/tabs/solicitud.tabs.component';
import { SolicitudListComponent } from './docente-vinculacion/solicitud/list/solicitud-list.component';




@NgModule({
  declarations: [
    OficialDocumentsStatesComboboxComponent,
    AgePipe,
    TimeAgoPipe,
    CapitalizePipe,
    NameInitialsPipe,
    FullNameShortPipe,
    FullNameFirstMiddlePipe,
    NamesSurnamesCompletePipe,

    UploadComponent,

    HasPermissionsDirective,
    ModuleHeaderComponent,
    SpinnerComponent,
    NoContentComponent,

    ProfileMainComponent,
    ProfileSidebarComponent,
    ProfileBreadcrumbsComponent,
    ProfileSecurityComponent,
    ProfilePersonalDataComponent,

    PersonalBreadcrumbsComponent,
    PersonalTabsComponent,
    UsuariosBreadcrumbsComponent,
    UsuariosFormComponent,
    UsuariosListComponent,
    UsuariosArchivedComponent,
    RolesBreadcrumbsComponent,
    RolesFormComponent,
    RolesListComponent,
    RolesArchivedComponent,
    RolesComboboxComponent,
    PermisosListComponent,
    PermisosListCheckboxComponent,

    IdentificationTypesComboboxComponent,
    GendersComboboxComponent,
    ProvincesComboboxComponent,
    CantonsComboboxComponent,
    ParishesComboboxComponent,

    
    SolicitudBreadcrumbsComponent,
    SolicitudTabsComponent,
    PaginationComponent,
    SolicitudListComponent,
    OficiosArchivedComponent,
    OficiosFormComponent,
    PortafolioListComponent,
    PortafolioBreadcrumbsComponent,
    PortafolioTabsComponent,
    PortafolioFormComponent,
    PortafolioArchivedComponent,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxPaginationModule,
  ],

  exports: [
    AgePipe,
    TimeAgoPipe,
    CapitalizePipe,
    SpinnerComponent,
    NameInitialsPipe,
    FullNameShortPipe,
    NoContentComponent,
    NgxPaginationModule,
    PaginationComponent,
    FullNameFirstMiddlePipe,
    HasPermissionsDirective,
  ],
})
export class FeatureModule {}
