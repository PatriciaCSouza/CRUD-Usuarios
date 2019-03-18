import { Component } from '@angular/core';
import { Usuario } from './models/usuario';
import { environment } from 'src/environments/environment';
import { HttpResponse, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Index';
  _usuarios: Usuario[];
  usuario: Usuario = new Usuario;
  ids: string;
  exibeLinhaIncluida: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.carregarDadosUsuarios();

  }

  carregarDadosUsuarios() {
    let usuario;
    return this.http.get(environment.url.baseApi.concat(environment.url.usuarios))
      .toPromise().then((res: HttpResponse<any>) => {
        usuario = JSON.parse(res.body);

        if (usuario) {
          this._usuarios = usuario;
        }
      },
        (err) => {
          console.log(err);
        });
  }

  carregarDadosUsuario(usuarioId: string) {
    let usuario;
    return this.http.get(environment.url.baseApi.concat(environment.url.usuarios).concat(usuarioId))
      .toPromise().then((res: HttpResponse<any>) => {
        usuario = JSON.parse(res.body);

        if (usuario) {
          this.usuario = usuario;
        }
      },
        (err) => {
          console.log(err);
        });
  }


  async carregarUsuario() {
    await this.carregarDadosUsuarios();

  }

  AddNovoCliente() {
    this.usuario = new Usuario();
  }

  // Adicionar
  async AddUsuario() {
    if (this.usuario.Id == '') {
      await this.http.post(environment.url.baseApi.concat(environment.url.usuarios), this.usuario);
    }
    else {
      await this.http.put(environment.url.baseApi.concat(environment.url.usuarios), this.usuario);
    }
    this.usuario = new Usuario();
    this.carregarDadosUsuarios();
  }

  async DelUsuario(usuarioID: string) {
    if (this.usuario.Id == '') {
      await this.http.delete(environment.url.baseApi.concat(environment.url.usuarios).concat(usuarioID));
    }

  }

  // Editar
  async EditUsuario(usuarioID: string) {
    console.log('entrou no Edit');
    this.ids = usuarioID;
    this.carregarDadosUsuario(usuarioID);
  }

  // Deletar
  async DeleteUsuario(usuarioID: string) {
    console.log('entrou no Delete');

    this.ids = usuarioID;
    await this.DelUsuario(usuarioID);
    this.carregarDadosUsuarios();
  }

}
