import { HomeComponent } from './../../home/home.component';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgIf } from '@angular/common';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-produto-form',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule
],
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss']
})
export class ProdutoFormComponent implements OnInit {
voltar() {
throw new Error('Method not implemented.');
}
cancelar() {
throw new Error('Method not implemented.');
}

  produto: Produto = {
    nome: '',
    preco: 0,
    descricao: '',
    estoque: '',
    categoria: ''
  };
  isEdicao = false;

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEdicao = true;
      this.carregarProduto(id);
    }
  }

  onSubmit() {
    if (this.isEdicao) {
      // Atualiza produto existente
      this.produtoService.updateProduto(this.produto.id!, this.produto).subscribe({
        next: () => {
          alert('Produto atualizado com sucesso!');
          this.router.navigate(['/produtos']);
        },
        error: (err) => console.error('Erro ao atualizar:', err)
      });
    } else {
      // Cria novo produto
      this.produtoService.createProduto(this.produto).subscribe({
        next: () => {
          alert('Produto criado com sucesso!');
          this.router.navigate(['/produtos']);
        },
        error: (err) => console.error('Erro ao criar:', err)
      });
    }
  }

  carregarProduto(id: number) {
    this.produtoService.getProduto(id).subscribe({
      next: (produto) => this.produto = produto,
      error: (err) => console.error('Erro ao carregar:', err)
    });
  }
  // Métodos (carregarProduto, onSubmit, cancelar) mantidos iguais ao anterior
}
