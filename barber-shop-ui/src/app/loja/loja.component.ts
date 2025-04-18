import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-loja',
  imports: [CommonModule],
  templateUrl: './loja.component.html',
  styleUrl: './loja.component.scss'
})
export class LojaComponent {
products: {
description: any;
imageUrl: any; id: number; name: string; price: number
}[] = [
  {
    id: 1, name: 'Creme de Barbear', price: 89.90,
    description: 'Produto para barbear',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Proraso_-_Crema_de_afeitar_y_gel_para_cortes.jpg/960px-Proraso_-_Crema_de_afeitar_y_gel_para_cortes.jpg?20181110150751'
  },
  {
    id: 2, name: 'Barbeador Elétrico', price: 189.90,
    description: 'Produto para barbear',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Philips_Norelco_9700_Rotary_Electric_Shaver_%2830973817280%29.jpg/800px-Philips_Norelco_9700_Rotary_Electric_Shaver_%2830973817280%29.jpg?20170125154108'
  },
  {
    id: 3, name: 'Lâminas de Barbear', price: 29.90,
    description: 'Produto para barbear',
    imageUrl: 'https://mebabo.cdn.magazord.com.br/img/2021/10/produto/16608/3-laminawilkinsionok.png?ims=800x800'
  },
  {
    id: 4, name: 'Pomada barbeadora', price: 19.90,
    description: 'Produto para barbear',
    imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_659279-MLB44966561938_022021-F.webp'
  }


]
}
